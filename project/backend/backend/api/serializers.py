from rest_framework import serializers
from api.models import Model, Car


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


class CarsListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    imageLink = serializers.CharField()
    price = serializers.CharField()
    description = serializers.CharField()
    model = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    def create(self, validated_data):
        car = Car()
        car.name = validated_data.get('name', 'default name')
        car.imageLink = validated_data.get('imageLink', 'default imageLink')
        car.price = validated_data.get('price', 'default price')
        car.description = validated_data.get('description', 'default description')
        car.model = validated_data.get('model', 1)
        car.save()
        return car

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.imageLink = validated_data.get('imageLink')
        instance.price = validated_data.get('price')
        instance.description = validated_data.get('description')
        instance.model = validated_data.get('model')
        instance.save()
        return instance