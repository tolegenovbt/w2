from rest_framework import serializers
from api.models import Model, Car, Basket


class ModelsListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        model = Model()
        model.name = validated_data.get('name', 'default name')
        model.save()
        return model

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class ModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Model
        fields = ('id', 'name')


class CarSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    imageLink = serializers.CharField()
    description = serializers.CharField()
    price = serializers.CharField()

    def create(self, validated_data):
        car = Car()
        car.name = validated_data.get('name', 'default name')
        car.imageLink = validated_data.get('imageLink', 'assets/test.png')
        car.description = validated_data.get('description', 'default description')
        car.price = validated_data.get('price', '$ 19990')
        car.save()
        return car

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.imageLink = validated_data.get('imageLink')
        instance.description = validated_data.get('description')
        instance.price = validated_data.get('price')
        instance.save()
        return instance


class CarsListSerializer(serializers.ModelSerializer):
    model = serializers.ReadOnlyField(source='model.id')

    class Meta:
        model = Car
        fields = "__all__"


class BasketSerializer(serializers.ModelSerializer):
    cars = CarsListSerializer(many=True)

    class Meta:
        model = Basket
        fields = {'id', 'cars'}