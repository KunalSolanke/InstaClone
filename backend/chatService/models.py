from django.db import models
from django.conf import settings
# Create your models here.






class Message(models.Model) :
    message      =  models.TextField() 
    sender       =  models.ForeignKey(settings.AUTH_USER_MODEL,related_name="messages",on_delete=models.CASCADE,null=True)
    timestamp    =  models.DateTimeField(auto_now_add=True,auto_now=False)
    

class Chat(models.Model) :
    messages = models.ManyToManyField(Message,related_name="chats")
    participants = models.ManyToManyField(settings.AUTH_USER_MODEL,related_name="total_chats",null=True)




