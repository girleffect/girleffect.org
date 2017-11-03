from django.db import models
from django.utils.functional import cached_property

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    PageLinkFields,
    ListingFields,
    SocialFields,
)
from girleffect.articles.models import ArticlePage

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
from wagtailmedia.edit_handlers import MediaChooserPanel


class SolutionPageRelatedPartner(Orderable, models.Model):
    page = ParentalKey('solutions.SolutionPage', related_name='related_partners',
                       blank=True, null=True)
    solution_partner = models.ForeignKey(
        'partners.Partner',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name='solution_partners'
    )

    panels = [
        FieldPanel('solution_partner'),
    ]


class SolutionPage(Page, PageLinkFields, SocialFields, ListingFields):
    hero_video = models.ForeignKey(
        'wagtailmedia.Media',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text="Hero Video to show on top of page. Recommended size 12Mb or under.",
        related_name='+'
    )
    hero_fallback_image = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        help_text="Hero Image to be used as fallback for video.",
        on_delete=models.SET_NULL
    )
    summary = models.TextField(blank=True)
    strapline = models.TextField(
        blank=True,
        max_length=80,
        help_text="The strapline will show over the hero image if a logo is not selected."
    )
    logo = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        help_text="The logo will show over the hero image.",
        on_delete=models.SET_NULL
    )
    body = StreamField(StoryBlock())
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

    @cached_property
    def articles(self):
        # returns articles that have solution selected as a related page
        return ArticlePage.objects.filter(related_pages__page=self).live().public().order_by('-publication_date')[:3]

    @cached_property
    def countries(self):
        countries = [
            n.page for n in self.country_solutions.all()
        ]
        return countries

    @cached_property
    def partners(self):
        partners = [
            p.solution_partner for p in self.related_partners.all()
        ]
        return partners

    @cached_property
    def people(self):
        if self.person_category:
            return self.person_category.people
        else:
            return None

    search_fields = Page.search_fields + [
        index.SearchField('summary'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        MediaChooserPanel('hero_video'),
        ImageChooserPanel('hero_fallback_image'),
        FieldPanel('summary'),
        ImageChooserPanel('logo'),
        FieldPanel('strapline')
    ] + PageLinkFields.content_panels + [
        StreamFieldPanel('body'),
        InlinePanel('related_partners', label="Related partners"),
        SnippetChooserPanel('person_category'),
        SnippetChooserPanel('call_to_action'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
