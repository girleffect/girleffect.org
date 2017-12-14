from django.db import models
from django.utils.functional import cached_property
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.conf import settings

from modelcluster.fields import ParentalKey

from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import StreamField, RichTextField
from wagtail.wagtailadmin.edit_handlers import (
    FieldPanel,
    InlinePanel,
    MultiFieldPanel,
    StreamFieldPanel
)
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsnippets.models import register_snippet
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel

from girleffect.utils.blocks import StoryBlock
from girleffect.utils.models import HeroImageFields, CustomisableFeature


class SocialMediaProfile(models.Model):
    person_page = ParentalKey(
        'PersonPage',
        related_name='social_media_profile'
    )
    site_titles = (
        ('twitter', "Twitter"),
        ('linkedin', "LinkedIn")
    )
    site_urls = (
        ('twitter', 'https://twitter.com/'),
        ('linkedin', 'https://www.linkedin.com/in/')
    )
    service = models.CharField(
        max_length=200,
        choices=site_titles
    )
    username = models.CharField(max_length=255)

    @property
    def profile_url(self):
        return dict(self.site_urls)[self.service] + self.username

    def clean(self):
        if self.service == 'twitter' and self.username.startswith('@'):
            self.username = self.username[1:]


@register_snippet
class PersonCategory(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(
        blank=True,
        help_text='Not currently shown to the end user but may be in the future.'
    )

    @cached_property
    def people(self):
        return PersonPage.objects.filter(category_relationships__category=self).live().public()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'person categories'


class PersonPagePersonCategory(models.Model):
    page = ParentalKey(
        'PersonPage',
        related_name='category_relationships'
    )
    category = models.ForeignKey(
        'PersonCategory',
        related_name='person_relationships'
    )

    panels = [
        SnippetChooserPanel('category')
    ]


class PersonIndexPersonCategory(models.Model):
    page = ParentalKey(
        'PersonIndexPage',
        related_name='category_relationships'
    )
    category = models.ForeignKey(
        'PersonCategory',
        related_name='+'
    )

    panels = [
        SnippetChooserPanel('category')
    ]


class PersonCustomisablePeople(CustomisableFeature):
    page = ParentalKey(
        'PersonIndexPage',
        related_name='people_customisation'
    )

class PersonCustomisableIntroduction(CustomisableFeature):
    page = ParentalKey(
        'PersonIndexPage',
        related_name='introduction_customisation'
    )


class PersonIndexPage(Page, HeroImageFields):
    introduction = RichTextField(
        null=True,
        blank=True,
        features=['bold', 'italic', 'link']
    )
    call_to_action = models.ForeignKey(
        'utils.CallToActionSnippet',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    subpage_types = ['PersonPage']

    content_panels = Page.content_panels + HeroImageFields.content_panels + [
        MultiFieldPanel([
            FieldPanel('introduction'),
            InlinePanel('introduction_customisation', label="Introduction Customisation", max_num=1),
        ], 'Introduction'),
        MultiFieldPanel([
            InlinePanel('category_relationships', label="Person Index Categories"),
            InlinePanel('people_customisation', label="People Section Customisation", max_num=1),
        ], 'People'),
        SnippetChooserPanel('call_to_action')
    ]

    def introduction_customisations(self):
        customisations = self.introduction_customisation.first()
        return customisations

    @cached_property
    def people_customisations(self):
        customisations = self.people_customisation.first()
        return customisations

    @cached_property
    def people(self):
        return self.get_children().specific().live().public()

    @cached_property
    def categories(self):
        return [related.category for related in self.category_relationships.all()]

    def get_context(self, request, *args, **kwargs):
        page_number = request.GET.get('page')
        paginator = Paginator(self.people, settings.DEFAULT_PER_PAGE)
        try:
            people = paginator.page(page_number)
        except PageNotAnInteger:
            people = paginator.page(1)
        except EmptyPage:
            people = paginator.page(paginator.num_pages)

        context = super().get_context(request, *args, **kwargs)
        context.update(people=people)

        return context


class PersonPage(Page):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    photo = models.ForeignKey(
        'images.CustomImage',
        null=True,
        blank=True,
        related_name='+',
        on_delete=models.SET_NULL
    )
    job_title = models.CharField(max_length=255)
    introduction = models.TextField(blank=True)
    website = models.URLField(blank=True, max_length=255)
    biography = StreamField(StoryBlock(), blank=True)
    email = models.EmailField(blank=True)
    mobile_phone = models.CharField(max_length=255, blank=True)
    landline_phone = models.CharField(max_length=255, blank=True)

    @cached_property
    def categories(self):
        categories = [
            n.category for n in self.category_relationships.all()
        ]
        return categories

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel('first_name'),
            FieldPanel('last_name'),
        ], heading="Name"),
        ImageChooserPanel('photo'),
        FieldPanel('job_title'),
        InlinePanel('social_media_profile', label='Social accounts'),
        FieldPanel('website'),
        MultiFieldPanel([
            FieldPanel('email'),
            FieldPanel('mobile_phone'),
            FieldPanel('landline_phone'),
        ], heading='Contact information'),
        InlinePanel('category_relationships', label='Categories'),
        FieldPanel('introduction'),
        StreamFieldPanel('biography')
    ]

    parent_page_types = ['PersonIndexPage']
