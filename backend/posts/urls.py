from rest_framework import routers
from .views import PostViewset
router = routers.DefaultRouter() 

router.register(r'',PostViewset,"posts")

urlpatterns = router.urls