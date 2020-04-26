from api.models import Model, Car
from api.serializers import ModelsListSerializer, CarsListSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response


@api_view(['GET', 'PUT', 'DELETE'])
def model(request, id):
    try:
        model = Model.objects.get(id=id)
    except Model.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        serializer = ModelsListSerializer(model)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ModelsListSerializer(instance=model, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    if request.method == 'DELETE':
        model.delete()
        return Response({'deleted': True})


class CarsListAPIView(APIView):
    def get(self, request):
        cars_list = Car.objects.all()
        serializer = CarsListSerializer(cars_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CarsListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ModelsListAPIView(APIView):
    def get(self, request):
        models_list = Model.objects.all()
        serializer = ModelsListSerializer(models_list, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ModelsListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def carsByModel(request, id):
    if request.method == 'GET':
        cars_list = Car.objects.all()
        carsByModel = []
        for car in cars_list:
            if car.model.id == id:
                serializer = CarsListSerializer(car)
                carsByModel.append(serializer.data)
        return Response(carsByModel)

