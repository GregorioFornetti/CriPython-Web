from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.db import IntegrityError
import json

# Create your views here.
@ensure_csrf_cookie
def index(request):
    return render(request, 'criptografias/index.html')

@ensure_csrf_cookie
def login_view(request):
    if request.method == 'POST':
        dados = json.loads(request.body)

        nome_usuario = dados.get('nome_usuario')
        senha = dados.get('senha')
        if not senha or not nome_usuario:
            return HttpResponse('erro: todos os campos precisam ser preenchidos', status=400)
        usuario = authenticate(username=nome_usuario, password=senha)
        if usuario:
            login(request, usuario)
            return HttpResponse('login realizado com sucesso', status=200)
        else:
            return HttpResponse('erro: usuario ou senha inválido', status=400)

@ensure_csrf_cookie
def register_view(request):
    if request.method == 'POST':
        dados = json.loads(request.body)

        senha = dados.get('senha')
        confirmar_senha = dados.get('confirmar_senha')
        nome_usuario = dados.get('nome_usuario')
        e_mail = dados.get('e_mail')
        if not senha or not confirmar_senha or not nome_usuario or not e_mail:
            return HttpResponse('erro: todos os campos precisam ser preenchidos', status=400)
        if senha != confirmar_senha:
            return HttpResponse('erro: senhas não batem', status=400)
        try:
            usuario = User.objects.create_user(nome_usuario, e_mail, senha)
            usuario.save()
        except IntegrityError:
            return HttpResponse('erro: nome de usuário já utilizado', status=400)
        return HttpResponse('usuário cadastrado com sucesso', status=200)

def logout_view(request):
    logout(request)
