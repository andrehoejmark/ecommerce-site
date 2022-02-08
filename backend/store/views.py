from .models import *
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView,
    ListCreateAPIView
)

from .serializer import ProductSerializer


# Not having request to add to cart on server side because it should rather be done in redux with react.

# Create your views here.
class ProductsListView(ListAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductsCreateView(CreateAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


def cart(request):
    pass


# This will redirect to the payment system such as stripe
def checkout(request):
    pass