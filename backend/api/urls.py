from django.urls import path
from . import views

urlpatterns = [
    path('produtos/', views.ProdutoGet.as_view(), name='lista-produtos'),
]