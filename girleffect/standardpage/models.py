from django.db import models

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField, RichTextField
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
    introduction = RichTextField(
        blank=True,
        null=True,
        features=['bold', 'italic', 'link', 'justify']
    )
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
    exclude_from_navigation = models.BooleanField(
        blank=True,
        default=False,
        help_text="Check to prevent linking to this page in the navigation and breadcrumbs,\
            for example if the page is empty."
    )

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
        StreamFieldPanel('body'),
        FieldPanel('exclude_from_navigation'),
    ]

    search_fields = Page.search_fields + HeroImageFields.search_fields + [
        index.SearchField('body'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels
