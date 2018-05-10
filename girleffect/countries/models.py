from django.db import models
from django.utils.functional import cached_property

from girleffect.articles.models import ArticlePage
from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    CustomisableFeature,
    HeroImageFields,
    ListingFields,
    SocialFields,
    PageRelatedPage)

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel,
    MultiFieldPanel, PageChooserPanel, StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField, RichTextField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailsearch import index
from girleffect.wagtailsnippets.edit_handlers import SnippetChooserPanel


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


class CountryCustomisablePartners(CustomisableFeature):
    page = ParentalKey(
        'CountryPage',
        related_name='partners_customisation'
    )


class CountryCustomisableArticles(CustomisableFeature):
    page = ParentalKey(
        'CountryPage',
        related_name='articles_customisation'
    )


class CountryPage(Page, HeroImageFields, SocialFields, ListingFields):
    body = StreamField(StoryBlock())
    partners_title = models.CharField(
        blank=True,
        null=True,
        max_length=255,
        help_text='Title text to appear as Partnerships heading.'
    )
    partners_description = RichTextField(
        blank=True,
        null=True,
        help_text='Description text to appear below Partnerships heading for Partnership block.',
        features=['bold', 'italic', 'link', 'justify']
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
    featured_article = models.ForeignKey(
        'articles.ArticlePage',
        verbose_name="Featured News",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text="Select a featured article to display first in article section",
        related_name='+',
    )

    @cached_property
    def articles(self):
        # returns articles that have solution selected as a related page
        all_articles = ArticlePage.objects.filter(related_pages__page=self).live().public().order_by('-publication_date')
        if self.featured_article_id:
            all_articles = all_articles.exclude(pk=self.featured_article_id)
        return all_articles[:3]

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

    @cached_property
    def article_customisations(self):
        return self.articles_customisation.first()

    @cached_property
    def partners_customisations(self):
        return self.partners_customisation.first()

    @cached_property
    def related_reverse_pages(self):
        pages = PageRelatedPage.objects.filter(page_id=self.id)
        return pages

    search_fields = Page.search_fields + HeroImageFields.search_fields + [
        index.SearchField('body')
    ]

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
        StreamFieldPanel('body'),
        MultiFieldPanel([
            InlinePanel('articles_customisation', label="Articles Listing Customisation", max_num=1),
            PageChooserPanel('featured_article'),
        ], 'Articles Listing'),
        MultiFieldPanel([
            FieldPanel('partners_title'),
            FieldPanel('partners_description'),
            InlinePanel('related_partners', label="Related partners"),
            InlinePanel('partners_customisation', label="Partners Customisation", max_num=1),
        ], 'Partners Listing'),
        SnippetChooserPanel('call_to_action'),
        InlinePanel(
            'show_related_pages',
            label='Show on these pages',
            help_text='Related pages where this page need to be shown'
        )
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
