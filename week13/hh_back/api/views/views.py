from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Company, Vacancy


# @csrf_exempt
# def company_list(request):
#     if request.method == 'GET':
#         companies = Company.objects.all()
#         companies_json = [c.to_json() for c in companies]
#         return JsonResponse(companies_json, safe=False)
#     elif request.method == 'POST':
#         return JsonResponse({'data': 'product post request'})
#
#
# @csrf_exempt
# def company_detail(request, vk):
#     try:
#         company = Company.objects.get(id=vk)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'error': str(e)})
#
#     if request.method == 'GET':
#         return JsonResponse(company.to_json())


def vacancy_by_company(request, vk):
    try:
        company = Company.objects.get(id=vk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)

    vacancies = company.vacancy_set.all()
    vacancies_json = [v.to_json() for v in vacancies]

    if request.method == 'GET':
        return JsonResponse(vacancies_json, safe=False)


def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        return JsonResponse({'data': 'product post request'})


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': 'Product does not exist!!!'})
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())


def vacancy_sorted(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    if request.method == 'GET':
        return JsonResponse(vacancies_json, safe=False)
