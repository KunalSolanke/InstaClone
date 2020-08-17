from django.db import models
from django.conf import settings
from taggit.managers import TaggableManager
from django.utils import timezone
# Create your models here.


#user,title,postid,description,

class Post(models.Model) :
    post_id = models.AutoField(primary_key=True)
    post_slug= models.SlugField() 
    title = models.TextField(blank=True,null=True) 
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="posts")
    description = models.TextField(blank=True,null=True) 
    published_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now_add=True)
    tags=TaggableManager()



class Image(models.Model) :
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="post_images")
    image_id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to="post/pics/",default="")


class Video(models.Model) :
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="post_videos")
    video_id = models.AutoField(primary_key=True)
    url = models.URLField(("video_url"),default="")
    

class Like(models.Model) :
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="post_likes")
    from_user = models.ForeignKey(settings.AUTH_USER_MODEL,related_name="liked_posts",on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    is_liked=models.BooleanField(default=True)


#sender,receiver,comment,
class Comments(models.Model) :
    comment_id = models.AutoField(primary_key=True)
    sender_id =  models.ForeignKey(settings.AUTH_USER_MODEL,related_name="sent_comments",on_delete=models.CASCADE)
    post_id =  models.ForeignKey(Post,related_name="comments",on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=False,auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    comment = models.TextField()
    reply_to_comment = models.ManyToManyField('self',related_name="reply_comments") #add on_delete behaviour


# class Tag(models.Model) :
#     description = models.TextField(blank=True,null=True) 
#     related_tags = models.ManyToManyField('self',related_name="tags_related",null=True) #add on_delete behaviour
#     pic = models.ImageField(upload_to="tags/pics/")


    
