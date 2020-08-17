from django.db import models

# Create your models here.

class Notification(models.Model) :
    From  = models.ForeignKey(settings.AUTH_USER_MODEL,related_name='from1',on_delete= models.CASCADE)
    To = models.ManyToManyField(settings.AUTH_USER_MODEL,related_name='to2')
    timestamp = models.DateTimeField(auto_now=True)
    publish_time =models.DateTimeField(auto_now_add=True)
    notification = models.TextField(blank= True)
    notification_type = models.CharField(max_length= 10,blank =True )


    def __str__(self) :
        return '{}'.format(self.pk)
