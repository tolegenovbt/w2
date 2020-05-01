from django.urls import path
from api.views import car, cars_of_model, CarDetails, cars_of_basket, CarsInBasket, CarListAPIView
from api.views import carsByModel, model_detail, model, ModelsListAPIView, car_by_model
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('models/<int:id>/cars/', car_by_model),
    path('models/', ModelsListAPIView.as_view()),
    path('models/<int:id>/', model),

    path('cars/', CarListAPIView.as_view()),
    path('cars/<int:pk>/', CarDetails.as_view()),
    # path('cars/<int:id>/', carsByModel),

    path('basket/cars/', cars_of_basket),
    path('basket/cars/<int:pk>/', CarsInBasket.as_view())
]