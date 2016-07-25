# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Pentagram', '0004_auto_20160718_1329'),
    ]

    operations = [
        migrations.CreateModel(
            name='Likes',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
            ],
        ),
        migrations.RenameField(
            model_name='comment',
            old_name='id_photo',
            new_name='photo',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='counter_like',
        ),
        migrations.AddField(
            model_name='likes',
            name='photo',
            field=models.ForeignKey(to='Pentagram.Photo'),
        ),
        migrations.AddField(
            model_name='likes',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
