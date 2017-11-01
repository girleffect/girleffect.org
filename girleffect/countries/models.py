from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.db import models
from django.utils.functional import cached_property

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    ListingFields,
    RelatedDocument,
    SocialFields,
)

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel,
    PageChooserPanel, StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel


class CountryPageRelatedSolution(Orderable, models.Model):
    page = ParentalKey('countries.CountryPage', related_name='solutions',
                       blank=True, null=True)
    solution_page = models.ForeignKey(
        'solutions.SolutionPage',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name='country_solutions'
    )

    panels = [
        PageChooserPanel('solution_page'),
    ]


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


class RegionIndex(Page, SocialFields):
    introduction = models.TextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels

    subpage_types = ['CountryIndex']

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        subpages = self.get_children().live()
        per_page = settings.DEFAULT_PER_PAGE
        page_number = request.GET.get('page')
        paginator = Paginator(subpages, per_page)

        try:
            subpages = paginator.page(page_number)
        except PageNotAnInteger:
            subpages = paginator.page(1)
        except EmptyPage:
            subpages = paginator.page(paginator.num_pages)

        context['subpages'] = subpages

        return context


class CountryIndex(Page, SocialFields):
    introduction = models.TextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels

    subpage_types = ['CountryPage']

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        subpages = self.get_children().live()
        per_page = settings.DEFAULT_PER_PAGE
        page_number = request.GET.get('page')
        paginator = Paginator(subpages, per_page)

        try:
            subpages = paginator.page(page_number)
        except PageNotAnInteger:
            subpages = paginator.page(1)
        except EmptyPage:
            subpages = paginator.page(paginator.num_pages)

        context['subpages'] = subpages

        return context


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
        InlinePanel('solutions', label="Related solutions"),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
