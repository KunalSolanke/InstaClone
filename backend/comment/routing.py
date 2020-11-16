from django.urls import re_path

from . import consumer

websocket_urlpatterns = [
    re_path(r'^ws/post/(?P<post_id>\w+)/$', consumer.CommentConsumer.as_asgi()),
]
