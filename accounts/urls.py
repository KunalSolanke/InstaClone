
from django.contrib import admin
from django.urls import path,include,re_path

urlpatterns = [
    re_path(r'^rest-auth/', include('rest_auth.urls')),
    re_path(r'^rest-auth/registration/', include('rest_auth.registration.urls'))
]
