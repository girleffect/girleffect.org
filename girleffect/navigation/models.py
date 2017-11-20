from modelcluster.models import ClusterableModel
from wagtail.contrib.settings.models import BaseSetting, register_setting
from wagtail.wagtailadmin.edit_handlers import StreamFieldPanel
from wagtail.wagtailcore import blocks
from wagtail.wagtailcore.fields import StreamField


class MenuItemBlock(blocks.StructBlock):
    page = blocks.PageChooserBlock()
    title = blocks.CharBlock(help_text="Leave blank to use the page's own title", required=False)


class SecondaryMenuItemWithSubItemsBlock(MenuItemBlock):
    sub_items = blocks.ListBlock(MenuItemBlock(label="Sub-item"))


class MenuItemWithSubItemsBlock(MenuItemBlock):
    sub_items = blocks.ListBlock(SecondaryMenuItemWithSubItemsBlock(label="Sub-item"))


class HeaderWithSubItemsBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    sub_items = blocks.ListBlock(MenuItemBlock(label="Sub-item"))


@register_setting(icon='list-ul')
class NavigationSettings(BaseSetting, ClusterableModel):
    primary_links = StreamField([
        ('item', MenuItemWithSubItemsBlock()),
    ], blank=True)
    secondary_links = StreamField([
        ('item', MenuItemBlock()),
    ], blank=True)
    footer_links = StreamField([
        ('item', MenuItemBlock()),
    ], blank=True)

    panels = [
        StreamFieldPanel('primary_links'),
        StreamFieldPanel('secondary_links'),
        StreamFieldPanel('footer_links'),
    ]

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)
