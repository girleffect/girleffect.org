from django.db import models
from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

from modelcluster.fields import ParentalKey

from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index

from girleffect.utils.blocks import StoryBlock


class Partner(Orderable):
    page = ParentalKey('PartnerIndexPage', related_name='partners')
    logo = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.SET_NULL
    )

    link = models.ForeignKey('wagtailcore.Page', related_name='+',
                             on_delete=models.SET_NULL, null=True)

    external_link = models.URLField(blank=True)

    content_panels = Page.content_panels + [
        ImageChooserPanel('logo'),
        FieldPanel('external_url'),
        InlinePanel('link'),
    ]


class PartnerIndexPage(Page, SocialFields):
    introduction = models.TextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
        InlinePanel('partners')
    ]

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
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
