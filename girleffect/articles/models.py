from django.db import models
from django.db.models.functions import Coalesce
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import MultiFieldPanel
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel
from wagtail.wagtailsnippets.models import register_snippet
from wagtail.wagtailcore.fields import StreamField, RichTextField
from wagtail.wagtailadmin.edit_handlers import (
    StreamFieldPanel, FieldPanel, InlinePanel
)
from wagtail.wagtailsearch import index

from girleffect.utils.blocks import ArticleIndexBlock
from girleffect.utils.models import (
    HeroImageFields, ListingFields, SocialFields, RelatedPage,
    RelatedDocument, CustomisableFeature
)
from girleffect.utils.blocks import ArticleBlock

DEFAULT_ARTICLES_PER_PAGE = 15


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


class ArticlePage(Page, HeroImageFields, SocialFields, ListingFields):
    # It's datetime for easy comparison with first_published_at
    publication_date = models.DateTimeField(
        null=True, blank=True,
        help_text="Use this field to override the date that the article appears to have been published."
    )
    author = models.CharField(
        blank=True,
        max_length=255,
        help_text="Optional Author name.")
    introduction = RichTextField(
        blank=True,
        null=True,
        features=['bold', 'italic', 'link', 'justify']
    )
    body = StreamField(ArticleBlock())

    search_fields = Page.search_fields + HeroImageFields.search_fields + [
        index.SearchField('author'),
        index.SearchField('introduction'),
        index.SearchField('body')
    ]

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
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


class ArticleIndexCustomisableIntroduction(CustomisableFeature):
    page = ParentalKey(
        'ArticleIndex',
        related_name='introduction_customisation'
    )


class ArticleIndexCustomisableArticles(CustomisableFeature):
    page = ParentalKey(
        'ArticleIndex',
        related_name='article_customisation'
    )


class ArticleIndexCategory(Orderable):
    page = ParentalKey(
        'articles.ArticleIndex',
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


class ArticleIndex(Page, HeroImageFields, SocialFields):
    introduction = RichTextField(
        blank=True,
        null=True,
        features=['bold', 'italic', 'link', 'justify']
    )
    body = StreamField(ArticleIndexBlock(), blank=True)

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
        MultiFieldPanel([
            FieldPanel('introduction'),
            InlinePanel('introduction_customisation', label="Introduction Customisation", max_num=1),
        ], 'Introduction'),
        InlinePanel('article_customisation', label="Article Listing Customisation", max_num=1),
        StreamFieldPanel('body'),
        InlinePanel('categories', label="Article Index Categories")
    ]

    search_fields = Page.search_fields + HeroImageFields.search_fields + [
        index.SearchField('body'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels

    def introduction_customisations(self):
        return self.introduction_customisation.first()

    def article_customisations(self):
        return self.article_customisation.first()

    def get_context(self, request, *args, **kwargs):
        articles = ArticlePage.objects.live().public().descendant_of(self).annotate(
            date=Coalesce('publication_date', 'first_published_at')
        ).order_by('-date')

        if request.GET.get('category'):
            articles = articles.filter(categories__category=request.GET.get('category'))

        # Pagination
        page = request.GET.get('page', 1)
        paginator = Paginator(articles, DEFAULT_ARTICLES_PER_PAGE)
        try:
            articles = paginator.page(page)
        except PageNotAnInteger:
            articles = paginator.page(1)
        except EmptyPage:
            articles = paginator.page(paginator.num_pages)

        context = super().get_context(request, *args, **kwargs)
        context.update(articles=articles)
        if self.categories.exists():
            categories = self.categories.values_list('category')
            # In page preview, the values_list returns a list and the category object
            # however in live view, the values_list returns a QuerySet with the category id and the category fields
            # can be easily requested. A check for the list is made to distinguish between a preview or live view.
            if isinstance(categories, list):
                # Get unique categories
                categories = set(categories)
                context.update(
                    categories=[
                        (category[0].id, category[0].title) for category in categories]
                )
            else:
                context.update(
                    # Only show categories that have been used
                    categories=categories.values_list(
                        'category__pk', 'category__title'
                    ).distinct()
                )
        return context

    subpage_types = ['ArticlePage']
    parent_page_types = ['home.HomePage', 'standardpage.StandardIndex']
