from rest_framework import serializers


class CheckoutSerializer(serializers.Serializer):

    productIDS = serializers.ListField(
        child=serializers.CharField()
    )

