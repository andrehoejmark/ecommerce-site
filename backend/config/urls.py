from django.contrib import admin
from django.urls import path, include
from .views import ping, csrf

urlpatterns = [
    path('admin/', admin.site.urls),
    path('csrf/', csrf),
    path('ping/', ping),
    path('store/', include("store.urls")),
    path('payments/', include("payments.urls"))
]
