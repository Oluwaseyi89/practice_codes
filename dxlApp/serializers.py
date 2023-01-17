from rest_framework import serializers
from .models import Products


class ProductsSerializer(serializers.ModelSerializer):
    prod_id = serializers.IntegerField()
    prod_name = serializers.CharField(max_length=200)
    prod_price = serializers.IntegerField()
    prod_img = serializers.URLField()
    stock_qty = serializers.IntegerField()

    class Meta:
        model = Products
        fields = '__all__'



