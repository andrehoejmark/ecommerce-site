from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'title', 'price', 'desc', 'image')


        def create(self, validated_data, *args, **kwargs):

            product_name = validated_data.pop('name')
            price = validated_data.pop('price')
            desc = validated_data.pop('desc')

            product_instance = Product.objects.create(name=product_name, price=price, desc=desc)

            return product_instance




class GetProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'desc', 'image']

