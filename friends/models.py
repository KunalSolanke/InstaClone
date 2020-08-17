from django.db import models

# Create your models here.




def get_followers() :

def get_following() :


   



class FollowRequest(models.Model) :
    follow_request_id = models.AutoField(primary_key=True)
    from_user  = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related="followrequest_sent")
    to_user  = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related="followrequest_received")
    is_accepted   = models.BooleanField(default=False)
    follow_request_active = models.BooleanField(default=True)
    follow_request_slug = models.SlugField()


class Follower() :
   user  = models.OneToOneField(setting.AUTH_USER_MODEl,on_delete=models.CASCADE)
   followers = models.ManyToManyField('self',symmetrical=True)



# A follows B 
# A following -> active follow requests  sent_by_A   -> 1 
# B followers -> active and accepted follow_request to B -> 1 


   
