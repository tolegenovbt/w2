from django.http.response import JsonResponse
from api.models import Company,Vacancy


def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.__str__() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error: Company does not exist!'})
    return JsonResponse(company.to_json())


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.__str__() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error: Vacancy does not exist!'})
    return JsonResponse(vacancy.to_json())


def vacancies_by_companies(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error: Company does not exist!'})

    vacancies = company.vacancy_set.all()
    json_vacancies = [vacancy.__str__() for vacancy in vacancies]
    return JsonResponse(json_vacancies, safe=False)


def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[0:10]
    json_top_ten_vacancies = [vacancy.__str__() for vacancy in vacancies]
    return JsonResponse(json_top_ten_vacancies, safe=False)
