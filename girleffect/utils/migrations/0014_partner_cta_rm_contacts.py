# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-01-19 13:36
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('utils', '0013_p1_changes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='partnerwithussnippet',
            name='email',
        ),
        migrations.RemoveField(
            model_name='partnerwithussnippet',
            name='phone',
        ),
    ]
