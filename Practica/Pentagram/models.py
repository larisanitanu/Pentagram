from uuid import uuid1

from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch.dispatcher import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings


# Create your models here.

def photo_directory(instance, filename):
    return 'photo/user_{0}/{1}_{2}'.format(instance.user.username, str(uuid1()), filename)


class Photo(models.Model):  # (..)->extinde
    user = models.ForeignKey(User)
    # counter_like = models.IntegerField(default=0)
    photo = models.ImageField(upload_to=photo_directory, null=True)


class Comment(models.Model):
    photo = models.ForeignKey(Photo)
    user = models.ForeignKey(User)
    comment = models.TextField(null=False)


class Likes(models.Model):
    photo = models.ForeignKey(Photo)
    user = models.ForeignKey(User)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)