from django.db import models
from django.db.models.functions import Coalesce
from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

from modelcluster.fields import ParentalKey

from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel
from wagtail.wagtailsnippets.models import register_snippet
from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailadmin.edit_handlers import (
    StreamFieldPanel, FieldPanel, InlinePanel
)
from wagtail.wagtailsearch import index

from girleffect.utils.models import (
    ListingFields, SocialFields, RelatedPage,
    RelatedDocument
)
from girleffect.utils.blocks import StoryBlock


@register_snippet
class ArticleCategory(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(
        blank=True,
        help_text='Not currently shown to the end user but may be in the future.'
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'article categories'


class ArticlePageCategory(models.Model):
    page = ParentalKey(
        'articles.ArticlePage',
        related_name='categories'
    )
    category = models.ForeignKey(
        'articles.ArticleCategory',
        related_name='+',
        on_delete=models.CASCADE
    )

    panels = [
        SnippetChooserPanel('category')
    ]


class ArticlePageRelatedDocument(RelatedDocument):
    page = ParentalKey(
        'articles.ArticlePage',
        related_name='related_documents'
    )


class ArticlePageRelatedPage(RelatedPage):
    source_page = ParentalKey(
        'articles.ArticlePage',
        related_name='related_pages'
    )


class ArticlePage(Page, SocialFields, ListingFields):
    # It's datetime for easy comparison with first_published_at
    publication_date = models.DateTimeField(
        null=True, blank=True,
        help_text="Use this field to override the date that the article appears to have been published."
    )
    author = models.CharField(
        blank=True,
        max_length=255,
        help_text="Optional Author name. Will default to 'Girl Effect Team' if empty.")
    introduction = models.TextField(blank=True, max_length=350)
    body = StreamField(StoryBlock())

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
        index.SearchField('body')
    ]

    content_panels = Page.content_panels + [
        FieldPanel('publication_date'),
        FieldPanel('author'),
        FieldPanel('introduction'),
        StreamFieldPanel('body'),
        InlinePanel('categories', label="Category", max_num=1),
        InlinePanel('related_documents', label="Related documents"),
        InlinePanel('related_pages', label="Related pages"),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels + \
        ListingFields.promote_panels

    subpage_types = []
    parent_page_types = ['ArticleIndex']

    @property
    def display_date(self):
        if self.publication_date:
            return self.publication_date
        else:
            return self.first_published_at


class ArticleIndex(Page, SocialFields):
    heading = models.CharField(max_length=80, blank=True)
    introduction = RichTextField(max_length=350, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('heading'),
        FieldPanel('introduction', classname="full"),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels

    def get_context(self, request, *args, **kwargs):
        articles = ArticlePage.objects.live().public().descendant_of(self).annotate(
            date=Coalesce('publication_date', 'first_published_at')
        ).order_by('-date')

        if request.GET.get('category'):
            articles = articles.filter(categories=request.GET.get('category'))

        # Pagination
        page = request.GET.get('page', 1)
        paginator = Paginator(articles, settings.DEFAULT_PER_PAGE)
        try:
            articles = paginator.page(page)
        except PageNotAnInteger:
            articles = paginator.page(1)
        except EmptyPage:
            articles = paginator.page(paginator.num_pages)

        context = super().get_context(request, *args, **kwargs)
        context.update(
            articles=articles,
            # Only show categories that have been used
            categories=ArticlePageCategory.objects.all().values_list(
                'category__pk', 'category__title'
            ).distinct()
        )
        return context

    subpage_types = ['ArticlePage']
    parent_page_types = ['home.HomePage']
