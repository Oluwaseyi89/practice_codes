from django.db import models


# Create your models here.

class Users(models.Model):
    FirstName = models.CharField(max_length=200)
    LastName = models.CharField(max_length=200)
    eMail = models.CharField(max_length=200)
    passWord = models.CharField(max_length=200)

    def __str__(self):
        return self.FirstName


class Customers(models.Model):
    last_name = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=80)
    phone = models.BigIntegerField()
    country = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    street_add = models.CharField(max_length=200)
    dob = models.DateField()
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name


class Products(models.Model):
    prod_id = models.BigIntegerField()
    prod_name = models.CharField(max_length=200)
    prod_price = models.BigIntegerField()
    prod_img = models.URLField()
    stock_qty = models.BigIntegerField()

    def __str__(self):
        return self.prod_name
