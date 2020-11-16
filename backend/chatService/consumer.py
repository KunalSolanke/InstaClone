# chat/consumers.py
import json
from asgiref.sync import async_to_sync,sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from chat.models import Message
from django.conf import settings
from .views import get_last_10_messages,get_curent_chat
from channels.db import database_sync_to_async
# from user.models import Message





from accounts.models import User
#User=settings.AUTH_USER_MODEL

class ChatConsumer(AsyncJsonWebsocketConsumer):
    commands ={
            'fetch_messages': fetch_messages,
            'new_message'  : new_messages,
          #  'online':online,
            #'typing':typing,
            'media':send_media
         }


    async def fetch_messages(self,data):
        print('fetching')
        messages=await database_sync_to_async(get_last_10_messages)(int(self.room_name))
        
        message_json = await self.messages_to_json(messages,self.room_name)
        context ={
            'command': 'messages',
            'messages' : message_json
        }
        await self.send_message(context)
      
    

    # def typing(self,data) :
    #     person =await database_sync_to_async(User.objects.get)(username=data['username'])

    #     context ={
    #         'command':'typing',
    #         'type':data['type'],
    #         'message':{
    #             'name':person.username
    #         }
    #     }
    #     await self.send_chat_message(context)
    

    """    def online(self,data) :
        person= User.objects.get(username=data['username']) 
        context ={
            'command':'online',
            'message':{
                'name':person.username
            }
        }
        self.send_chat_message(context)"""




    async def new_messages(self,data) :
        print("new message")
        user = await database_sync_to_async(User.objects.get)(username =data["from"])
        
        # author_user=User.objects.filter(username=contact)[0]
        message = await database_sync_to_async(Message.objects.create)(user=user,content=data['message'])
        message_json = await self.message_to_json(message,self.room_name)
       
        content={
            'command':'new_message',
            'message': message_json
        }
        current_chat = await database_sync_to_async(get_curent_chat)(self.room_name)
        await database_sync_to_async(current_chat.messages.add)(message)
        await database_sync_to_async(current_chat.save)()
         
        # print(data['message'])

        return await self.send_chat_message(content)


    async def send_media(self,event) :
        item = event["item"]

        content = {
            "url" : item["url"],
            "media_type":item["media_type"],
            "caption" : item["caption"],
            "author" : item["user"],
            "command" : "media"
        }
       
                
        await self.send_message(content)

    @database_sync_to_async
    def messages_to_json(self,messages,id) :
        result = []
        for  message in messages:
            if message.content_type :
                media_type = message.content_type.model
                result.append({
                'id':message.id,
                'author':message.user.username,
                'url':message.item.file.url,
                'title':message.item.title,
                'timestamp':str(message.timestamp),
                'chatId':id,
                 "media_type":media_type
                })
            else :
                result.append({
                'id':message.id,
                'author':message.user.username,
                'content' : message.content,
                'timestamp':str(message.timestamp),
                'chatId':id
                })
        return result
    
    @database_sync_to_async
    def message_to_json(self,message,id):
        return {
            'id':message.id,
            'author':message.user.username,
            'content':message.content,
            'timestamp':str(message.timestamp),
            'chatId':id
        }

    async def connect(self):
        print("connecting")
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % str(self.room_name)

        # Join room group
       
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name    
        )
        
        await self.accept()
        

    async def disconnect(self, close_code):
            # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
    # Receive message from WebSocket
    
    async def receive_json(self, text_data):
        data = text_data
        await self.commands[data['command']](self,data)


    async def send_chat_message(self,message) :
     
        #message =data_json['message']

        # Send message to room group
      
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )
        print(self.room_group_name)
        

    

    async def send_message(self,context) :
    
        await self.send_json(content=context
        )


    # Receive message from room group
    async def chat_message(self, event):
        # print('on chat.message worked')
        message = event['message']

        # Send message to WebSocket
        await self.send_json(content={
            'message':message
        }
        )
