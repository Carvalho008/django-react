from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Produto
from .serializers import ProdutoSerializer

class ProdutoGet(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        return Produto.objects.all()
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)