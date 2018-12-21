
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    reciever = models.CharField(max_length=50)
    price = models.IntegerField(default=0)

    def __str__(self):
        return self.name
