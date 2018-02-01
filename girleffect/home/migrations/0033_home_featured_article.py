# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-01-22 16:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0050_hero_strapline_customisation'),
        ('home', '0032_hero_strapline_customisation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homepage',
            name='overview_image',
        ),
        migrations.AddField(
            model_name='homepage',
            name='featured_article',
            field=models.ForeignKey(blank=True, help_text='Select a featured article to display first in article section', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='articles.ArticlePage', verbose_name='Featured News'),
        ),
    ]
