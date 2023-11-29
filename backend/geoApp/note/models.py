from django.db import models


class Note(models.Model):
    note_heading = models.CharField(max_length=100, blank=True, null=True)
    note = models.CharField(max_length=1000, blank=True, null=True)
    lat = models.FloatField()
    lb = models.FloatField()
    
    def __str__(self) -> str:
        return self.note_heading
    