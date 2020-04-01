from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')
    city = models.CharField(max_length=100)
    address = models.TextField(default='')

    def __str__(self):
        return '{},  {}     city:{}'.format(self.id, self.name, self.city)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

# name - CharField
# description - TextField
# salary - FloatField
# company - ForeignKey


class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')
    salary = models.FloatField(default=120000)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return '{},  {}  salary:{}'.format(self.id, self.name, self.salary)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company
        }

