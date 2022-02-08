from django.urls import path
from .views import ProductsListView, ProductsCreateView


urlpatterns = [
    path('', ProductsListView.as_view()),
    path('create', ProductsCreateView.as_view())
]