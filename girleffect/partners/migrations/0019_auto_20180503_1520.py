# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-05-03 14:20
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('partners', '0018_partner_link_label'),
    ]

    operations = [
        migrations.AlterField(
            model_name='partnerindexpage',
            name='hero_strapline',
            field=wagtail.wagtailcore.fields.RichTextField(blank=True, help_text='Shows text over the hero. If no strapline is entered, no page title will show.', null=True),
        ),
    ]
