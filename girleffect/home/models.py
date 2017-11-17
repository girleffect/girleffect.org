from django.db import models

from wagtail.wagtailcore.models import Page
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel

from girleffect.utils.models import (
    CallToActionSnippet,
    HeroVideoFields,
    SocialFields
)


class HomePage(Page, HeroVideoFields, SocialFields):
    call_to_action = models.ForeignKey(CallToActionSnippet, blank=True, null=True, on_delete=models.SET_NULL, related_name='+')

    content_panels = Page.content_panels + HeroVideoFields.content_panels + [
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
