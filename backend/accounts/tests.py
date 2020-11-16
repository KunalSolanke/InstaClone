from django.test import TestCase
from accounts.models import * 
from django.contrib.auth.models import User
from django.test import TestCase

class CustomUserModelTest(TestCase) :
    @classmethod
    def setUpTestData(cls) :
        cls.user = CustomUser.objects.create(username="InstaUser",email="InstaUser@gmail.com",password="InstaUser")
        cls.user.save()
        
    def test_create_user(self) :
        user = CustomUser.objects.get(username="InstaUser")
        self.assertIsInstance(user,CustomUser)

    def test_profile_created(self) :
        profile = Profile.objects.get(user=CustomUser.objects.get(username="InstaUser"))
        self.assertIsInstance(profile,Profile)

    def test_duplicate_username(self) :
        pass
        
    def test_user_for_duplicate_email(self) :
        pass

    def test_profile_status(self) :
        profile = Profile.objects.get(user=CustomUser.objects.get(username="InstaUser"))
        self.assertEqual(profile.get_status_display(),'private')
        

    



