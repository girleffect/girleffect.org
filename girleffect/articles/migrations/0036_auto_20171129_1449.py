# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-11-29 14:49
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
        ('articles', '0035_auto_20171127_1200'),
    ]

    operations = [
        migrations.AddField(
            model_name='articleindex',
            name='hero_image',
            field=models.ForeignKey(blank=True, help_text='Hero Image to be used as full width feature image for page.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='images.CustomImage'),
        ),
        migrations.AddField(
            model_name='articleindex',
            name='hero_strapline',
            field=models.CharField(blank=True, max_length=80),
        ),
    ]