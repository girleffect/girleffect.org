# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-06 09:12
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
        ('solutions', '0005_auto_20171006_0933'),
    ]

    operations = [
        migrations.AlterField(
            model_name='solutionpage',
            name='body',
            field=wagtail.wagtailcore.fields.StreamField((('heading', wagtail.wagtailcore.blocks.CharBlock(classname='full title')), ('paragraph', wagtail.wagtailcore.blocks.RichTextBlock()), ('large_text', wagtail.wagtailcore.blocks.RichTextBlock(classname='large-text', features=['bold', 'italic', 'link', 'document-link'], icon='pilcrow', label='Large Text', max_length=350, required=False)), ('image', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('caption', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('quote', wagtail.wagtailcore.blocks.StructBlock((('quote', wagtail.wagtailcore.blocks.CharBlock(classname='title')), ('citation_link', wagtail.wagtailcore.blocks.URLBlock(required=False))))), ('embed', wagtail.wagtailembeds.blocks.EmbedBlock()), ('call_to_action', wagtail.wagtailsnippets.blocks.SnippetChooserBlock(girleffect.utils.models.CallToActionSnippet, template='includes/call_to_action.html')))),
        ),
    ]
