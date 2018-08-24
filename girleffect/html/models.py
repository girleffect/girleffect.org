from django.db import models

from wagtail.wagtailadmin.edit_handlers import StreamFieldPanel
from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.blocks import RawHTMLBlock
from wagtail.wagtailsearch import index


class HTMLPage(Page):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    body = StreamField([('html', RawHTMLBlock())])

    search_fields = Page.search_fields + [
        index.SearchField('title')
    ]

    content_panels = Page.content_panels + [
        StreamFieldPanel('body')
    ]
