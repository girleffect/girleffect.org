from __future__ import absolute_import, unicode_literals

from django.apps import apps
from django.core.urlresolvers import reverse
from django.http import Http404, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.utils.text import capfirst
from django.utils.translation import ugettext as _
from wagtail.utils.pagination import paginate
from wagtail.wagtailcore.models import Page
from wagtail.wagtailadmin import messages
from wagtail.wagtailadmin.edit_handlers import (
    ObjectList, extract_panel_definitions_from_model_class)
from wagtail.wagtailadmin.forms import SearchForm
from wagtail.wagtailadmin.utils import permission_denied
from wagtail.wagtailcore.models import Site, UserPagePermissionsProxy
from wagtail.wagtailsearch.backends import get_search_backend
from wagtail.wagtailsearch.index import class_is_indexed

from ..models import get_snippet_models
from ..permissions import get_permission_name, user_can_edit_snippet_type


# == Helper functions ==
def get_snippet_model_from_url_params(app_name, model_name):
    """
    Retrieve a model from an app_label / model_name combo.
    Raise Http404 if the model is not a valid snippet type.
    """
    try:
        model = apps.get_model(app_name, model_name)
    except LookupError:
        raise Http404
    if model not in get_snippet_models():
        # don't allow people to hack the URL to edit content types that aren't registered as snippets
        raise Http404

    return model


def get_editable_sites(user):
    """
    There's no per-site permission system for snippets, so we say that
    if the user can edit one page on a site, they will have permission
    to edit snippets for that site as well.
    """
    can_edit_sites = []
    perms = UserPagePermissionsProxy(user)

    for site in Site.objects.all():
        site_pages = site.root_page.get_descendants(inclusive=True)

        if (perms.editable_pages() & site_pages).exists():
            can_edit_sites.append(site)

    return can_edit_sites


def get_site(sites, id):
    for site in sites:
        if site.id == int(id):
            return site

    raise Http404


SNIPPET_EDIT_HANDLERS = {}


def get_snippet_edit_handler(model):
    if model not in SNIPPET_EDIT_HANDLERS:
        if hasattr(model, 'edit_handler'):
            # use the edit handler specified on the page class
            edit_handler = model.edit_handler
        else:
            panels = extract_panel_definitions_from_model_class(model)
            edit_handler = ObjectList(panels)

        SNIPPET_EDIT_HANDLERS[model] = edit_handler.bind_to_model(model)

    return SNIPPET_EDIT_HANDLERS[model]


# == Views ==


def index_redirect(request):
    editable_sites = get_editable_sites(request.user)
    site_to_redirect_to = editable_sites[0]

    # Check if the default site is editable and default to that
    for site in editable_sites:
        if site.is_default_site:
            site_to_redirect_to = site_to_redirect_to
            break

    return redirect('wagtailsnippets:index', site_to_redirect_to.id)


def index(request, site_id):
    editable_sites = get_editable_sites(request.user)
    site = get_site(editable_sites, site_id)

    snippet_model_opts = [
        model._meta for model in get_snippet_models()
        if user_can_edit_snippet_type(request.user, model)]
    return render(request, 'wagtailsnippets/snippets/index.html', {
        'site': site,
        'editable_sites': editable_sites,
        'snippet_model_opts': sorted(
            snippet_model_opts, key=lambda x: x.verbose_name.lower())})


def list(request, app_label, model_name, site_id):
    model = get_snippet_model_from_url_params(app_label, model_name)
    editable_sites = get_editable_sites(request.user)
    site = get_site(editable_sites, site_id)

    permissions = [
        get_permission_name(action, model)
        for action in ['add', 'change', 'delete']
    ]
    if not any([request.user.has_perm(perm) for perm in permissions]):
        return permission_denied(request)

    items = model.objects.filter(site=site)

    # Preserve the snippet's model-level ordering if specified, but fall back on PK if not
    # (to ensure pagination is consistent)
    if not items.ordered:
        items = items.order_by('pk')

    # Search
    is_searchable = class_is_indexed(model)
    is_searching = False
    search_query = None
    if is_searchable and 'q' in request.GET:
        search_form = SearchForm(request.GET, placeholder=_("Search %(snippet_type_name)s") % {
            'snippet_type_name': model._meta.verbose_name_plural
        })

        if search_form.is_valid():
            search_query = search_form.cleaned_data['q']

            search_backend = get_search_backend()
            items = search_backend.search(search_query, items)
            is_searching = True

    else:
        search_form = SearchForm(placeholder=_("Search %(snippet_type_name)s") % {
            'snippet_type_name': model._meta.verbose_name_plural
        })

    paginator, paginated_items = paginate(request, items)

    # Template
    if request.is_ajax():
        template = 'wagtailsnippets/snippets/results.html'
    else:
        template = 'wagtailsnippets/snippets/type_index.html'

    return render(request, template, {
        'site': site,
        'editable_sites': editable_sites,
        'model_opts': model._meta,
        'items': paginated_items,
        'can_add_snippet': request.user.has_perm(get_permission_name('add', model)),
        'is_searchable': is_searchable,
        'search_form': search_form,
        'is_searching': is_searching,
        'query_string': search_query,
    })


