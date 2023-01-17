from django.contrib import admin
from .models import Customers, Products

# Register your models here.

admin.site.register(Customers)
admin.site.register(Products)


# @admin.register(Customers)
# class CustomersAdmin(admin.ModelAdmin):
#     list_display = ['__str__', 'first_name', 'state', 'dob']
