# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-01-22 15:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0048_p1_changes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articleindex',
            name='hero_strapline',
            field=models.CharField(blank=True, help_text='Shows text over the hero. If no strapline is entered, no page title will show.', max_length=255),
        ),
        migrations.AlterField(
            model_name='articlepage',
            name='hero_strapline',
            field=models.CharField(blank=True, help_text='Shows text over the hero. If no strapline is entered, no page title will show.', max_length=255),
        ),
    ]
