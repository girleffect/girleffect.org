from django.db import models
from django.utils.functional import cached_property

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import (
    CustomisableFeature,
    ListingFields,
    SocialFields,
    HeroVideoFieldsLogo,
)
from girleffect.articles.models import ArticlePage

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel, InlinePanel,
    MultiFieldPanel, PageChooserPanel, StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField, RichTextField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
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


class SolutionCustomisablePartners(CustomisableFeature):
    page = ParentalKey(
        'SolutionPage',
        related_name='partners_customisation'
    )


class SolutionCustomisableArticles(CustomisableFeature):
    page = ParentalKey(
        'SolutionPage',
        related_name='articles_customisation'
    )


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
    heading_background_image = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text='Add an image to appear as background for page introduction'
    )
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
        featured_article = self.featured_article.specific if self.featured_article else None
        all_articles = ArticlePage.objects.filter(related_pages__page=self).live().public().order_by('-publication_date')
        if featured_article:
            all_articles = all_articles.exclude(pk=featured_article.id)
        articles = all_articles[:2] if featured_article else all_articles[:3]
        return articles

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

    def get_link_text(self):
        if self.link_text:
            return self.link_text

        if self.link_page:
            return self.link_page.title

        return ''

    @cached_property
    def article_customisations(self):
        return self.articles_customisation.first()

    @cached_property
    def partners_customisations(self):
        return self.partners_customisation.first()

    search_fields = Page.search_fields + [
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + HeroVideoFieldsLogo.content_panels + [
        MultiFieldPanel([
            ImageChooserPanel('heading_background_image'),
        ], 'Top Background Customisations'),
        StreamFieldPanel('body'),
        MultiFieldPanel([
            FieldPanel('partners_title'),
            FieldPanel('partners_description'),
            InlinePanel('related_partners', label="Related partners"),
            InlinePanel('partners_customisation', label="Partners Listing Customisation", max_num=1),
        ], 'Partners Listing'),
        SnippetChooserPanel('call_to_action'),
        MultiFieldPanel([
            InlinePanel('articles_customisation', label="Articles Listing Customisation", max_num=1),
            PageChooserPanel('featured_article'),
        ], 'Articles Listing'),
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels \
        + ListingFields.promote_panels
