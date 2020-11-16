from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer
from django.conf import settings
from accounts.models import CustomUser as User
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account import app_settings as allauth_settings
from allauth.utils import (email_address_exists,
                            get_username_max_length)
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

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

    
    


class RegisterSerializer(serializers.Serializer) :
    
    first_name=serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    username = serializers.CharField(
        max_length=get_username_max_length(),
        min_length=allauth_settings.USERNAME_MIN_LENGTH,
        required=allauth_settings.USERNAME_REQUIRED
    )
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate_username(self, username):
        username = get_adapter().clean_username(username)
        return username

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def validate_first_name(self,name) :
        if name : 
            return name
    
    def validate_last_name(self,name) :
        if name :
            return name 

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(_("The two password fields didn't match."))
        return data

    def custom_signup(self, request, user):
        pass

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user

   
    
   

    

    
    
        
    

    
    
    
