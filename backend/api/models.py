from django.db import models

class Produto(models.Model):
    nome = models.CharField(name='Nome', max_length=100)
    descricao = models.TextField(name='Descricao', max_length=50)
    preco = models.DecimalField(name='Preco', max_digits=10, decimal_places=2, default=0)
    
    def __str__(self):
        return self.Nome