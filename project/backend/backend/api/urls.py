from django.contrib import admin
from django.urls import path
from api import views
from api.views import car, cars_of_model, CarDetails, cars_of_basket, CarsInBasket
from api.views import carsByModel, model, CarsListAPIView, ModelsListAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('cars/', car),
    path('models/<int:id>/cars/', cars_of_model),
    path('cars/<int:pk>/', CarDetails.as_view()),
    path('basket/cars/', cars_of_basket),
    path('basket/cars/<int:pk>/', CarsInBasket.as_view()),
    path('models/', ModelsListAPIView.as_view()),
    path('cars/<int:id>/', carsByModel),
    path('models/<int:id>/', model)
]