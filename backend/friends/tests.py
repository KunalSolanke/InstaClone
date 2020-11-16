from django.test import TestCase
from friends.models import * 
from accounts.models import * 
from django.contrib.auth.models import User
from django.test import TestCase

class FollowerModelTest(TestCase) :
    @classmethod
    def setUpTestData(cls) :
       cls.user = CustomUser.objects.create(username="InstaUser",email="InstaUser@gmail.com",password="InstaUser")
       cls.user1 = CustomUser.objects.create(username="InstaUser1",email="InstaUser1@gmail.com",password="InstaUser")
       cls.profile = Profile.objects.get(user=cls.user)
       cls.profile.status = "A"
       cls.profile.save()
       cls.user.save()
       cls.followRequest =FollowRequest.objects.create(from_user=cls.user1,to_user=CustomUser.objects.get(username="InstaUser"))
       cls.followRequest.save() 

    def test_follower_created(self) :
        follower = Follower.objects.get(user=self.user)
        self.assertIsInstance(follower,Follower)
    
    def test_user_got_follower(self) :
        follower = Follower.objects.get(user=self.user) 
        self.assertEqual(follower.followers.count(),1)


    def test_user1_isFollowing(self) :
        follower = Follower.objects.get(user=self.user1) 
        self.assertEqual(follower.following.count(),1)

    
    """
       followerMangerMethods
    """

    def test_follower_count(self) :
        self.assertEqual(Follower.objects.followers_count(self.user),1)
        self.assertEqual(Follower.objects.followers_count(self.user1),0)

    def test_following_count(self) :
        self.assertEqual(Follower.objects.following_count(self.user),0)
        self.assertEqual(Follower.objects.following_count(self.user1),1)




class FollowingRequestModelTest(TestCase) :
    @classmethod
    def setUpTestData(cls) :
       cls.user = CustomUser.objects.create(username="InstaUser",email="InstaUser@gmail.com",password="InstaUser")
       cls.user1 = CustomUser.objects.create(username="InstaUser1",email="InstaUser1@gmail.com",password="InstaUser")
       cls.profile = Profile.objects.get(user=cls.user)
       cls.user.save()
       cls.followRequest =FollowRequest.objects.create(from_user=cls.user1,to_user=CustomUser.objects.get(username="InstaUser"))
       cls.followRequest.save()


    def test_accept_request(self) :
       FollowRequest.objects.accept(self.user1,self.user)
       self.assertEqual(Follower.objects.followers_count(self.user),1)
       self.assertEqual(Follower.objects.followers_count(self.user1),0)
       self.assertEqual(Follower.objects.following_count(self.user),0)
       self.assertEqual(Follower.objects.following_count(self.user1),1)

        



    
    
    



