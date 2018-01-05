from django.core.exceptions import ValidationError
from django.db import models
from django.utils.functional import cached_property
from django.utils.translation import ugettext_lazy as _

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    InlinePanel,
    MultiFieldPanel,
    StreamFieldPanel
)

from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel
from girleffect.articles.models import ArticlePage
from girleffect.utils.models import (
    CallToActionSnippet,
    LinkFields,
    HeroVideoFields,
    SocialFields
)

from girleffect.utils.blocks import StoryBlock


class HomePageCarouselItem(Orderable, LinkFields, models.Model):
    page = ParentalKey('HomePage', related_name='carousel_items')
    title = models.CharField(blank=False, max_length=80)
    title_colour_hex = models.CharField(max_length=7, null=True, blank=True,)
    description = models.TextField(blank=True)
    image = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.SET_NULL
    )

    panels = [
        FieldPanel('title'),
        FieldPanel('title_colour_hex'),
        FieldPanel('description'),
        ImageChooserPanel('image'),

    ] + LinkFields.content_panels


    def clean(self):
        from girleffect.utils.blocks import validate_hex

        if not validate_hex(self.title_colour_hex):
            raise ValidationError({'title_colour_hex': _('Please enter a valid hex code')})

        return super().clean()

    def __str__(self):
        return self.title


class HomePage(Page, HeroVideoFields, SocialFields):
    introduction = models.TextField(blank=True, null=True)
    call_to_action = models.ForeignKey(CallToActionSnippet, blank=True, null=True, on_delete=models.SET_NULL, related_name='+')
    overview_image = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.SET_NULL
    )
    overview_title = models.CharField(blank=True, max_length=80)
    body = StreamField(StoryBlock(), null=True)

    content_panels = Page.content_panels + HeroVideoFields.content_panels + [
        FieldPanel('introduction'),
        MultiFieldPanel([
            ImageChooserPanel('overview_image'),
            FieldPanel('overview_title'),
        ], 'Homepage Carousel Overview'),
        InlinePanel('carousel_items', label="Homepage Carousel Items", min_num=3, max_num=3),
        StreamFieldPanel('body'),
        SnippetChooserPanel('call_to_action')
    ]

    @cached_property
    def articles(self):
        return ArticlePage.objects.all().live().public().order_by('-publication_date')[:3]

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
