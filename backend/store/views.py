from .models import *

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import status
from .serializer import GetProductSerializer

# Not having request to add to cart on server side because it should rather be done in redux with react.

# Create your views here.
class GetProducts(APIView):

    authentication_classes = []
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        try:
            products = Product.objects.all()
        
            serializer = GetProductSerializer(products, many=True)

            data = serializer.data

            return Response({"items": data}, status = status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error": "internal error, + " + str(e)}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)
