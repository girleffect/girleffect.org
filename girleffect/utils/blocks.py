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

# Main streamfield block to be inherited by Pages


class StoryBlock(blocks.StreamBlock):
    heading = blocks.CharBlock(classname="full title")
    body_text = blocks.RichTextBlock(label="Body Text")
    large_text = blocks.RichTextBlock(
        classname="large-text",
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
    call_to_action = SnippetChooserBlock(CallToActionSnippet, template="includes/call_to_action.html")

    class Meta:
        template = "blocks/stream_block.html"
