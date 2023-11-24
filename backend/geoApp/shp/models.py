import datetime
from django.db import models


class Shp(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=1000, blank=True)
    file = models.FileField(upload_to='%Y/%m/%d/')
    uploaded_date = models.DateField(default=datetime.date.today, blank=True)
    
    def __str__(self):
        return self.name