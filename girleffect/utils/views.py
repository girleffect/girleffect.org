from django.core.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404

from wagtail.wagtailcore.models import Site
from wagtail.contrib.settings.views import (
    edit as settings_edit_view, get_model_from_url_params
)
from wagtail.wagtailadmin.decorators import require_admin_access


@require_admin_access
def custom_settings_edit_view(request, app_name, model_name, site_pk):
    # Settings permissions in Wagtail Groups are object permissions.
    # User has permission to change settings like Navigation Settings
    # can change it for every site. So, overriding the view to add another
    # check. User can only change the settings if have access to edit the
    # root page of the settings's site.

    response = settings_edit_view(request, app_name, model_name, site_pk)

    model = get_model_from_url_params(app_name, model_name)
    site = get_object_or_404(Site, pk=site_pk)
    instance = model.for_site(site)
    root_page = instance.site.root_page

    page_perms = root_page.permissions_for_user(request.user)
    if not page_perms.can_edit():
        raise PermissionDenied

    return response
