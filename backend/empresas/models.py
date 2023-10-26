from django.db import models
from django.contrib.auth.models import User

class Empresa(models.Model):
    nome = models.CharField(max_length=100)
    imagem = models.ImageField(upload_to='empresas/logos/', null=True, blank=True)

    def __str__(self):
        return self.nome

class Funcionario(models.Model):
    nome = models.CharField(max_length=100)
    imagem = models.ImageField(upload_to='funcionarios/fotos/', null=True, blank=True)
    data_entrada = models.DateField()
    data_saida = models.DateField(null=True, blank=True)
    ferias = models.DateField(null=True, blank=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name='funcionarios')
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.nome
