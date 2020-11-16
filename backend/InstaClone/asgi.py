import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'InstaClone.settings')

import django
django.setup()








from django.core.asgi import get_asgi_application
from channels.routing import get_default_application,ProtocolTypeRouter,URLRouter
from channels.auth import AuthMiddlewareStack
import chatService.routing






application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter(
            chatService.routing.websocket_urlpatterns + comment.routing.websocket_urlpatterns
        )
    ),
})