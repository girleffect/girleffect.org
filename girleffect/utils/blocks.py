from django.core.exceptions import ValidationError
from django.forms.utils import ErrorList

from wagtail.wagtailcore import blocks
from wagtail.wagtaildocs.blocks import DocumentChooserBlock
from wagtail.wagtailembeds import oembed_providers
from wagtail.wagtailembeds.finders.oembed import OEmbedFinder as OEmbedFinder
from wagtail.wagtailimages.blocks import ImageChooserBlock
from wagtail.wagtailembeds.blocks import EmbedBlock
from wagtail.wagtailsnippets.blocks import SnippetChooserBlock

from .models import CallToActionSnippet, Statistic


class ImageBlock(blocks.StructBlock):
    image = ImageChooserBlock()
    caption = blocks.CharBlock(required=False)

    class Meta:
        icon = "image"
        template = "blocks/image_block.html"


class LinkBlock(blocks.StructBlock):
    external_link = blocks.URLBlock(required=False, label="External Link")
    internal_link = blocks.PageChooserBlock(required=False, label="Internal Link")
    document_link = DocumentChooserBlock(required=False, label="Document Link")

    link_text = blocks.CharBlock(required=False, max_length=255, label="Link Text")

    def get_context(self, value, **kwargs):
        context = super(LinkBlock, self).get_context(value, **kwargs)

        external_link = value.get('external_link')
        internal_link = value.get('internal_link')
        document_link = value.get('document_link')

        # URL
        if external_link:
            context['link_url'] = external_link
        elif internal_link:
            context['link_url'] = internal_link.url
        elif document_link:
            context['link_url'] = document_link.url

        # External link?
        if external_link:
            context['link_is_external'] = True
        else:
            context['link_is_external'] = False

        return context

    def clean(self, value):
        """
        Validate that exactly one of the link destination blocks is populated if the link text is populated
        """
        link_dest_block_names = [
            'internal_link',
            'document_link',
            'external_link',
        ]
        num_populated_blocks = 0

        for block_name in link_dest_block_names:
            if value[block_name]:
                num_populated_blocks += 1

        if num_populated_blocks > 1:
            error_messages = ["Link can only have one destination"]
            raise ValidationError(
                "Validation error in LinkBlock",
                params={block_name: error_messages for block_name in link_dest_block_names},
            )

        return super(LinkBlock, self).clean(value)

    class Meta:
        template = "blocks/link_block.html"


class CarouselItemBlock(blocks.StructBlock):
    image = ImageChooserBlock()
    label = blocks.CharBlock(
        max_length=30,
        help_text="Carousel item small label, for example Our Reach"
    )
    title = blocks.CharBlock(
        max_length=30,
        help_text="Carousel item large title"
    )
    text = blocks.RichTextBlock(
        max_length=75,
        required=False,
        help_text="Carousel item text",
        features=["bold", "italic", "ol", "ul", "link", "document-link"]
    )
    link = LinkBlock(required=False)

    class Meta:
        icon = "plus"
        template = "blocks/carousel_item_block.html"


class MediaTextOverlayBlock(blocks.StructBlock):
    title = blocks.CharBlock(
        required=False,
        label="Title Text",
        max_length=25,
        help_text="Appears above the module."
    )
    image = ImageChooserBlock()
    logo = ImageChooserBlock(
        label="Title Logo",
        required=False
    )
    label = blocks.CharBlock(
        required=False,
        max_length=30,
        help_text="A short label or title, e.g. 'Our Reach'.\
            Appears above the text on the module."
    )
    text = blocks.RichTextBlock(
        max_length=75,
        required=False,
        features=["bold", "italic", "ol", "ul", "link", "document-link"]
    )
    link = LinkBlock(required=False)

    def clean(self, value):
        if value['title'] and value['logo']:
            error_messages = ["Please choose only one of logo or title."]
            raise ValidationError(
                "Validation error in MediaTextOverlayBlock",
                params={'title': error_messages, 'logo': error_messages},
            )
        if not value['title'] and not value['logo']:
            error_messages = ["Please choose a logo or title."]
            raise ValidationError(
                "Validation error in MediaTextOverlayBlock",
                params={'title': error_messages, 'logo': error_messages},
            )
        return super(MediaTextOverlayBlock, self).clean(value)

    class Meta:
        icon = "image"
        template = "blocks/media_text_overlay_block.html"