def create(request, app_label, model_name, site_id):
    model = get_snippet_model_from_url_params(app_label, model_name)
    editable_sites = get_editable_sites(request.user)
    site = get_site(editable_sites, site_id)

    permission = get_permission_name('add', model)
    if not request.user.has_perm(permission):
        return permission_denied(request)

    instance = model()
    edit_handler_class = get_snippet_edit_handler(model)
    form_class = edit_handler_class.get_form_class(model)

    if request.method == 'POST':
        form = form_class(request.POST, request.FILES, instance=instance)

        if form.is_valid():
            instance = form.save(commit=False)
            instance.site = site
            instance.save()

            messages.success(
                request,
                _("{snippet_type} '{instance}' created.").format(
                    snippet_type=capfirst(model._meta.verbose_name),
                    instance=instance
                ),
                buttons=[
                    messages.button(reverse(
                        'wagtailsnippets:edit', args=(app_label, model_name, site.id, instance.id)
                    ), _('Edit'))
                ]
            )
            return redirect('wagtailsnippets:list', app_label, model_name, site.id)
        else:
            messages.error(request, _("The snippet could not be created due to errors."))
            edit_handler = edit_handler_class(instance=instance, form=form)
    else:
        form = form_class(instance=instance)
        edit_handler = edit_handler_class(instance=instance, form=form)

    return render(request, 'wagtailsnippets/snippets/create.html', {
        'site': site,
        'editable_sites': editable_sites,
        'model_opts': model._meta,
        'edit_handler': edit_handler,
        'form': form,
    })


def edit(request, app_label, model_name, site_id, id):
    model = get_snippet_model_from_url_params(app_label, model_name)
    site = get_site(get_editable_sites(request.user), site_id)

    permission = get_permission_name('change', model)
    if not request.user.has_perm(permission):
        return permission_denied(request)

    instance = get_object_or_404(model, site=site, id=id)
    edit_handler_class = get_snippet_edit_handler(model)
    form_class = edit_handler_class.get_form_class(model)

    if request.method == 'POST':
        form = form_class(request.POST, request.FILES, instance=instance)

        if form.is_valid():
            form.save()

            messages.success(
                request,
                _("{snippet_type} '{instance}' updated.").format(
                    snippet_type=capfirst(model._meta.verbose_name_plural),
                    instance=instance
                ),
                buttons=[
                    messages.button(reverse(
                        'wagtailsnippets:edit', args=(app_label, model_name, site.id, instance.id)
                    ), _('Edit'))
                ]
            )
            return redirect('wagtailsnippets:list', app_label, model_name, site.id)
        else:
            messages.error(request, _("The snippet could not be saved due to errors."))
            edit_handler = edit_handler_class(instance=instance, form=form)
    else:
        form = form_class(instance=instance)
        edit_handler = edit_handler_class(instance=instance, form=form)

    return render(request, 'wagtailsnippets/snippets/edit.html', {
        'site': site,
        'model_opts': model._meta,
        'instance': instance,
        'edit_handler': edit_handler,
        'form': form,
    })


def delete(request, app_label, model_name, site_id, id):
    model = get_snippet_model_from_url_params(app_label, model_name)
    site = get_site(get_editable_sites(request.user), site_id)

    permission = get_permission_name('delete', model)
    if not request.user.has_perm(permission):
        return permission_denied(request)

    instance = get_object_or_404(model, site=site, id=id)

    if request.method == 'POST':
        instance.delete()
        messages.success(
            request,
            _("{snippet_type} '{instance}' deleted.").format(
                snippet_type=capfirst(model._meta.verbose_name_plural),
                instance=instance
            )
        )
        return redirect('wagtailsnippets:list', app_label, model_name, site.id)

    return render(request, 'wagtailsnippets/snippets/confirm_delete.html', {
        'site': site,
        'model_opts': model._meta,
        'instance': instance,
    })


def usage(request, app_label, model_name, site_id, id):
    model = get_snippet_model_from_url_params(app_label, model_name)
    site = get_site(get_editable_sites(request.user), site_id)
    instance = get_object_or_404(model, id=id)

    paginator, used_by = paginate(request, instance.get_usage())

    return render(request, "wagtailsnippets/snippets/usage.html", {
        'site': site,
        'instance': instance,
        'used_by': used_by
    })


def get_current_site_id_for_snippet_chooser(request):
    page_id = request.GET.get('page', None)
    data = {}
    if page_id:
        try:
            page_obj = Page.objects.get(id=page_id)
            data['site_id'] = page_obj.get_site().id
        except (Page.DoesNotExist, AttributeError):
            data['site_id'] = request.site.id

    return JsonResponse(data)
