from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Vacancy
from api.serializers import VacancySerializer


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VacancyDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, pk):
        vacancy = self.get_object(pk)
        vacancy.delete()

        return Response({'deleted': True})


# class VacancySortedAPIView(APIView):
#     def get(self, request):
#         vacancies = Vacancy.objects.order_by('-salary')[:3]
#         serializer = VacancySerializer(vacancies, many=True)
#
#         return Response(serializer.data)
