from rest_framework.serializers import HyperlinkedModelSerializer,ModelSerializer
from rest_framework import serializers
from .models import Post , Image, Video

    

class VideoSerializer(serializers.Serializer):
    
    video= serializers.FileField(required=False)
    class Meta :
        fields = ['video']
        
    


class ImageSerializer(serializers.Serializer):
    image = serializers.ImageField(required=False)
    class Meta :
        fields = ['image']



class PostSerializer(ModelSerializer):
    images = ImageSerializer(source="post_images",many=True, required=False)
    videos = VideoSerializer(source="post_videos",many=True, required=False)
    class Meta:
        model = Post
        fields = ['images', 'videos', 'title', 'description','user']
        


    def create(self,validated_data) :
        images  = validated_data.pop("post_images",[])
        videos  = validated_data.pop("post_videos", [])
        instance = super(PostSerializer,self).create(validated_data)
        for image in images :
           Image.objects.create(image=image
           ['image'],post_id=instance)
        for video in videos :
            Video.objects.create(video =video['video'] ,post=instance )
        
        
        return instance

    def update(self,instance,validated_data) :
        images = validated_data.pop("post_images", {})
        videos = validated_data.pop("post_videos", {})
        instance = super(PostSerializer, self).create(validated_data)

        for image in images:
           Image.objects.create(image=image
                                ['image'], post_id=instance)
        for video in videos:
            Video.objects.create(video=video['video'], post=instance)

        return instance
        

        



    
    

    
