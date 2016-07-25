# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import Pentagram.models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0003_auto_20160714_1325'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='photo',
            new_name='id_photo',
        ),
        migrations.AlterField(
            model_name='comment',
            name='comment',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='photo',
            name='counter_like',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='photo',
            name='photo',
            field=models.ImageField(upload_to=Pentagram.models.photo_directory, null=True),
        ),
    ]
