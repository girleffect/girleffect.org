from __future__ import absolute_import, unicode_literals

from django.conf.urls import include, url
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.contrib.staticfiles.templatetags.staticfiles import static
from django.core import urlresolvers
from django.utils.safestring import mark_safe
from django.utils.html import format_html
from django.utils.translation import ugettext_lazy as _
from wagtail.wagtailadmin.menu import MenuItem
from wagtail.wagtailcore import hooks

from . import urls
from .models import get_snippet_models
from .permissions import user_can_edit_snippets


@hooks.register('register_admin_urls')
def register_admin_urls():
    return [
        url(r'^snippets/', include(urls, app_name='wagtailsnippets', namespace='wagtailsnippets')),
    ]


class SnippetsMenuItem(MenuItem):
    def is_shown(self, request):
        return user_can_edit_snippets(request.user)


@hooks.register('register_admin_menu_item')
def register_snippets_menu_item():
    return SnippetsMenuItem(
        _('Snippets'),
        urlresolvers.reverse('wagtailsnippets:index'),
        classnames='icon icon-snippet',
        order=500
    )


@hooks.register('insert_editor_js')
def editor_js():
    return format_html(
        """
            <script src="{0}"></script>
            {1}
        """,
        static('wagtailsnippets/js/snippet-chooser.js'),
        mark_safe(
            """
            <script>
                window.chooserUrls.snippetChooser = '%s';
                var current_page_data = (document.location.pathname.match(/(\d+)/g) || []);
                var current_page_id = current_page_data[current_page_data.length-1];

                $.ajax({
                    url: '%s',
                    data: {
                      'page': current_page_id
                    },
                    dataType: 'json',
                    success: function (data) {
                      window.chooserUrls.snippetChooser += (data.site_id + '/');
                    }
                });
            </script>
            """ % (
                urlresolvers.reverse('wagtailsnippets:choose_generic'),
                urlresolvers.reverse('wagtailsnippets:current_site_id'),
            )
        ),
    )


@hooks.register('register_permissions')
def register_permissions():
    content_types = ContentType.objects.get_for_models(*get_snippet_models()).values()
    return Permission.objects.filter(content_type__in=content_types)
