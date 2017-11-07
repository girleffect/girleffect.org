from django.db import models

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    MultiFieldPanel,
    PageChooserPanel
)
from wagtail.wagtailcore.models import Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel
from wagtailmedia.edit_handlers import MediaChooserPanel

from girleffect.utils.models import (
    CallToActionSnippet,
    SocialFields
)


class HomePage(Page, SocialFields):
    hero_video = models.ForeignKey(
        'wagtailmedia.Media',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text="Hero Video to show on top of page. Recommended size 12Mb or under.",
        related_name='+'
    )
    hero_fallback_image = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        help_text="Hero Image to be used as fallback for video.",
        on_delete=models.SET_NULL
    )
    strapline = models.TextField(
        blank=False,
        max_length=80,
        help_text="The strapline will show over the hero image."
    )
    link_page = models.ForeignKey(
        Page,
        blank=True,
        null=True,
        related_name='+',
        on_delete=models.SET_NULL,
    )
    link_url = models.URLField(blank=True)
    link_text = models.CharField(blank=True, max_length=255)
    call_to_action = models.ForeignKey(CallToActionSnippet, blank=True, null=True, on_delete=models.SET_NULL, related_name='+')
    search_fields = Page.search_fields + [
        index.SearchField('strapline'),
    ]

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            MediaChooserPanel('hero_video'),
            ImageChooserPanel('hero_fallback_image'),
            FieldPanel('strapline'),
            MultiFieldPanel([
                PageChooserPanel('link_page'),
                FieldPanel('link_url'),
                FieldPanel('link_text'),
            ], 'Link'),
        ], 'Hero'),
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
