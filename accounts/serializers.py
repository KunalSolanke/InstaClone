from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer
from django.conf import settings
from accounts.models import CustomUser as User



class ProfileSerializer(UserDetailsSerializer) :
    bio=serializers.CharField(source="profile.bio",required=False)
    pic=serializers.ImageField(source="profile.pic",required=False)
    gender=serializers.CharField(source="profile.gender",required=False)
    status = serializers.CharField(source="profile.status",required=False)
    DOB = serializers.DateTimeField(source="profile.date_of_birth",required=False)

    class Meta(UserDetailsSerializer.Meta):
        model=User
        fields=UserDetailsSerializer.Meta.fields+('bio','pic','gender','status','DOB')

    def update(self,instance,validated_data):
        
        profile_data=validated_data.pop('profile',{})
        bio = profile_data.get('bio')
        pic= profile_data.get('pic')
        gender= profile_data.get('gender')
        status= profile_data.get('status')
        dob= profile_data.get('DOB')
        instance = super(ProfileSerializer,self).update(instance,validated_data) 
        profile=instance.profile
        
        if profile_data :
            if bio:
                profile.bio=bio
            if pic :
              profile.pic=pic
            if gender:
                profile.gender=gender
            if status:
                profile.status=status
            if dob:
                profile.date_of_birth=dob

        
        profile.save()
        return instance

    
    
