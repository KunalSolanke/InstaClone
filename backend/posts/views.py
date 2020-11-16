from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from rest_framework.authentication import TokenAuthentication,SessionAuthentication,BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.mixins import RetrieveModelMixin
from rest_framework.parsers import FileUploadParser,JSONParser,FormParser,MultiPartParser
from .models import Post
# Create your views here.


class PostViewset(viewsets.ModelViewSet,RetrieveModelMixin) :
   # parser_classes = [FileUploadParser,FormParser, JSONParser, MultiPartParser]
    serializer_class = PostSerializer
    authentication_classes = [BasicAuthentication,TokenAuthentication,SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self) :

        return Post.objects.all()
    
    def perform_create(self,serializer) :
       
        kwargs = {
            'user' : self.request.user
        }

        serializer.save(**kwargs)

        
