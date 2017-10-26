from django.db import models
from django.conf import settings
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

from modelcluster.fields import ParentalKey

from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    InlinePanel,
    PageChooserPanel
)

from wagtail.wagtailcore.models import Orderable, Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsearch import index

from girleffect.utils.models import (
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

    panels = [
        ImageChooserPanel('logo'),
        FieldPanel('title'),
        FieldPanel('description'),
        PageChooserPanel('internal_link', ['countries.CountryPage',
                                           'countries.CountryIndex',
                                           'solutions.SolutionPage',
                                           'articles.NewsPage',
                                           'standardpage.StandardPage']),
        FieldPanel('external_link')
    ]

    def __str__(self):
        return self.title


class PartnerIndexPage(Page, SocialFields):
    introduction = models.TextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
        InlinePanel('partners', label="Partners")
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
