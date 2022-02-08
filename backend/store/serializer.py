from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('name', 'price', 'images')


        def create(self, validated_data, *args, **kwargs):

            product_name = validated_data.pop('name')
            price = validated_data.pop('price')

            product_instance = Product.objects.create(name=product_name, price=price)

            return product_instance