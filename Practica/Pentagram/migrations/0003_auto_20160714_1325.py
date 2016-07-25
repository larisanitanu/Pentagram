# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0002_auto_20160714_1322'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='photo_id',
            new_name='photo',
        ),
        migrations.RenameField(
            model_name='comment',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='photo',
            old_name='user_id',
            new_name='user',
        ),
    ]
