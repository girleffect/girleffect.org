from django.core.exceptions import ValidationError
from django.db import models
from django.utils.functional import cached_property
from django.utils.translation import ugettext_lazy as _

from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    InlinePanel,
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


class EmailLinkFields(LinkFields):
    link_email = models.EmailField(blank=True, null=False)

    class Meta:
        abstract = True

    content_panels = [
        MultiFieldPanel([
            PageChooserPanel('link_page'),
            FieldPanel('link_url'),
            FieldPanel('link_email'),
            FieldPanel('link_text'),
        ], 'Link'),
    ]

    def clean(self):
        errors = {}

        fields = [f for f in [self.link_email, self.link_page, self.link_url] if f is not None if f is not '']

        if len(fields) > 1:
            error_message = 'Please choose one of link url, link page or link email.'
            errors.update(
                {'link_email': _(error_message)},
            )
            errors.update(
                {'link_page': _(error_message)},
            )
            errors.update(
                {'link_url': _(error_message)},
            )

        if errors:
            raise ValidationError(errors)

        return super().clean()


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


# Related pages
class CustomisableFeature(Orderable, models.Model):
    image = models.ForeignKey(CustomImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+')
    background_hex = models.CharField(max_length=7, null=True, blank=True,)
    heading_hex = models.CharField(max_length=7, null=True, blank=True,)

    class Meta:
        abstract = True
        ordering = ['sort_order']

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('background_hex'),
        FieldPanel('heading_hex')
    ]

    def clean(self):
        from girleffect.utils.blocks import validate_hex

        errors = {}

        validated_hexes = {
            'heading_hex': validate_hex(self.heading_hex),
            'background_hex': validate_hex(self.background_hex)
        }

        hex_errors = {fieldname: _('Please enter a valid hex code') for fieldname, value in validated_hexes.items() if value is False}

        errors.update(hex_errors)

        if self.image and self.background_hex:
            errors.update({'image': _('Please choose one of image or hex code.')})

        if errors:
            raise ValidationError(errors)

        return super().clean()


# Generic social fields abstract class to add social image/text to any new content type easily.
class SocialFields(models.Model):
    social_title = models.CharField(max_length=255, blank=True)
    social_image = models.ForeignKey(CustomImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+')
    social_text = models.CharField(max_length=255, blank=True)

    class Meta:
        abstract = True

    promote_panels = [
        MultiFieldPanel([
            FieldPanel('social_title'),
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


class FullWidthMediaAndTextSnippetCustomisableHeading(CustomisableFeature):
    media = ParentalKey(
        'FullWidthMediaAndTextSnippet',
        related_name='media_customisation'
    )

    content_panels = [
        ImageChooserPanel('image'),
        FieldPanel('background_hex'),
    ]


@register_snippet
class FullWidthMediaAndTextSnippet(ClusterableModel, LinkFields):
    title = models.CharField(max_length=255)
    image = models.ForeignKey(CustomImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+')
    logo = models.ForeignKey(CustomImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+')
    text = RichTextField(
        null=True,
        blank=True,
        features=["bold", "italic", "ol", "ul", "link", "document-link"]
    )

    @cached_property
    def media_customisations(self):
        return self.media_customisation.first()

    panels = [
        FieldPanel('title'),
        ImageChooserPanel('image'),
        ImageChooserPanel('logo'),
        FieldPanel('text'),
        MultiFieldPanel([
            InlinePanel('media_customisation', label="Media Customisation", max_num=1),
        ], 'Customisations'),
    ] + LinkFields.content_panels

    def __str__(self):
        return self.title


@register_snippet
class CallToActionSnippet(EmailLinkFields):
    title = models.CharField(max_length=255)
    summary = models.CharField(blank=True, max_length=80, verbose_name="Description")
    image = models.ForeignKey(CustomImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+')

    panels = [
        FieldPanel('title'),
        FieldPanel('summary'),
    ] + EmailLinkFields.content_panels + [
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
    default_sharing_image = models.ForeignKey(
        CustomImage,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        FieldPanel('twitter_handle'),
        FieldPanel('facebook_app_id'),
        FieldPanel('default_sharing_text'),
        FieldPanel('site_name'),
        ImageChooserPanel('default_sharing_image')
    ]


@register_snippet
class PartnerWithUsSnippet(CallToActionSnippet):
    email = models.EmailField()
    phone = models.CharField(max_length=255)

    panels = CallToActionSnippet.panels + [
        FieldPanel('email'),
        FieldPanel('phone'),
    ]

    def __str__(self):
        return self.title


class StatisticCustomisableHeading(CustomisableFeature):
    statistic = ParentalKey(
        'Statistic',
        related_name='statistic_customisation'
    )

    panels = [
        FieldPanel('heading_hex'),
    ]


@register_snippet
class Statistic(ClusterableModel, LinkFields):
    title = models.CharField(max_length=255)
    cms_title = models.CharField(
        max_length=225,
        null=True,
        blank=True,
        help_text="Snippet CMS title only viewable in admin area"
    )
    description = RichTextField(
        blank=True,
        max_length=180,
        verbose_name="Description",
        help_text="The statistic. For example, '66% of girls complete primary school'",
        features=[
            "bold", "italic", "link", "document-link",
            "h2", "h3", "h4", "h5", "h6"
        ]
    )
    citation_text = models.CharField(max_length=80, blank=True)

    @cached_property
    def statistic_customisations(self):
        return self.statistic_customisation.first()

    panels = [
        FieldPanel('title'),
        FieldPanel('cms_title'),
        FieldPanel('description'),
        FieldPanel('citation_text'),
        MultiFieldPanel([
            InlinePanel('statistic_customisation', label="Snippet Customisation", max_num=1),
        ], 'Customisations'),
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
        'utils.CustomMedia',
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
        blank=True,
        max_length=255,
        help_text="Shows text over the hero."
    )
    link_page = models.ForeignKey(
        Page,
        blank=True,
        null=True,
        related_name='+',
        on_delete=models.SET_NULL,
        help_text="Optional page link as clickthrough for hero video.",
        verbose_name="Page Link"
    )
    link_youtube = models.URLField(
        blank=True,
        help_text="Optional URL for a full length YouTube video goes here,\
                    which will open in a modal window.",
        verbose_name="YouTube Link"
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


class HeroVideoFieldsLogo(HeroVideoFields):
    hero_logo = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        help_text="Shows the brand logo on the hero instead of a text heading.",
        on_delete=models.SET_NULL,
        verbose_name="Brand Logo"
    )

    content_panels = [
        MultiFieldPanel([
            MediaChooserPanel('hero_video'),
            ImageChooserPanel('hero_fallback_image'),
            ImageChooserPanel('hero_logo'),
            FieldPanel('hero_strapline'),
            MultiFieldPanel([
                PageChooserPanel('link_page'),
                FieldPanel('link_youtube'),
                FieldPanel('link_text'),
            ], 'Hero Clickthrough Link')
        ], 'Hero Video'),
    ]

    class Meta:
        abstract = True


class HeroImageFields(models.Model):
    hero_image = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        help_text="Hero Image to be used as full width feature image for page.",
        on_delete=models.SET_NULL
    )
    hero_strapline = models.CharField(blank=True, max_length=255)

    search_fields = Page.search_fields + [
        index.SearchField('hero_strapline'),
    ]

    content_panels = [
        MultiFieldPanel([
            ImageChooserPanel('hero_image'),
            FieldPanel('hero_strapline'),
        ], 'Hero Image'),
    ]

    class Meta:
        abstract = True
