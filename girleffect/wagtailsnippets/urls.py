from __future__ import absolute_import, unicode_literals

from django.conf.urls import url

from .views import chooser, snippets

urlpatterns = [
    url(r'^$', snippets.index_redirect, name='index'),
    url(r'^(\d+)/$', snippets.index, name='index'),

    url(r'^choose/$', chooser.choose, name='choose_generic'),
    url(r'^choose/(\d+)/(\w+)/(\w+)/$', chooser.choose, name='choose'),
    url(r'^choose/(\w+)/(\w+)/(\d+)/(\d+)/$', chooser.chosen, name='chosen'),

    url(
        r'^chooser/current-site-id/$',
        snippets.get_current_site_id_for_snippet_chooser,
        name='current_site_id'
    ),

    url(r'^(\w+)/(\w+)/(\d+)/$', snippets.list, name='list'),
    url(r'^(\w+)/(\w+)/(\d+)/add/$', snippets.create, name='add'),
    url(r'^(\w+)/(\w+)/(\d+)/(\d+)/$', snippets.edit, name='edit'),
    url(r'^(\w+)/(\w+)/(\d+)/(\d+)/delete/$', snippets.delete, name='delete'),
    url(r'^(\w+)/(\w+)/(\d+)/(\d+)/usage/$', snippets.usage, name='usage'),
]
