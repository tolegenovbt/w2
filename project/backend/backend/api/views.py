from api.models import Model, Car, Basket
from api.serializers import ModelsListSerializer, CarsListSerializer, ModelSerializer,  BasketSerializer
from rest_framework import status, generics
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


@api_view(['GET', 'PUT', 'DELETE'])
def model_detail(request, id):
    try:
        model = Model.objects.get(id=id)
    except Model.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = ModelSerializer(model)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ModelSerializer(instance=model, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
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
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'POST'])
def car(request):
    if request.method == 'GET':
        cars_list = Car.objects.all()
        serializer = CarsListSerializer(cars_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CarsListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CarListAPIView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarsListSerializer


@api_view(['GET'])
def cars_of_model(request, id):
    try:
        model = Model.objects.get(id=id)
    except Model.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        cars = model.cars_set.all()
        serializer = CarsListSerializer(cars, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def car_by_model(request, pk):
    try:
        model = Model.objects.get(id=pk)
    except Model.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CarsListSerializer(model.cars.all(), many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CarsListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CarDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarsListSerializer


@api_view(['GET'])
def cars_of_basket(request):
    try:
        basket = Basket.objects.get(id=2)
    except Basket.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        cars = basket.car.all()
        serializer = CarsListSerializer(cars, many=True)
        return Response(serializer.data)


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
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CarsInBasket(APIView):
    def get_object(self, id):
        try:
            return Car.objects.get(id=id)
        except Car.DoesNotExist as e:
            return Response({'error': str(e)})

    def delete(self, request, pk):
        car = self.get_object(pk)
        basket = Basket.objects.get(id=2)
        basket.car.remove(car)
        return Response({'DELETED': True})

    def post(self, request, pk):
        car = self.get_object(pk)
        basket = Basket.objects.get(id=2)
        basket.car.add(car)
        return Response({'ADDED': True})


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

