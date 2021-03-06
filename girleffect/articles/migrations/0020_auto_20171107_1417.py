# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-11-07 14:17
from __future__ import unicode_literals

from django.db import migrations, models
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0019_auto_20171107_1237'),
    ]

    operations = [
        migrations.AddField(
            model_name='articleindex',
            name='heading',
            field=models.CharField(blank=True, max_length=80),
        ),
        migrations.AddField(
            model_name='articleindex',
            name='introduction',
            field=wagtail.wagtailcore.fields.RichTextField(blank=True, max_length=350),
        ),
    ]
