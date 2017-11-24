from django.db import models
from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    InlinePanel,
    MultiFieldPanel,
    PageChooserPanel
)

from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel

from girleffect.utils.models import (
    HeroImageFields,
    SocialFields
)


class Partner(Orderable, models.Model):
    page = ParentalKey('PartnerIndexPage', related_name='partners')
    title = models.CharField(blank=False, max_length=80)
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


class PartnerIndexPage(Page, HeroImageFields, SocialFields):
    introduction = models.TextField(blank=True)
    call_to_action = models.ForeignKey(
        'utils.CallToActionSnippet',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            ImageChooserPanel('hero_image'),
        ], 'Hero Image'),
        FieldPanel('introduction'),
        InlinePanel('partners', label="Partners"),
        SnippetChooserPanel('call_to_action')
    ]

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
        index.RelatedFields('partners', [
                            index.SearchField('title')
                            ])
    ]

    promote_panels = Page.promote_panels + SocialFields.promote_panels

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
