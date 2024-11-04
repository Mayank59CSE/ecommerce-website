from django.urls import path
from .views import index  # Ensure index view is imported from views.py

urlpatterns = [
    path('', index, name='index'),  # Yeh index view ko root URL se connect karega
]
