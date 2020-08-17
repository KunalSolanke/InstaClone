from django.db import models
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.exceptions import ValidationError
# Create your models here.
 







class FollowRequestManager(models.Manager) :


    def accept(self,user1,user2) :
        if(user1==user2) :
            raise ValidationError("Users can not follow themselves")
        else :
            #create_a_notification_here
            following_request = FollowRequest.objects.get(from_user=user1,to_user=user2,is_active=True)
            following_request.is_accepted = True
            following =Follower.objects.get(user=user1)
            following.following.add(Follower.objects.get(user=user2))
            follower= Follower.objects.get(user=user2)
            follower.followers.add(Follower.objects.get(user=user1))
            following.save()
            follower.save() 
            following_request.save()

    def accept_and_followback(self,user1,user2) :
        if()

    def decline(self,from_user,to_user) :

        #create a notification her
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
    is_active = models.BooleanField(default=True)

    objects= FollowRequestManager() 




class Follower(models.Model) :
   user  = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
   followers = models.ManyToManyField('self',symmetrical=False,related_name="follower_back")
   following = models.ManyToManyField('self',symmetrical=False,related_name="following_back")


   objects = FollowerManager()


@receiver(post_save,sender=settings.AUTH_USER_MODEL) 
def create_profile(sender,instance,created,**kwargs) :
   if created :
       Follower.objects.create(user=instance)


@receiver(post_save,sender=FollowRequest)
def update_Follower(sender,instance,created,**kwargs) :
    
    if created and instance.to_user.profile.status=="A":
        
        instance.is_accepted = True 
        instance.save() 
        follower= Follower.objects.get(user=instance.to_user)
        follower.followers.add(Follower.objects.get(user=instance.from_user))
        following =Follower.objects.get(user=instance.from_user)
        following.following.add(Follower.objects.get(user=instance.to_user))
        follower.save()
        following.save() 
        
    
    
    
        

    


   
