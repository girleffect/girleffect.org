# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-11-10 15:07
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
        ('articles', '0023_auto_20171109_1708'),
    ]

    operations = [
        migrations.AddField(
            model_name='articlepage',
            name='hero_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='images.CustomImage'),
        ),
    ]
