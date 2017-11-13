from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import ugettext_lazy as _

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    MultiFieldPanel,
    PageChooserPanel
)
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtaildocs.edit_handlers import DocumentChooserPanel
from wagtail.wagtailembeds import oembed_providers
from wagtail.wagtailembeds.embeds import get_embed
from wagtail.wagtailembeds.exceptions import EmbedException
from wagtail.wagtailembeds.finders.oembed import OEmbedFinder as OEmbedFinder
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.models import register_snippet
from wagtail.contrib.settings.models import BaseSetting, register_setting
from wagtailmedia.models import AbstractMedia
from wagtailmedia.edit_handlers import MediaChooserPanel

from girleffect.images.models import CustomImage


class LinkFields(models.Model):
    """
    Adds fields for internal and external links with some methods to simplify the rendering:

    {% if page.link_page %}
        <a href="{% pageurl page.link_page %}">{{ page.get_link_text }}</a>
    {% elif page.link_url  %}
        <a href="{{ page.link_url }}">{{ page.get_link_text }}</a>
    {% endif %}
    """

    link_page = models.ForeignKey(
        Page,
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )
    link_url = models.URLField(blank=True)
    link_text = models.CharField(blank=True, max_length=255)

    class Meta:
        abstract = True

    def get_link_text(self):
        if self.link_text:
            return self.link_text

        if self.link_page:
            return self.link_page.title

        return ''

    content_panels = [
        MultiFieldPanel([
            PageChooserPanel('link_page'),
            FieldPanel('link_url'),
            FieldPanel('link_text'),
        ], 'Link'),
    ]


# Linked fields for pages - includes related name
class PageLinkFields(LinkFields):
    link_page = models.ForeignKey(
        Page,
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
        related_name="linked_page"
    )

    class Meta:
        abstract = True


# Related pages
class RelatedPage(Orderable, models.Model):
    page = models.ForeignKey('wagtailcore.Page', null=True, blank=True, on_delete=models.SET_NULL, related_name='+')

    class Meta:
        abstract = True
        ordering = ['sort_order']

    panels = [
        PageChooserPanel('page'),
    ]


# Related documents
class RelatedDocument(Orderable, models.Model):
    title = models.CharField(max_length=255, help_text="Document name")
    document = models.ForeignKey('wagtaildocs.Document', null=True, blank=True, on_delete=models.SET_NULL, related_name='+', help_text="Please upload related documents")

    class Meta:
        abstract = True
        ordering = ['sort_order']

    panels = [
        FieldPanel('title'),
        DocumentChooserPanel('document'),
    ]


