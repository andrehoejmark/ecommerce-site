from django.urls import path
from .views import GetProducts


urlpatterns = [
    path('', GetProducts.as_view())
]