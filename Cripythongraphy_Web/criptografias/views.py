from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import ensure_csrf_cookie
from .models import User
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError
import json
from .keys_validation import verificar_chaves_subst_simples_apenas_letras, verificar_chaves_subst_simples_varios_caracteres, verificar_chave_cifra_de_cesar, verificar_chave_cifra_de_vigenere_apenas_letras, verificar_chave_cifra_de_vigenere_varios_caracteres

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
        if len(nome_usuario) > 20:
            return HttpResponse('erro: nome de usuário muito grande (max: 20 caracteres)', status=400)
        if len(e_mail) > 500:
            return HttpResponse('erro: e-mail muito grande (max: 500 caracteres)', status=400)
        if senha != confirmar_senha:
            return HttpResponse('erro: senhas não batem', status=400)
        try:
            usuario = User.objects.create_user(nome_usuario, e_mail, senha)
            usuario.save()
        except IntegrityError:
            return HttpResponse('erro: nome de usuário já utilizado', status=400)
        return HttpResponse('usuário cadastrado com sucesso', status=200)

def logout_view(request):
    try:
        logout(request)
        return HttpResponse('Logout realizado com sucesso !', status=200)
    except:
        return HttpResponse('Falha ao realizar o logout', status=400)



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

@ensure_csrf_cookie
def update_user_infos(request):
    # Salvará as novas chaves padrões, e-mail e usuario cadastrados.
    if request.method == 'POST' and request.user.is_authenticated:
        dados = json.loads(request.body)
        usuario = User.objects.filter(pk=request.user.id)
        chaves_antigas = usuario[0].serialize()

        chaves_padroes = {
            "Cifra de César - Apenas letras": {  # Titulo da cifra - Modo da cifra
                "nome chaves" : ['chave_cesar_apenas_letras'],  # Lista com os nomes das chaves dessa cifra e modo.
                "verificar chave": verificar_chave_cifra_de_cesar  # Função que verifica se a chave nova passada é válida.
            },
            "Cifra de César - Vários caracteres": {
                "nome chaves" : ['chave_cesar_varios_caracteres'],
                "verificar chave": verificar_chave_cifra_de_cesar,
            },
            "Substituição simples - Apenas letras": {
                "nome chaves" : ['msg_comum_subst_simples_apenas_letras', 'msg_encript_subst_simples_apenas_letras'],
                "verificar chave": verificar_chaves_subst_simples_apenas_letras,
            },
            "Substituição simples - Vários caracteres": {
                "nome chaves" : ['msg_comum_subst_simples_varios_caracteres', 'msg_encript_subst_simples_varios_caracteres'],
                "verificar chave": verificar_chaves_subst_simples_varios_caracteres,
            },
            "Cifra de Vigenère - Apenas letras": {
                "nome chaves" : ['chave_vigenere_apenas_letras'],
                "verificar chave": verificar_chave_cifra_de_vigenere_apenas_letras,
            },
            "Cifra de Vigenère - Vários caracteres": {
                "nome chaves" : ['chave_vigenere_varios_caracteres'],
                "verificar chave": verificar_chave_cifra_de_vigenere_varios_caracteres,
            }
        }

        registros = verificar_e_salvar_chaves_padroes(chaves_padroes, chaves_antigas, dados, usuario)

        usuario[0].save()
        if registros:
            return HttpResponse(registros, status=200)
        else:
            return HttpResponse('Nenhuma configuração foi trocada !', status=200)
    
    return HttpResponse('Erro: usuario não logado ou método inválido', status='400')


def verificar_e_salvar_chaves_padroes(chaves_padroes, chaves_antigas, chaves_novas, usuario):
    registros = ''
    msg_sucesso = 'Chave salva com sucesso!'

    for titulo_cifra, chave_padrao in chaves_padroes.items():
        chaves_diferentes = False
        lista_chaves_novas = []

        for nome_chave in chave_padrao['nome chaves']:
            lista_chaves_novas.append(chaves_novas.get(nome_chave))
            # Verificar se uma chave nova (depende do nome da chave) é diferente de sua antiga.
            if str(chaves_antigas[nome_chave]) != str(chaves_novas.get(nome_chave)):
                chaves_diferentes = True
        
        if chaves_diferentes:  # A chave nova atual (mandada no input) é diferente da antiga
            resposta_verific = chave_padrao['verificar chave'](lista_chaves_novas)
            if resposta_verific == True:
                # Se a chave for valida, salva-la e colocar no registro que ela foi salva com sucesso.
                usuario.update(** criar_dicionario(chave_padrao['nome chaves'], lista_chaves_novas))
                registros += f'{titulo_cifra}: {msg_sucesso}\n'
            else:
                # A chave não é válida, não salva-la e colocar no registro que elá não foi salva (ERRO).
                registros += f'{titulo_cifra}: ERRO: {resposta_verific}\n'

    return registros

def criar_dicionario(lista_chaves, lista_valores):
    # Retorna um dicionario com chaves definidas na lista_chaves e valores na lista_valores
    dicionario = {}
    for chave, valor in zip(lista_chaves, lista_valores):
        dicionario[chave] = valor
    return dicionario


@ensure_csrf_cookie
def get_user_infos(request):
    if request.method == 'GET' and request.user.is_authenticated:
        return JsonResponse(User.objects.get(pk=request.user.id).serialize(), status=200)
    return JsonResponse({'erro': True}, status=400)