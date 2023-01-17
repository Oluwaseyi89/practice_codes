from collections import OrderedDict

from django.utils.decorators import method_decorator
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from django.core.serializers import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie, csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Customers, Products
from .serializers import ProductsSerializer


def index(request):
    # user=users.objects.all()
    # nUser = {
    #     "user": user
    # }
    return render(request, "dxlApp\\home.html")


# Create your views here.
@csrf_protect
def base(request):
    return render(request, "dxlApp\\base.html")


def registration(request):
    return render(request, "dxlApp\\userReg.html")


def login(request):
    return render(request, "dxlApp\\login.html")


def save_customer(request):
    if request.method == 'POST':
        forminput = request.POST
        newmail = forminput['email']
        new_password = make_password(forminput['password'])
        try:
            querydb = Customers.objects.get(email=newmail)
            if querydb is not None:
                myDiv = {"mess": "The E-Mail already exists!"}
                return render(request, "dxlApp\\userReg.html", myDiv)
        except Customers.DoesNotExist:
            newuser = Customers(last_name=forminput['last_name'], first_name=forminput['first_name'],
                                email=forminput['email'], phone=forminput['phone'],
                                country=forminput['country'], state=forminput['state'],
                                street_add=forminput['street_add'], dob=forminput['dob'],
                                password=new_password)
            newuser.save()
            return render(request, "dxlApp\\userReg.html", {"messg": "Your Registration was Successful!"})


def prod_admin(request):
    return render(request, "dxlApp\\prod_admin.html")


def prod_update(request):
    if request.method == 'POST':
        form_input = request.POST
        password = form_input['adminpass']
        if password == "11jan2001":
            return render(request, "dxlApp\\prod_update.html")
        else:
            return render(request, "dxlApp\\prod_admin.html", {"login_error": "Your Password is wrong!"})


# @method_decorator(csrf_exempt, name='dispatch')
class AddNewProductViews(APIView):
    def post(self, request):
        serializer = ProductsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class GetProductsViews(APIView):
    def get(self, request, id=None):
        items = Products.objects.all()
        serializer = ProductsSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
