# chat/consumers.py
import json
from asgiref.sync import async_to_sync,sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from Post.models import Comments,Posts
from django.conf import settings
from .views import get_last_10_comments,get_curent_chat
from channels.db import database_sync_to_async
# from user.models import comment


from accounts.models import User
#User=settings.AUTH_USER_MODEL

class CommentConsumer(AsyncJsonWebsocketConsumer):
    
    async def connect(self):
        print("connecting")
        self.post_id = self.scope['url_route']['kwargs']['post_id']
        self.room_group_name = 'post_%s' % str(self.post_id)

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

    async def fetch_comments(self,data):
        print('fetching')
        comments=await database_sync_to_async(get_last_10_comments)(int(self.post_id))
        
        comment_json = await self.comments_to_json(comments,self.post_id)
        context ={
            'command': 'comments',
            'comments' : comment_json
        }
        await self.send_comment(context)
    


    async def reply_to_comment(self,data):
        

        user = await database_sync_to_async(User.objects.get)(username =data["from"])
        comment = await database_sync_to_async(Comments.objects.get)(id=data['id'])
        replied_comment = await database_sync_to_async(Comments.objects.create)(post_id=self.post_id,sender_id=user,
        comment=data['comment'],reply_to_comment=comment)

        comment_json = await self.comment_to_json(replied_comment,self.post_id)
        reply_to_comment_json = await self.comment_to_json(comment,self.post_id)

        content={
            'command':'replied_to_comment',
            'reply_to_comment' : reply_to_comment_json,
            'comment': comment_json
        }

        return await self.send_post_comment(content)



        
    
    
    async def new_comment(self,data) :
        print("new comment")
        user = await database_sync_to_async(User.objects.get)(username =data["from"])
        comment = await database_sync_to_async(Comments.objects.create)(post_id=self.post_id,sender_id=user,comment=data['comment'])
        comment_json = await self.comment_to_json(comment,self.post_id)
       
        content={
            'command':'new_comment',
            'comment': comment_json
        }
        # print(data['comment'])
        return await self.send_post_comment(content)
    
    

    async def like_comment(self,data) :
        print("liked_comment")
        user = await database_sync_to_async(User.objects.get)(username =data["from"])
        comment = await database_sync_to_async(Comments.objects.get)(id=data['id'])
        if comment.liked_by.all().includes(user) :
            comment.liked_by.remove(user)    
        else :
            comment.liked_by.add(user)

        content={
            'command':'like_comment',
            'content': {
                    "count" : len(comment.liked_by.all()),
                    "author" : user.username
            }
        }
        
        return await self.send_post_comment(content)
        
   
    async def delete_comment(self,data) :
        comment = await database_sync_to_async(Comments.objects.get)(id=data['id'])
        content={
            'command':'delete_comment',
            'content': {
                    "author" : user.username,
                    "id" : comment.id
            }
        }
        comment.delete()
        return await self.send_post_comment(content)


    async def update_comment(self,data) :
        print("new comment")
        user = await database_sync_to_async(User.objects.get)(username =data["from"])
        comment = await database_sync_to_async(Comments.objects.get)(id=data["id"])
        comment.comment = data["comment"]
        await database_sync_to_async(comment.save)()
        comment_json = await self.comment_to_json(comment,self.post_id)
       
        content={
            'command':'update_comment',
            'comment': comment_json
        }
        # print(data['comment'])
        return await self.send_post_comment(content)
   

    commands ={
             'fetch_comments': fetch_comments,
             'new_comment'  : new_comments,
             'reply_to_comment' :reply_to_comment,
             'like_comment':like_comment,
             'update_comment' : update_comment,
             'delete_comment':delete_comment,
    }
        
            
            
    @database_sync_to_async
    def comments_to_json(self,comments,id) :
        result = []
        for  comment in comments:
            data = {
            'reply_to_co'
            'id':comment.id,
            'author':comment.sender_id.username,
            'comment':comment.comment,
            'timestamp':str(comment.updated_at),
            'post_id':id
            }
            result.append(data)
        return result
    
    @database_sync_to_async
    def comment_to_json(self,comment,id):
        return {
           
            'id':comment.id,
            'author':comment.sender_id.username,
            'comment':comment.comment,
            'timestamp':str(comment.updated_at),
            'post_id':id
        }

    
   


    async def receive_json(self, text_data):
        data = text_data
        await self.commands[data['command']](self,data)

    async def send_post_comment(self,comment) :
     
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_comment',
                'comment': comment
            }
        )
        print(self.room_group_name)

    
        return {

    async def send_comment(self,context) :
    
        await self.send_json(content=context
        )



    # Receive comment from room group
    async def chat_comment(self, event):
        comment = event['comment']
        # Send comment to WebSocket
        await self.send_json(content={
            'comment':comment
        }
    )

    
