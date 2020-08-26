from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
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


def homepage_view(request):
    return JsonResponse({
    'Introdução': '''
    Cripythongraphy-web é a versão web de um projeto sobre criptografia que tem o intuito de traduzir ou encriptar mensagens.
    O usuário que estiver usando o programa tem liberdade para escolher uma das cifras disponíveis e utiliza-la
    para encriptar/traduzir um texto, podendo ver na prática como que funcionam algumas cifras. Além disso,
    nesse programa existem os utilitários, que são implementações que tentam desvendar uma mensagem encriptada
    sem a sua chave de tradução. E para finalizar, outro objetivo desse projeto é explicar um pouco sobre o assunto
    cifras de criptografia.''',

    'Adicionais da versão web':'''
    Na versão web, diferente da versão desktop, é possível cadastrar uma conta para poder gravar alguns dados, como por exemplo
    chaves padrões (que podem ser utilizadas para encriptar ou traduzir mensagens sem precisar escrever novamente a chave), temas
    e idiomas. Ao acessar novamente sua conta, ou acessar em um computador diferente, seus dados continuarão salvos !''',

    'Outras informações': '''
    Caso tenha interesse em conhecer a versão aplicativo desktop do Cripythongraphy, <a href='https://github.com/GregorioFornetti/Cripythongrafia'>
    Clique aqui</a> para acessar o repositório do github desse arquivo
    '''})


def create_JSON_unicode(limite):
    indice_atual = 0
    dicionario_unicode_printavel = {}
    for valor_unicode in range(32, limite + 1):
        caractere_unicode = chr(valor_unicode)
        if caractere_unicode.isprintable():
            dicionario_unicode_printavel[indice_atual] = caractere_unicode
            if caractere_unicode in ('1', '2', '3', '4', '5', '6', '7', '8', '9', '0'):  
                # Conflito entre 0 string e 0 int no unicode. Solução: colocar str depois do numeros string.
                dicionario_unicode_printavel[caractere_unicode + 'str'] = indice_atual
            else:
                dicionario_unicode_printavel[caractere_unicode] = indice_atual
            indice_atual += 1
    return dicionario_unicode_printavel

json_unicode_padrao = create_JSON_unicode(734)

def return_JSON_unicode_padrao(request, limite):
    return JsonResponse(json_unicode_padrao)

