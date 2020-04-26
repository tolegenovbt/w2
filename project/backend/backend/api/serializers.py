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