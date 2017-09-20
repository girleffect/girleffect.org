from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.db import models

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    ListingFields,
    RelatedDocument,
    RelatedPage,
    SocialFields,
)

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel,
    StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel


class SolutionPageRelatedDocument(RelatedDocument):
    page = ParentalKey('solutions.SolutionPage',
                       related_name='related_documents')


class SolutionPageRelatedPage(RelatedPage):
    source_page = ParentalKey('solutions.SolutionPage',
                              related_name='related_pages')


class SolutionIndex(Page, SocialFields):
    introduction = models.TextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
    ]

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels

    subpage_types = ['SolutionPage']

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


class SolutionPage(Page, SocialFields, ListingFields):
    summary = models.TextField(blank=True)
    body = StreamField(StoryBlock())
    call_to_action = models.ForeignKey(
        'utils.CallToActionSnippet',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    search_fields = Page.search_fields + [
        index.SearchField('summary'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('summary'),
        StreamFieldPanel('body'),
        InlinePanel('related_documents', label="Related documents"),
        InlinePanel('related_pages', label="Related pages"),
        SnippetChooserPanel('call_to_action'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
