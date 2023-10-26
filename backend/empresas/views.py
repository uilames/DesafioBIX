from django.shortcuts import render
from rest_framework import generics
from .models import Empresa, Funcionario
from .serializers import EmpresaSerializer, FuncionarioSerializer

class ListaEmpresas(generics.ListCreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class ListaFuncionarios(generics.ListCreateAPIView):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

#Garantindo que apenas usuários com permissão possam realizar ações

from rest_framework import permissions

class CriaEmpresa(generics.CreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    permission_classes = [permissions.IsAdminUser]

    
#Linha do tempo

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Funcionario
from .serializers import FuncionarioSerializer

class LinhaDoTempo(APIView):
    def get(self, request, funcionario_id):
        funcionario = Funcionario.objects.get(id=funcionario_id)
        serializer = FuncionarioSerializer(funcionario)
        return Response(serializer.data)
