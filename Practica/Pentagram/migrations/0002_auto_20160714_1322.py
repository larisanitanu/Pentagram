# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Pentagram', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('comment', models.CharField(max_length=250)),
            ],
        ),
        migrations.RenameField(
            model_name='photo',
            old_name='user',
            new_name='user_id',
        ),
        migrations.AddField(
            model_name='comment',
            name='photo_id',
            field=models.ForeignKey(to='Pentagram.Photo'),
        ),
        migrations.AddField(
            model_name='comment',
            name='user_id',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