# Generic social fields abstract class to add social image/text to any new content type easily.
class SocialFields(models.Model):
    social_image = models.ForeignKey(CustomImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+')
    social_text = models.CharField(max_length=255, blank=True)

    class Meta:
        abstract = True

    promote_panels = [
        MultiFieldPanel([
            ImageChooserPanel('social_image'),
            FieldPanel('social_text'),
        ], 'Social networks'),
    ]


# Generic listing fields abstract class to add listing image/text to any new content type easily.
class ListingFields(models.Model):
    listing_image = models.ForeignKey(
        CustomImage,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text="Choose the image you wish to be displayed when this page appears in listings"
    )
    listing_title = models.CharField(max_length=255, blank=True, help_text="Override the page title used when this page appears in listings")
    listing_summary = models.CharField(max_length=255, blank=True, help_text="The text summary used when this page appears in listings. It's also used as the description for search engines if the 'Search description' field above is not defined.")

    class Meta:
        abstract = True

    promote_panels = [
        MultiFieldPanel([
            ImageChooserPanel('listing_image'),
            FieldPanel('listing_title'),
            FieldPanel('listing_summary'),
        ], 'Listing information'),
    ]


@register_snippet
class CallToActionSnippet(LinkFields):
    title = models.CharField(max_length=80)
    summary = models.CharField(blank=True, max_length=80, verbose_name="Description")
    image = models.ForeignKey(CustomImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+')

    panels = [
        FieldPanel('title'),
        FieldPanel('summary'),
    ] + LinkFields.content_panels + [
        ImageChooserPanel('image'),
    ]

    def __str__(self):
        return self.title


@register_setting
class SocialMediaSettings(BaseSetting):
    twitter_handle = models.CharField(
        max_length=255,
        blank=True,
        help_text='Your Twitter username without the @, e.g. katyperry',
    )
    facebook_app_id = models.CharField(
        max_length=255,
        blank=True,
        help_text='Your Facebook app ID.',
    )
    default_sharing_text = models.CharField(
        max_length=255,
        blank=True,
        help_text='Default sharing text to use if social text has not been set on a page.',
    )
    site_name = models.CharField(
        max_length=255,
        blank=True,
        default='Girl Effect',
        help_text='Site name, used by Open Graph.',
    )


@register_snippet
class PartnerWithUsSnippet(CallToActionSnippet):
    email = models.EmailField()
    phone = models.CharField(max_length=18)

    panels = CallToActionSnippet.panels + [
        FieldPanel('email'),
        FieldPanel('phone'),
    ]

    def __str__(self):
        return self.title


@register_snippet
class Statistic(LinkFields):
    title = models.CharField(max_length=80)
    description = RichTextField(
        blank=True,
        max_length=255,
        verbose_name="Description",
        help_text="The statistic. For example, '66% of girls complete primary school'",
        features=["bold", "italic", "link", "document-link"]
    )

    panels = [
        FieldPanel('title'),
        FieldPanel('description'),
    ] + LinkFields.content_panels

    def __str__(self):
        return self.title


class CustomMedia(AbstractMedia):
    duration = models.PositiveIntegerField(
        null=True,
        blank=True,
        verbose_name=_('duration'),
        help_text=_('Duration in seconds')
    )

    admin_form_fields = (
        'title',
        'file',
        'collection',
        'thumbnail',
        'tags',
    )


class HeroVideoFields(models.Model):
    hero_video = models.ForeignKey(
        'wagtailmedia.Media',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text="Short Hero Video to show on top of page. Recommended size 12Mb or under.",
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
    hero_strapline = models.TextField(
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
        help_text="Optional page link as clickthrough for hero video."
    )
    link_youtube = models.URLField(
        blank=True,
        help_text="Optional URL for a full length YouTube video goes here,\
                    which will open in a modal window."
    )
    link_text = models.CharField(
        blank=True,
        max_length=255
    )

    search_fields = Page.search_fields + [
        index.SearchField('hero_strapline'),
    ]

    content_panels = [
        MultiFieldPanel([
            MediaChooserPanel('hero_video'),
            ImageChooserPanel('hero_fallback_image'),
            FieldPanel('hero_strapline'),
            MultiFieldPanel([
                PageChooserPanel('link_page'),
                FieldPanel('link_youtube'),
                FieldPanel('link_text'),
            ], 'Hero Clickthrough Link')
        ], 'Hero Video'),
    ]

    def clean(self):
        # Validating if URL is a valid YouTube URL
        youtube_embed = self.link_youtube
        if youtube_embed:
            youtube_finder = OEmbedFinder(providers=[oembed_providers.youtube])
            if not youtube_finder.accept(youtube_embed):
                raise ValidationError({'link_youtube': _('Please supply a valid YouTube URL.')})
            else:
                try:
                    embed = get_embed(youtube_embed)
                    self.link_youtube_html = embed.html
                except EmbedException:
                    raise ValidationError({'link_youtube': _('Embed cannot be found.')})

        # Validating links
        populated_fields = []

        for link_field in [self.link_page, self.link_youtube]:
            if link_field:
                populated_fields.append(link_field)

        # Only only one or less fields can be selected
        if len(populated_fields) > 1:
            error_message = 'Please choose only one of Link Page or Link YouTube as destination.'
            raise ValidationError(
                {'link_page': error_message, 'link_youtube': error_message}
            )

        # Link fields should have link text
        if len(populated_fields) >= 1 and not self.link_text:
            raise ValidationError(
                {'link_text': 'Link text is required if link destination has been selected'}
            )

        return super(HeroVideoFields, self).clean()

    class Meta:
        abstract = True
