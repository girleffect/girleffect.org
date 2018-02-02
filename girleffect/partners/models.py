from django.db import models
from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.utils.functional import cached_property

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    InlinePanel,
    MultiFieldPanel,
    PageChooserPanel
)

from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel

from girleffect.utils.models import (
    CustomisableFeature,
    HeroImageFields,
    SocialFields
)


class Partner(Orderable, models.Model):
    page = ParentalKey('PartnerIndexPage', related_name='partners')
    title = models.CharField(blank=False, max_length=255)
    description = models.TextField(blank=True)
    logo = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.SET_NULL
    )

    internal_link = models.ForeignKey('wagtailcore.Page', related_name='+',
                                      on_delete=models.SET_NULL, null=True,
                                      blank=True)

    external_link = models.URLField(blank=True)
    show_on_index = models.BooleanField(verbose_name="Show on Partner Index")

    panels = [
        ImageChooserPanel('logo'),
        FieldPanel('title'),
        FieldPanel('description'),
        PageChooserPanel('internal_link'),
        FieldPanel('external_link'),
        FieldPanel('show_on_index')
    ]

    def __str__(self):
        return self.title


class PartnerCustomisablePartners(CustomisableFeature):
    page = ParentalKey(
        'PartnerIndexPage',
        related_name='partner_customisation'
    )

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('background_hex'),
    ]


class PartnerCustomisableIntroduction(CustomisableFeature):
    page = ParentalKey(
        'PartnerIndexPage',
        related_name='introduction_customisation'
    )

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('background_hex'),
    ]


class PartnerIndexPage(Page, HeroImageFields, SocialFields):
    introduction = RichTextField(
        blank=True,
        null=True,
        features=['bold', 'italic', 'link', 'justify']
    )
    call_to_action = models.ForeignKey(
        'utils.CallToActionSnippet',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
        MultiFieldPanel([
            FieldPanel('introduction'),
            InlinePanel('introduction_customisation', label="Introduction Customisation", max_num=1),
        ], 'Introduction'),
        MultiFieldPanel([
            InlinePanel('partners', label="Partners"),
            InlinePanel('partner_customisation', label="Partners Customisation", max_num=1),
        ], 'Partners'),
        SnippetChooserPanel('call_to_action')
    ]

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
        index.RelatedFields('partners', [
                            index.SearchField('title')
                            ])
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels

    @cached_property
    def introduction_customisations(self):
        customisations = self.introduction_customisation.first()
        return customisations

    @cached_property
    def partner_customisations(self):
        customisations = self.partner_customisation.first()
        return customisations

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        subpages = self.get_children().live()
        per_page = settings.DEFAULT_PER_PAGE
        page_number = request.GET.get('page')
        paginator = Paginator(subpages, per_page)

        try:
            subpages = paginator.page(page_number)
        except PageNotAnInteger:
            subpages = paginator.page(1)
        except EmptyPage:
            subpages = paginator.page(paginator.num_pages)

        context['subpages'] = subpages

        return context
