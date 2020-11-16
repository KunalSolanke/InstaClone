from django.db import models
from django.conf import settings
from taggit.managers import TaggableManager
from django.utils import timezone
# Create your models here.


#user,title,postid,description,


class Post(models.Model) :
    post_slug= models.SlugField(blank=True,null=True) 
    title = models.TextField(blank=True,null=True) 
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="posts")
    description = models.TextField(blank=True,null=True) 
    published_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now_add=True)
    tags=TaggableManager()



class Image(models.Model) :
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="post_images")
    image = models.ImageField(upload_to="post/pics/",default="")


class Video(models.Model) :
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="post_videos")
    video = models.FileField(upload_to="post/videos/",default="")
    

class Like(models.Model) :
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="post_likes")
    from_user = models.ForeignKey(settings.AUTH_USER_MODEL,related_name="liked_posts",on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    is_liked=models.BooleanField(default=True)



#sender,receiver,comment,
class Comments(models.Model) :
    sender_id =  models.ForeignKey(settings.AUTH_USER_MODEL,related_name="sent_comments",on_delete=models.CASCADE,null=True)
    post_id =  models.ForeignKey(Post,related_name="comments",on_delete=models.CASCADE,null=True)
    created_at = models.DateTimeField(auto_now=False,auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    comment = models.TextField(blank=True,null=True)
    reply_to_comment = models.ForeignKey('self',related_name="reply_comments",on_delete=models.CASCADE,null=True)  #add on_delete behaviourent
    liked_by = models.ManyToManyField(settings.AUTH_USER_MODEL,related_name="liked_comments")
    
    # @property
    # likes_cnt(self) :
    #    return len(self.liked_by.all()) # To be changed


# class Tag(models.Model) :
#     description = models.TextField(blank=True,null=True) 
#     related_tags = models.ManyToManyField('self',related_name="tags_related",null=True) #add on_delete behaviour
#     pic = models.ImageField(upload_to="tags/pics/")


    
