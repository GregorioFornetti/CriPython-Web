
from collections import defaultdict

LIMITE_UNICODE = 734

def verificar_chave_cifra_de_cesar(lista_chaves):
    chave = lista_chaves[0]

    try:
        chave = int(chave)
        if chave >= 0 and chave < 100000:
            return True  # Chave válida
        return 'Chave negativa ou muito grande.'
    except:
        return 'Chave não numérica.'  # Chave não é numérica

    

def verificar_chaves_subst_simples_apenas_letras(lista_chaves):
    chave_1 = lista_chaves[0]
    chave_2 = lista_chaves[1]

    tamanho_chaves = len(chave_1)
    if tamanho_chaves != len(chave_2):
        return 'Tamanho das chaves são diferentes uma da outra.'
    
    if tamanho_chaves > 30:
        return 'Tamanho de chaves inválidos.'
    
    chave_1 = chave_1.lower()
    chave_2 = chave_2.lower()

    contagem_letras_chave_1 = defaultdict(int)
    contagem_letras_chave_2 = defaultdict(int)
    for i in range(tamanho_chaves):
        if not verificar_letra_valida(chave_1[i]) or not verificar_letra_valida(chave_2[i]):
            return 'Caracteres especiais (inválidos) dentro de uma das chaves.'
        
        contagem_letras_chave_1[chave_1[i]] += 1
        contagem_letras_chave_2[chave_2[i]] += 1
        if contagem_letras_chave_1[chave_1[i]] > 1 or contagem_letras_chave_2[chave_2[i]] > 1:
            return 'Caracteres repetidos dentro de uma das chaves.'
    
    return verificar_padroes_de_chaves_subst_simples(chave_1, chave_2, tamanho_chaves)
    
def verificar_letra_valida(letra):
    # Verificar se a letra/caractere atual é uma letra do alfabeto (e não um caractere especial)
    unicode_letra = ord(letra)
    if unicode_letra <= 64 or unicode_letra >= 123:
        return False
    if unicode_letra >= 91 and unicode_letra <= 96:
        return False
    return True

def verificar_chaves_subst_simples_varios_caracteres(lista_chaves):
    chave_1 = lista_chaves[0]
    chave_2 = lista_chaves[1]

    tamanho_chaves = len(chave_1)
    if tamanho_chaves != len(chave_2):
        return 'Tamanho das chaves são diferentes uma da outra.'
    
    if tamanho_chaves > 700:
        return 'Tamanho de chaves inválidos.'

    contagem_letras_chave_1 = defaultdict(int)
    contagem_letras_chave_2 = defaultdict(int)
    for i in range(tamanho_chaves):
        if ord(chave_1[i]) > LIMITE_UNICODE or ord(chave_2[i]) > LIMITE_UNICODE:
            return 'Caractere acima do limite estabelecido (734 da tabela unicode).'
        
        contagem_letras_chave_1[chave_1[i]] += 1
        contagem_letras_chave_2[chave_2[i]] += 1
        if contagem_letras_chave_1[chave_1[i]] > 1 or contagem_letras_chave_2[chave_2[i]] > 1:
            return 'Caracteres repetidos dentro de uma das chaves.'
    
    return verificar_padroes_de_chaves_subst_simples(chave_1, chave_2, tamanho_chaves)

def verificar_padroes_de_chaves_subst_simples(chave_1, chave_2, tamanho_chaves):
    if verificar_chaves_tot_iguais_subst_simples(chave_1, chave_2, tamanho_chaves):
        return True
    if verificar_chaves_tot_diferentes_subst_simples(chave_1, chave_2, tamanho_chaves):
        return True
    return 'Chaves não estão dentro de nenhum dos padrões (totalmente iguais ou totalmente diferentes).'

def verificar_chaves_tot_iguais_subst_simples(chave_1, chave_2, tamanho_chaves):
    for i in range(tamanho_chaves):
        if (chave_1[i] not in chave_2):
            return False
    return True

def verificar_chaves_tot_diferentes_subst_simples(chave_1, chave_2, tamanho_chaves):
    for i in range(tamanho_chaves):
        if (chave_1[i] in chave_2):
            return False
    return True



def verificar_chave_cifra_de_vigenere_apenas_letras(lista_chaves):
    chave = lista_chaves[0].replace(' ', '')

    if len(chave) > 10000:
        return 'Tamanho da chave passou do limite.'
    
    for letra in chave:
        if not verificar_letra_valida(letra):
            return 'Caracteres inválidos na chave.'
    
    return True

def verificar_chave_cifra_de_vigenere_varios_caracteres(lista_chaves):
    chave = lista_chaves[0]

    if len(chave) > 10000:
        return 'Tamanho da chave passou do limite.'
    for caractere in chave:
        if ord(caractere) > LIMITE_UNICODE:
            return 'Caractere acima do limite estabelecido (734 da tabela unicode).'
    return True
