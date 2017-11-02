# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-31 09:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0008_auto_20171030_1410'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personpagepersoncategory',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='person_relationships', to='people.PersonCategory'),
        ),
    ]
