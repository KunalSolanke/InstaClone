from django.db import models
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.exceptions import ValidationError
# Create your models here.
 







class FollowRequestManager(models.Manager) :


    def accept(self,from_user,to_user) :
        if(user1==user2) :
            raise ValidationError("Users can not follow themselves")
        else :
            #create_a_notification_here
            following_request = FollowRequest.objects.get(from_user=from_user,to_user=to_user)
            following_request.is_accepted = True
            following =Follower.objects.get(user=from_user).following.add(Follwer.objects.get(user=to_user))
            follwer= Follower.objects.get(user=instance.to_user).followers.add(Follwer.objects.get(user=instance.from_user))
            following.save()
            follwer.save() 
            following_request.save()

    def decline(self,from_user,to_user) :

        #create a notification here

        pass




class FollowerManager(models.Manager) :

    
    def followers_count(self,user) :
        return Follower.objects.get(user=user).followers.count()

    def following_count(self,user) :
        return Follower.objects.get(user=user).following.count()

    def followSuggestion(self,user) :
        pass



        
class FollowRequest(models.Model) :
    follow_request_id = models.AutoField(primary_key=True)
    from_user  = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="followrequest_sent")
    to_user  = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="followrequest_received")
    is_accepted = models.BooleanField(default=False)
    follow_request_slug = models.SlugField()

    objects= FollowRequestManager() 




class Follower(models.Model) :
   user  = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
   followers = models.ManyToManyField('self',symmetrical=False,related_name="follower_back")
   following = models.ManyToManyField('self',symmetrical=False,related_name="following_back")


   objects = FollowerManager()


@receiver(post_save,sender=settings.AUTH_USER_MODEL) 
def create_profile(sender,instance,created,**kwargs) :
   if created :
       Profile.objects.create(user=instance)


@receiver(post_save,sender=FollowRequest)
def update_Follower(sender,instance,created,**kwargs) :
    if created and instance.to_user.stauts=="public":
        instance.is_accepted = True 
        instance.save() 
        follwer= Follower.objects.get(user=instance.to_user).followers.add(Follwer.objects.get(user=instance.from_user))
        following =Follower.objects.get(user=instance.from_user).following.add(Follwer.objects.get(user=instance.to_user))
        follwer.save()
        following.save() 
        
    
    
    
        

    


   
