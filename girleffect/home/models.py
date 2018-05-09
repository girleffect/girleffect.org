from django.db import models
from django.utils.functional import cached_property

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    PageChooserPanel,
    StreamFieldPanel,
    InlinePanel)

from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import StreamField, RichTextField
from girleffect.wagtailsnippets.edit_handlers import SnippetChooserPanel

from girleffect.articles.models import ArticlePage
from girleffect.utils.models import (
    CallToActionSnippet,
    HeroVideoFields,
    SocialFields,
    RelatedPages)

from girleffect.utils.blocks import StoryBlock


class HomePage(Page, HeroVideoFields, SocialFields):
    introduction = RichTextField(
        blank=True,
        null=True,
        features=['bold', 'italic', 'link', 'justify']
    )
    call_to_action = models.ForeignKey(CallToActionSnippet, blank=True, null=True, on_delete=models.SET_NULL, related_name='+')
    body = StreamField(StoryBlock(), null=True)
    featured_article = models.ForeignKey(
        'articles.ArticlePage',
        verbose_name="Featured News",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text="Select a featured article to display first in article section",
        related_name='+',
    )

    content_panels = Page.content_panels + HeroVideoFields.content_panels + [
        FieldPanel('introduction'),
        StreamFieldPanel('body'),
        PageChooserPanel('featured_article'),
        SnippetChooserPanel('call_to_action'),
        InlinePanel(
            'show_related_pages',
            label='Show on these pages',
            help_text='Related pages where this page need to be shown'
        )
    ]

    @cached_property
    def articles(self):
        all_articles = ArticlePage.objects.in_site(self.get_site()).live().public().order_by('-publication_date')
        if self.featured_article_id:
            all_articles = all_articles.exclude(pk=self.featured_article_id)
        return all_articles[:6]

    @property
    def related_reverse_pages(self):
        pages = RelatedPages.objects.filter(page_id=self.id)
        return pages

    promote_panels = (
        Page.promote_panels +  # slug, seo_title, show_in_menus, search_description
        SocialFields.promote_panels
    )

    def get_link_text(self):
        if self.link_text:
            return self.link_text

        if self.link_page:
            return self.link_page.title

        return ''

    # Only allow creating HomePages at the root level
    parent_page_types = ['wagtailcore.Page']
