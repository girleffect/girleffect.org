from django.db import models
from django.utils.functional import cached_property

from wagtail.wagtailadmin.edit_handlers import (
    StreamFieldPanel
)

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel

from girleffect.articles.models import ArticlePage
from girleffect.utils.models import (
    CallToActionSnippet,
    HeroVideoFields,
    SocialFields
)

from girleffect.utils.blocks import StoryBlock


class HomePage(Page, HeroVideoFields, SocialFields):
    call_to_action = models.ForeignKey(CallToActionSnippet, blank=True, null=True, on_delete=models.SET_NULL, related_name='+')
    body = StreamField(StoryBlock(), null=True)

    @cached_property
    def articles(self):
        return ArticlePage.objects.all().live().public().order_by('-publication_date')[:3]

    content_panels = Page.content_panels + HeroVideoFields.content_panels + [
        StreamFieldPanel('body'),
        SnippetChooserPanel('call_to_action'),
    ]

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
