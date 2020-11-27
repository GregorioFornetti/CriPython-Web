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

string_info_final = ''

@ensure_csrf_cookie
def update_user_infos(request):
    # Salvará as novas chaves padrões, e-mail e usuario cadastrados.
    global string_info_final
    string_info_final = ''

    if request.method == 'POST' and request.user.is_authenticated:
        dados = json.loads(request.body)
        usuario = User.objects.get(pk=request.user.id)


        # Salvar nova chave padrão da Cifra de César - Apenas letras, caso nova chave cadastrada seja válida:
        lista_chaves_novas = [dados.get('cesar_apenas_letras')]
        lista_chaves_antigas = [usuario.chave_cesar_apenas_letras]

        chave_valida = verificar_chaves('Cifra de César - Apenas letras', lista_chaves_novas, lista_chaves_antigas, verificar_chave_cifra_de_cesar)
        if chave_valida:
            usuario.chave_cesar_apenas_letras = dados.get('cesar_apenas_letras')
        # Salvar nova chave padrão da Cifra de César - Vários caracteres:

        lista_chaves_novas = [dados.get('cesar_varios_caracteres')]
        lista_chaves_antigas = [usuario.chave_cesar_varios_caracteres]

        chave_valida = verificar_chaves('Cifra de César - Vários caracteres', lista_chaves_novas, lista_chaves_antigas, verificar_chave_cifra_de_cesar)
        if chave_valida:
            usuario.chave_cesar_varios_caracteres = dados.get('cesar_varios_caracteres')
        
        # Salvar nova chave padrão da Cifra de Subst. Simples - Apenas letras:
        lista_chaves_novas = [dados.get('msg_comum_apenas_letras'), dados.get('msg_encript_apenas_letras')]
        lista_chaves_antigas = [usuario.msg_comum_subst_simples_apenas_letras, usuario.msg_encript_subst_simples_apenas_letras]

        chave_valida = verificar_chaves('Substituição simples - Apenas letras', lista_chaves_novas, lista_chaves_antigas, verificar_chaves_subst_simples_apenas_letras)
        if chave_valida:
            usuario.msg_comum_subst_simples_apenas_letras = dados.get('msg_comum_apenas_letras')
            usuario.msg_encript_subst_simples_apenas_letras = dados.get('msg_encript_apenas_letras')
        
        # Salvar nova chave padrão da Cifra de Subst. Simples - Vários caracteres:
        lista_chaves_novas = [dados.get('msg_comum_varios_caracteres'), dados.get('msg_encript_varios_caracteres')]
        lista_chaves_antigas = [usuario.msg_comum_subst_simples_varios_caracteres, usuario.msg_encript_subst_simples_varios_caracteres]

        chave_valida = verificar_chaves('Substituição simples - Vários caracteres', lista_chaves_novas, lista_chaves_antigas, verificar_chaves_subst_simples_varios_caracteres)
        if chave_valida:
            usuario.msg_comum_subst_simples_varios_caracteres = dados.get('msg_comum_varios_caracteres')
            usuario.msg_encript_subst_simples_varios_caracteres = dados.get('msg_encript_varios_caracteres')
        
        # Salvar nova chave padrão da Cifra de Vigenère - Apenas letras:
        lista_chaves_novas = [dados.get('vigenere_apenas_letras')]
        lista_chaves_antigas = [usuario.chave_vigenere_apenas_letras]

        chave_valida = verificar_chaves('Cifra de Vigenère - Apenas letras', lista_chaves_novas, lista_chaves_antigas, verificar_chave_cifra_de_vigenere_apenas_letras)
        if chave_valida:
            usuario.chave_vigenere_apenas_letras = dados.get('vigenere_apenas_letras')
        
        # Salvar nova chave padrão da Cifra de Vigenère - Vários caracteres:
        lista_chaves_novas = [dados.get('vigenere_varios_caracteres')]
        lista_chaves_antigas = [usuario.chave_vigenere_varios_caracteres]

        chave_valida = verificar_chaves('Cifra de Vigenère - Vários caracteres', lista_chaves_novas, lista_chaves_antigas,verificar_chave_cifra_de_vigenere_varios_caracteres)
        if chave_valida:
            usuario.chave_vigenere_varios_caracteres = dados.get('vigenere_varios_caracteres')

        usuario.save()
        if string_info_final:
            return HttpResponse(string_info_final, status=200)
        else:
            return HttpResponse('Nenhuma configuração foi trocada !', status=200)
    
    return HttpResponse('Erro: usuario não logado ou método inválido', status='400')

def verificar_chaves(msg_cifra, lista_chaves_novas, lista_chaves_antigas, verificar_nova_chave):
    # Verifica se a chave fornecida é valida (retornando True). Atualiza, caso necessário, a mensagem final (string info final).
    global string_info_final
    msg_sucesso = 'Chave salva com sucesso!'
    chaves_diferentes = False

    for i in range(len(lista_chaves_antigas)):  # Verificar se alguma da chaves novas é diferente de sua chave antiga.
        if lista_chaves_antigas[i] != lista_chaves_novas[i]:
            chaves_diferentes = True
            break

    if chaves_diferentes:
        resposta_verific = verificar_nova_chave(lista_chaves_novas)
        if resposta_verific == True:  # Chave é válida, adicionar uma mensagem de sucesso à string final e retornar True
            string_info_final += f'{msg_cifra}: {msg_sucesso}\n'
            return True
        else:  # Chave inválida. Adicionar uma mensagem de falha e retornar False, não salvando a nova chave.
            string_info_final += f'{msg_cifra}: ERRO: {resposta_verific}\n'
    return False  # Caso não tenha nenhuma chave diferente, retorna False sem mudar string final.
