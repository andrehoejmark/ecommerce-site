from django.urls import path
from .views import ProductsListView, ProductsCreateView, GetProducts


urlpatterns = [
    path('', GetProducts.as_view()),
    path('create', ProductsCreateView.as_view())
]