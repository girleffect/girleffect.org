from django.core.exceptions import ValidationError
from modelcluster.models import ClusterableModel
from wagtail.contrib.settings.models import BaseSetting, register_setting
from wagtail.wagtailadmin.edit_handlers import StreamFieldPanel
from wagtail.wagtailcore import blocks
from wagtail.wagtailcore.fields import StreamField


class MenuItemBlock(blocks.StructBlock):
    page = blocks.PageChooserBlock(required=False)
    external_url = blocks.URLBlock(required=False)
    title = blocks.CharBlock(required=False)

    def clean(self, value):
        value = super().clean(value)
        errors = {}

        validation_field_names = ['page', 'external_url']
        validation_field_values = [value[field] for field in validation_field_names]

        if all(value for value in validation_field_values):
            errors = {field: ['Please choose only one of page or external url'] for field in validation_field_names}

        if all(not value for value in validation_field_values):
            errors = {field: ['Please choose one of page or external url'] for field in validation_field_names}

        if value['external_url'] and not value['title']:
            errors.update({'title': ['Please add a title for the navigation link']})

        if errors:
            raise ValidationError(
                "Validation error in MenuItemBlock",
                params=errors,
            )
        return value


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
