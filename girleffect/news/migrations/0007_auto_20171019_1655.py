# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-19 15:55
from __future__ import unicode_literals

from django.db import migrations
import girleffect.utils.models
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields
import wagtail.wagtailembeds.blocks
import wagtail.wagtailimages.blocks
import wagtail.wagtailsnippets.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0006_auto_20171017_1207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newspage',
            name='body',
            field=wagtail.wagtailcore.fields.StreamField((('heading', wagtail.wagtailcore.blocks.CharBlock(classname='full title')), ('body_text', wagtail.wagtailcore.blocks.RichTextBlock(label='Body Text')), ('large_text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'link', 'document-link'], icon='pilcrow', label='Large Text', max_length=350, required=False)), ('image', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('caption', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('quote', wagtail.wagtailcore.blocks.StructBlock((('quote', wagtail.wagtailcore.blocks.CharBlock(classname='title')), ('citation_link', wagtail.wagtailcore.blocks.URLBlock(required=False))))), ('embed', wagtail.wagtailembeds.blocks.EmbedBlock()), ('carousel', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('label', wagtail.wagtailcore.blocks.CharBlock(help_text='Carousel item small label, for example Our Reach', max_length=30)), ('title', wagtail.wagtailcore.blocks.CharBlock(help_text='Carousel item large title', max_length=30)), ('text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'ol', 'ul', 'link', 'document-link'], help_text='Carousel item text', max_length=75, required=False)), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False)))), icon='image', template='blocks/carousel_block.html')), ('media_text_overlay', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('label', wagtail.wagtailcore.blocks.CharBlock(help_text="A short label or title, e.g. 'Our Reach'", max_length=30, required=False)), ('text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'ol', 'ul', 'link', 'document-link'], max_length=75, required=False)), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False))), label='Full Width Media with Text Overlay')), ('list_block', wagtail.wagtailcore.blocks.StreamBlock((('list_block', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock(required=False)), ('title', wagtail.wagtailcore.blocks.CharBlock(max_length=80)), ('description', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'link', 'document-link'], icon='pilcrow', label='Large Text', max_length=250, required=False)), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False))), label='List Block Item')),))), ('call_to_action', wagtail.wagtailsnippets.blocks.SnippetChooserBlock(girleffect.utils.models.CallToActionSnippet, template='includes/call_to_action.html')))),
        ),
    ]
