from django.db import models


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }


class Manager(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }


class Model(models.Model):
    name = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Car(models.Model):
    name = models.CharField(max_length=500, default='')
    imageLink = models.TextField(default='')
    price = models.CharField(max_length=100, default='')
    description = models.TextField(default="description")
    new = models.BooleanField(default=True)
    model = models.ForeignKey(Model, on_delete=models.CASCADE, default=1)

    def to_json(self):
        return {
            'id': self.id,
            'imageLink': self.imageLink,
            'price': self.price,
            'description': self.description,
            'model': self.model.id
        }


class Basket(models.Model):
    car = models.ManyToManyField(Car)
