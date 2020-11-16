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


def get_last_10_messages(chatId):
    
    chat = get_object_or_404(Chat,id=chatId)
    print(chat.messages.order_by('timestamp')[:10])
    return chat.messages.order_by('-timestamp')[:30]

def chat(request, chat_id):

    chat = Chat.objects.get(id = int(chat_id))
    all_participants = chat.participants.all()
    print(all_participants)
    
    return render(request, 'chat/chat.html', {
        'people':all_participants,
        'room_name':mark_safe(json.dumps(chat_id)),
        'username' : mark_safe(json.dumps(request.user.username or ""))

    })


def media_image(request,chat_id) :
    if request.method == "POST" :
        data = {}
        print(request.FILES)
        if request.FILES["media_image"] is not None :
            item = Image.objects.create(owner = request.user,file=request.FILES["media_image"])
            message=Message.objects.create(item =item,user=request.user )
            chat = Chat.objects.get(id=chat_id)
            chat.messages.add(message)
            layer = get_channel_layer()
            item = {
               "media_type": "image",
                "url" : item.file.url,
                "user" : request.user.username,
                'caption':item.title
            }
            async_to_sync(layer.group_send)(
                'chat_%s'%str(chat_id),
                {
                    "type":"send_media",
                    "item" : item
                    
                }
            )

        return HttpResponse("media sent")


        
     