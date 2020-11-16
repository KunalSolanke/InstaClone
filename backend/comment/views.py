from django.contrib.auth.decorators import login_required
from django.shortcuts import render
import json
from django.http import HttpResponse
from django.utils.safestring import mark_safe
from django.shortcuts import get_object_or_404
from .models import Chat,Message
from accounts.models import User
from courses.models import Course,Image
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync




# from django.shortcuts import get_object_or_404



def get_curent_chat(chatId):
    return get_object_or_404(Chat,id=chatId)


def get_last_10_comments(postId):
    
    
    post = get_object_or_404(Post,id=postId)
    return post.comments.order_by('-timestamp')[:30]

