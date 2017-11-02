from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.db import models
from django.utils.functional import cached_property

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    ListingFields,
    SocialFields
)

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel,
    StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel


class CountryPageRelatedPartner(Orderable, models.Model):
    page = ParentalKey('countries.CountryPage', related_name='related_partners',
                       blank=True, null=True)
    related_partner = models.ForeignKey(
        'partners.Partner',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name='country_partners'
    )

    panels = [
        FieldPanel('related_partner'),
    ]


class CountryPage(Page, SocialFields, ListingFields):
    hero_image = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        help_text="Hero Image to be used as full width feature image for page.",
        on_delete=models.SET_NULL
    )
    heading = models.CharField(blank=True, max_length=80)
    body = StreamField(StoryBlock())
    partners_description = models.TextField(
        blank=True,
        help_text='Description text to appear below Partnerships heading for Partnership block.'
    )
    person_category = models.ForeignKey(
        'people.PersonCategory',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text="Select a person category to display its team members.",
        related_name='+',
    )
    call_to_action = models.ForeignKey(
        'utils.CallToActionSnippet',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    parent_page_types = ['standardpage.ParentPage']

    @cached_property
    def people(self):
        if self.person_category:
            return self.person_category.people
        else:
            return None

    @cached_property
    def partners(self):
        partners = [
            p.related_partner for p in self.related_partners.all()
        ]
        return partners

    search_fields = Page.search_fields + [
        index.SearchField('heading'),
        index.SearchField('body')
    ]

    content_panels = Page.content_panels + [
        ImageChooserPanel('hero_image'),
        FieldPanel('heading'),
        StreamFieldPanel('body'),
        FieldPanel('partners_description'),
        InlinePanel('related_partners', label="Related partners"),
        SnippetChooserPanel('person_category'),
        SnippetChooserPanel('call_to_action'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
