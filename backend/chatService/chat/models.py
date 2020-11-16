from django.db import models
from django.conf import settings
from courses.models import Course
from django.dispatch import receiver
from django.db.models.signals import post_save,m2m_changed
from accounts.models import Student
from courses.models import Course
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey


User = settings.AUTH_USER_MODEL
# Create your models here.

class Message(models.Model) :
    user    = models.ForeignKey(User,related_name="messages",on_delete=models.CASCADE)
    timestamp  = models.DateTimeField(auto_now_add=True)
    content   =   models.TextField()
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True,blank=True,
    limit_choices_to={'model__in':( 'video','image','file')})
    object_id = models.PositiveIntegerField(blank=True,null=True)
    item = GenericForeignKey('content_type', 'object_id')
    # read_by=models.ManyToManyField(Contact,related_name='messages_read')

    def __str__(self) :
        return self.user.username


class Chat(models.Model) :
    participants = models.ManyToManyField(User,related_name='chats')
    messages = models.ManyToManyField(Message,blank=True,related_name='chat')
    course = models.OneToOneField(Course ,related_name = "general_chat",on_delete=models.CASCADE)



    def __str__(self) :

        return "{}".format(self.pk)


    def last_10_messages(self) :
        return self.messages.objects.all().order_by('timestamp')[:10]




@receiver(post_save ,sender = Course)
def create_chat(sender,instance,created,**kwargs) :
    if created :
        chat =Chat.objects.create(course=instance) 
        chat.participants.set(instance.student_courses.all())
        chat.save()
    


