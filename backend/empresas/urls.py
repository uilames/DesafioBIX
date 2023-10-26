from django.urls import path
from . import views

urlpatterns = [
    path('empresas/', views.ListaEmpresas.as_view(), name='lista-empresas'),
    path('funcionario/linha-do-tempo/<int:funcionario_id>/', views.LinhaDoTempo.as_view(), name='linha-do-tempo'),
    #
    path('api/empresas/', views.ListaEmpresas.as_view(), name='lista-empresas'),
    path('api/funcionarios/', views.ListaFuncionarios.as_view(), name='lista-funcionarios'),
    
]
