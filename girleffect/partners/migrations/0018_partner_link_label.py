# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-05-03 13:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('partners', '0017_auto_20180430_0913'),
    ]

    operations = [
        migrations.AddField(
            model_name='partner',
            name='link_label',
            field=models.CharField(default='Learn more about ', max_length=255),
        ),
    ]
