from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.db import models

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
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel


class CountryPageRelatedDocument(RelatedDocument):
    page = ParentalKey('countries.CountryPage',
                       related_name='related_documents')


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
    subtitle = models.CharField(blank=True, max_length=80)
    introduction = models.TextField(blank=True)
    body = StreamField(StoryBlock())
    call_to_action = models.ForeignKey(
        'utils.CallToActionSnippet',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('subtitle'),
        FieldPanel('introduction'),
        StreamFieldPanel('body'),
        InlinePanel('related_documents', label="Related documents"),
        SnippetChooserPanel('call_to_action'),
        InlinePanel('solutions', label="Related solutions"),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
