from django.db import models

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    HeroImageFields,
    ListingFields,
    SocialFields
)


class StandardPage(Page, HeroImageFields, SocialFields, ListingFields):
    introduction = models.TextField(blank=True)
    body = StreamField(StoryBlock())
    call_to_action = models.ForeignKey(
        'utils.CallToActionSnippet',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    search_fields = Page.search_fields + HeroImageFields.search_fields + [
        index.SearchField('introduction'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
        FieldPanel('introduction'),
        StreamFieldPanel('body'),
        SnippetChooserPanel('call_to_action'),

    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels + ListingFields.promote_panels


class StandardIndex(Page, HeroImageFields, SocialFields):
    body = StreamField(StoryBlock(), blank=True)

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
        StreamFieldPanel('body'),

    ]

    search_fields = Page.search_fields + HeroImageFields.search_fields + [
        index.SearchField('body'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels
