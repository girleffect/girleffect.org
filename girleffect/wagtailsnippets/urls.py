from __future__ import absolute_import, unicode_literals

from django.conf.urls import url

from .views import chooser, snippets

urlpatterns = [
    url(r'^$', snippets.index_redirect, name='index'),
    url(r'^(\d+)/$', snippets.index, name='index'),

    url(r'^choose/(\d+)/$', chooser.choose, name='choose_generic'),
    url(r'^choose/(\w+)/(\w+)/(\d+)/$', chooser.choose, name='choose'),
    url(r'^choose/(\w+)/(\w+)/(\d+)/(\d+)/$', chooser.chosen, name='chosen'),

    url(r'^(\w+)/(\w+)/(\d+)/$', snippets.list, name='list'),
    url(r'^(\w+)/(\w+)/(\d+)/add/$', snippets.create, name='add'),
    url(r'^(\w+)/(\w+)/(\d+)/(\d+)/$', snippets.edit, name='edit'),
    url(r'^(\w+)/(\w+)/(\d+)/(\d+)/delete/$', snippets.delete, name='delete'),
    url(r'^(\w+)/(\w+)/(\d+)/(\d+)/usage/$', snippets.usage, name='usage'),
]
