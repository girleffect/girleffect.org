# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-11-07 12:37
from __future__ import unicode_literals

from django.db import migrations
import girleffect.utils.models
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields
import wagtail.wagtaildocs.blocks
import wagtail.wagtailembeds.blocks
import wagtail.wagtailimages.blocks
import girleffect.wagtailsnippets.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0018_auto_20171106_1536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlepage',
            name='body',
            field=wagtail.wagtailcore.fields.StreamField((('heading', wagtail.wagtailcore.blocks.CharBlock(classname='full title')), ('body_text', wagtail.wagtailcore.blocks.RichTextBlock(label='Body Text')), ('large_text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'link', 'document-link'], icon='pilcrow', label='Large Text', max_length=350, required=False)), ('image', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('caption', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('quote', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock(max_length=80, required=False)), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock(required=False)), ('text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'ol', 'ul', 'link', 'document-link'], max_length=255, required=True)), ('citation', wagtail.wagtailcore.blocks.CharBlock(max_length=80, required=False)), ('link', wagtail.wagtailcore.blocks.URLBlock(label='Citation Link', required=False)))), icon='openquote', template='blocks/quote_block.html')), ('video', wagtail.wagtailcore.blocks.StructBlock((('heading', wagtail.wagtailcore.blocks.CharBlock(max_length=30, required=False)), ('text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'ol', 'ul', 'link', 'document-link'], max_length=255, required=False)), ('youtube_embed', wagtail.wagtailembeds.blocks.EmbedBlock(help_text="Your YouTube URL goes here. Only YouTube video URLs will be accepted.            The custom 'play' button will be created for valid YouTube URLs.", label='YouTube Video URL')), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('document_link', wagtail.wagtaildocs.blocks.DocumentChooserBlock(label='Document Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False))), label='Girl Effect YouTube Video')), ('carousel', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('label', wagtail.wagtailcore.blocks.CharBlock(help_text='Carousel item small label, for example Our Reach', max_length=30)), ('title', wagtail.wagtailcore.blocks.CharBlock(help_text='Carousel item large title', max_length=30)), ('text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'ol', 'ul', 'link', 'document-link'], help_text='Carousel item text', max_length=75, required=False)), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('document_link', wagtail.wagtaildocs.blocks.DocumentChooserBlock(label='Document Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False)))), icon='image', template='blocks/carousel_block.html')), ('media_text_overlay', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('label', wagtail.wagtailcore.blocks.CharBlock(help_text="A short label or title, e.g. 'Our Reach'", max_length=30, required=False)), ('text', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic', 'ol', 'ul', 'link', 'document-link'], max_length=75, required=False)), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('document_link', wagtail.wagtaildocs.blocks.DocumentChooserBlock(label='Document Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False))), label='Full Width Media with Text Overlay')), ('list_block', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock(required=False)), ('title', wagtail.wagtailcore.blocks.CharBlock(max_length=80)), ('description', wagtail.wagtailcore.blocks.RichTextBlock(features=['bold', 'italic'], icon='pilcrow', max_length=250, required=False)), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('document_link', wagtail.wagtaildocs.blocks.DocumentChooserBlock(label='Document Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False)))), icon='list-ul', template='blocks/list_column_block.html')), ('statistic', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock(max_length=80, required=False)), ('statistics', wagtail.wagtailcore.blocks.ListBlock(girleffect.wagtailsnippets.blocks.SnippetChooserBlock(girleffect.utils.models.Statistic))), ('link', wagtail.wagtailcore.blocks.StructBlock((('external_link', wagtail.wagtailcore.blocks.URLBlock(label='External Link', required=False)), ('internal_link', wagtail.wagtailcore.blocks.PageChooserBlock(label='Internal Link', required=False)), ('document_link', wagtail.wagtaildocs.blocks.DocumentChooserBlock(label='Document Link', required=False)), ('link_text', wagtail.wagtailcore.blocks.CharBlock(label='Link Text', max_length=255, required=False))), required=False))), label='Statistic Block')), ('call_to_action', girleffect.wagtailsnippets.blocks.SnippetChooserBlock(girleffect.utils.models.CallToActionSnippet, template='blocks/call_to_action.html')))),
        ),
    ]
