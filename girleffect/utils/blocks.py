from wagtail.wagtailcore import blocks
from wagtail.wagtailimages.blocks import ImageChooserBlock
from wagtail.wagtailembeds.blocks import EmbedBlock
from wagtail.wagtailsnippets.blocks import SnippetChooserBlock

from .models import CallToActionSnippet


class ImageBlock(blocks.StructBlock):
    image = ImageChooserBlock()
    caption = blocks.CharBlock(required=False)

    class Meta:
        icon = "image"
        template = "blocks/image_block.html"


class QuoteBlock(blocks.StructBlock):
    quote = blocks.CharBlock(classname="title")
    citation_link = blocks.URLBlock(required=False)

    class Meta:
        icon = "openquote"
        template = "blocks/quote_block.html"


class LinkBlock(blocks.StructBlock):
    external_link = blocks.URLBlock(required=False, label="External Link")
    internal_link = blocks.PageChooserBlock(
        required=False,
        label="Internal Link"
    )
    link_text = blocks.CharBlock(
        required=False,
        max_length=255,
        label="Link Text"
    )

    def get_context(self, value, **kwargs):
        item_link = value["internal_link"].url if value.get("internal_link") \
            else value["external_link"]
        item_target = "_self" if value.get("internal_link") else "_blank"

        context = super(LinkBlock, self).get_context(value)
        context.update({
            "item_link": item_link,
            "item_target": item_target
        })
        return context

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
    image = ImageChooserBlock()
    label = blocks.CharBlock(
        required=False,
        max_length=30,
        help_text="A short label or title, e.g. 'Our Reach'"
    )
    text = blocks.RichTextBlock(
        max_length=75,
        required=False,
        features=["bold", "italic", "ol", "ul", "link", "document-link"]
    )
    link = LinkBlock(required=False)

    class Meta:
        icon = "image"
        template = "blocks/media_text_overlay_block.html"


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


class ListColumnStream(blocks.StreamBlock):
    list_block = ListColumnBlock(label="List Block Item")

    class Meta:
        icon = "list-ul"
        template = "blocks/list_column_block.html"
        max_num = 4
        min_num = 2


class StoryBlock(blocks.StreamBlock):
    heading = blocks.CharBlock(classname="full title")
    body_text = blocks.RichTextBlock(label="Body Text")
    large_text = blocks.RichTextBlock(
        label="Large Text",
        max_length=350,
        features=["bold", "italic", "link", "document-link"],
        required=False,
        icon="pilcrow"
    )
    image = ImageBlock()
    quote = QuoteBlock()
    embed = EmbedBlock()
    carousel = blocks.ListBlock(
        CarouselItemBlock(),
        template="blocks/carousel_block.html",
        icon="image"
    )
    media_text_overlay = MediaTextOverlayBlock(
        label="Full Width Media with Text Overlay"
    )
    list_block = ListColumnStream()
    call_to_action = SnippetChooserBlock(CallToActionSnippet, template="includes/call_to_action.html")

    class Meta:
        template = "blocks/stream_block.html"
