from django.db import models

class Ticket(models.Model):
    name = models.CharField(max_length = 255)
    address = models.CharField(max_length = 255)
    destination = models.CharField(max_length = 255)
    age = models.IntegerField()