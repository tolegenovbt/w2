from django.contrib import admin
from django.urls import path
from api import views
from api.views import carsByModel, model, CarsListAPIView, ModelsListAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('models', ModelsListAPIView.as_view()),
    path('cars', CarsListAPIView.as_view()),
    path('cars/<int:id>', carsByModel),
    path('models/<int:id>', model),
]
