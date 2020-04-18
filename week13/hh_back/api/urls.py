from django.urls import path
# from api.views import vacancy_list, vacancy_detail, vacancy_by_company, company_list, company_detail, vacancy_sorted
from rest_framework_jwt.views import obtain_jwt_token

from api.views.views_fbv import company_list, company_detail, vacancy_by_company, sorted_list
from api.views.views_cbv import VacancyListAPIView, VacancyDetailAPIView
from api.views.views_generic_cbv  import VacancyListAPIView, VacancyDetailAPIView, VacancySortedAPIView

urlpatterns = [
    # path('vacancies/', vacancy_list),
    # path('vacancies/<int:vacancy_id>/', vacancy_detail),
    # path('vacancies/top_ten/', vacancy_sorted),
    # path('companies/', company_list),
    # path('companies/<int:vk>/', company_detail),
    # path('companies/<int:vk>/vacancies/', vacancy_by_company),

    path('login/', obtain_jwt_token),

    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:pk>/vacancies/', vacancy_by_company),
    # path('vacancies/sorted/', sorted_list),

    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/sorted/', VacancySortedAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
]
