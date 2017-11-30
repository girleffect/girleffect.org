from django.db import models
from django.utils.functional import cached_property

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    ListingFields,
    SocialFields,
    HeroVideoFieldsLogo,
)
from girleffect.articles.models import ArticlePage

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel,
    StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel


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


class SolutionPage(Page, HeroVideoFieldsLogo, SocialFields, ListingFields):
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
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + HeroVideoFieldsLogo.content_panels + [
        StreamFieldPanel('body'),
        InlinePanel('related_partners', label="Related partners"),
        SnippetChooserPanel('call_to_action'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
