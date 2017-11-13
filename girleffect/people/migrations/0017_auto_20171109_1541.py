# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-11-09 15:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('utils', '0007_merge_20171109_1001'),
        ('images', '0001_initial'),
        ('people', '0016_auto_20171107_1639'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersonIndexPersonCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='people.PersonCategory')),
            ],
        ),
        migrations.AddField(
            model_name='personindexpage',
            name='call_to_action',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='utils.CallToActionSnippet'),
        ),
        migrations.AddField(
            model_name='personindexpage',
            name='heading',
            field=models.CharField(blank=True, max_length=80),
        ),
        migrations.AddField(
            model_name='personindexpage',
            name='hero_image',
            field=models.ForeignKey(blank=True, help_text='Hero Image to be used as full width feature image for page.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='images.CustomImage'),
        ),
        migrations.AddField(
            model_name='personindexpage',
            name='introduction',
            field=wagtail.wagtailcore.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='personindexpersoncategory',
            name='page',
            field=modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='category_relationships', to='people.PersonIndexPage'),
        ),
    ]