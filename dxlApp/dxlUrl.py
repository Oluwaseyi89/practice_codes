from django.urls import path
from .views import index, base, registration, login, save_customer, prod_admin, prod_update, \
    AddNewProductViews, GetProductsViews
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', index, name="index"),
    path('base/', base, name="base"),
    path('register/', registration, name="registration"),
    path('login/', login, name="login"),
    path('customers/', save_customer, name="save_customer"),
    path('prod_admin/', prod_admin, name="prod_admin"),
    path('prod_update/', prod_update, name="prod_update"),
    path('add_new_product/', AddNewProductViews.as_view(), name="add_new_product"),
    path('get_products/', GetProductsViews.as_view(), name="get_products"),
]