class YouTubeEmbed(blocks.StructBlock):
    heading = blocks.CharBlock(required=False, max_length=30)
    text = blocks.RichTextBlock(
        max_length=255,
        required=False,
        features=["bold", "italic", "ol", "ul", "link", "document-link"]
    )
    youtube_embed = EmbedBlock(
        label="YouTube Video URL",
        help_text="Your YouTube URL goes here. Only YouTube video URLs will be accepted.\
            The custom 'play' button will be created for valid YouTube URLs."
    )
    link = LinkBlock(required=False)

    def clean(self, value):
        cleaned_data = super(YouTubeEmbed, self).clean(value)
        # Validating if URL is a valid YouTube URL
        youtube_embed = cleaned_data.get('youtube_embed').url
        youtube_finder = OEmbedFinder(providers=[oembed_providers.youtube])
        if not youtube_finder.accept(youtube_embed):
            e = ValidationError('URL must be a YouTube URL')
            raise ValidationError('Validation error in StructBlock', params={
                                  'youtube_embed': ErrorList([e])})
        return cleaned_data

    class Meta:
        icon = "media"
        template = "blocks/youtube_embed_block.html"


class QuoteBlock(blocks.StructBlock):
    title = blocks.CharBlock(max_length=80, required=False)
    image = ImageChooserBlock(required=False)
    text = blocks.RichTextBlock(
        max_length=255,
        required=True,
        features=["bold", "italic", "ol", "ul", "link", "document-link"]
    )
    citation = blocks.CharBlock(
        required=False,
        max_length=80,
    )
    link_block = LinkBlock(required=False)

    class Meta:
        icon = "openquote"
        template = "blocks/quote_item_block.html"


class ListColumnBlock(blocks.StructBlock):
    image = ImageChooserBlock(required=False)
    title = blocks.CharBlock(max_length=80)
    description = blocks.RichTextBlock(
        max_length=250,
        features=["bold", "italic"],
        required=False,
        icon="pilcrow"
    )
    link = LinkBlock(required=False)

    class Meta:
        icon = "list-ul"
        template = "blocks/list_column_item_block.html"


class ContentSectionBlock(blocks.StructBlock):
    heading = blocks.CharBlock(classname="full title", required=False)
    body_text = blocks.RichTextBlock(label="Body Text")
    image = ImageChooserBlock(required=False)
    link = LinkBlock(required=False)

    class Meta:
        icon = "fa-newspaper-o"


class StatisticBlock(blocks.StructBlock):
    title = blocks.CharBlock(max_length=80, required=False)
    statistics = blocks.ListBlock(
        SnippetChooserBlock(Statistic),
    )
    link = LinkBlock(required=False)

    class Meta:
        icon = "snippet"
        template = "blocks/statistic_block.html"


class BlockQuote(blocks.StructBlock):
    quote = blocks.TextBlock()
    citation = blocks.CharBlock(required=False)

    class Meta:
        icon = "openquote"
        template = "blocks/blockquote_block.html"


class StoryBlock(blocks.StreamBlock):
    heading = blocks.CharBlock(classname="full title")
    body_text = blocks.RichTextBlock(
        label="Body Text",
        features=[
            "h4", "h5", "h6",
            "bold", "italic", "link",
            "ol", "ul", "hr"
        ],
    )
    large_text = blocks.RichTextBlock(
        label="Large Text",
        max_length=350,
        features=["bold", "italic", "link", "document-link"],
        required=False,
        icon="pilcrow"
    )
    image = ImageBlock()
    quote = blocks.ListBlock(
        QuoteBlock(),
        template="blocks/quote_block.html",
        icon="openquote"
    )
    video = YouTubeEmbed(label="Girl Effect YouTube Video")
    carousel = blocks.ListBlock(
        CarouselItemBlock(),
        template="blocks/carousel_block.html",
        icon="image"
    )
    media_text_overlay = MediaTextOverlayBlock(
        label="Full Width Media with Text Overlay"
    )
    list_block = blocks.ListBlock(
        ListColumnBlock(),
        template="blocks/list_column_block.html",
        icon="list-ul"
    )
    link_row = blocks.ListBlock(
        LinkBlock(),
        template="blocks/inline_link_block.html",
        icon="link"
    )
    statistic = StatisticBlock(label="Statistic Block")
    call_to_action = SnippetChooserBlock(CallToActionSnippet, template="blocks/call_to_action.html")

    class Meta:
        template = "blocks/stream_block.html"


class ArticleBlock(StoryBlock):
    blockquote = BlockQuote()

    class Meta:
        template = "blocks/stream_block.html"
