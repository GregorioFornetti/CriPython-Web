
function criar_binario_opcao(lista_names) {
    /* Aqui será criado uma string representando todas as escolhas radio feita pelo usuário.
    EX: Se o usuário escolher o primeiro radio de 2 radios, será 10 (primeiro ativo segundo inativo).
    Isso será feito para cada radio passado na lista de parametros (será procurado por "name"), e o retorno será a concatenação
    de todos os resultados coletados. */
    let string_info_final = ''

    for (let i = 0; i < lista_names.length; i++) {
        let lista_radios_atual = document.getElementsByName(lista_names[i])
        let string_bin_atual = ''

        for (let j = 0; j < lista_radios_atual.length; j++) {
            if (lista_radios_atual[j].checked) {
                string_bin_atual += lista_radios_atual[j].dataset.nome_opcao
            }
        }

        if (i !== lista_names.length - 1)
            string_info_final += string_bin_atual + '-'  // Adicionar "-" para separar os resultados e facilitar leitura.
        else
            string_info_final += string_bin_atual
    }
    return string_info_final
}

function executar_cifra_menu_padrao_atual(lista_names, JSON_funcoes, JSON_chaves) {
    /* Essa função pegará o codigo binario das opcoes radio passada na lista names e executará
    a função dentro de JSON_funcoes que tiver a chave igual ao codigo binário atual */
    let codigo_bin_radio = criar_binario_opcao(lista_names)
    console.log(JSON_chaves)
    if (JSON_chaves) {
        var lista_bin_radio = codigo_bin_radio.split('-')
        var lista_chaves = JSON_chaves[lista_bin_radio[lista_bin_radio.length - 1]]
    } else {
        var elementos_chaves = document.querySelectorAll('#chave')
        var lista_chaves = []
        for (let i = 0; i < elementos_chaves.length; i++)
            lista_chaves.push(elementos_chaves[i].value)
    }
    let mensagem = document.querySelector('#mensagem').value
    let quant_chaves = lista_chaves.length
    
    if (quant_chaves > 1) // Cifra/utilitário atual possui mais de 1 chave. Criar lista com essas chaves.
        var mensagem_resultado = JSON_funcoes[codigo_bin_radio](lista_chaves, mensagem)
    else if (quant_chaves === 1)  // Cifra/utilitário atual possui apenas 1 chave.
        var mensagem_resultado = JSON_funcoes[codigo_bin_radio](lista_chaves[0], mensagem)
    else  // Cifra/utilitario atual possui nenhuma chave. Mandar apenas a mensagem como parametro
        var mensagem_resultado = JSON_funcoes[codigo_bin_radio](mensagem)
    
    document.querySelector('#resultado').value = mensagem_resultado
}

/* Logo abaixo estão as funções para executar cada cifra. Para cada cifra, é passado os radios que serão procurados
e as funções que serão executadas dependendo do código radio.
EX de cód radio 10-10: 1° radio possui o primeiro radio ativo (encriptar) e 2° radio possui o primeiro radio ativo (encriptação)*/
function executar_menu_cifra_de_cesar(JSON_chaves) {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'encriptação-apenas letras': encriptar_cesar_apenas_letras,
                                      'encriptação-vários caracteres': encriptar_cesar_varios_caracteres,
                                      'tradução-apenas letras': traduzir_cesar_apenas_letras,
                                      'tradução-vários caracteres': traduzir_cesar_varios_caracteres},
                                      JSON_chaves)
}

function executar_menu_subst_simples(JSON_chaves) {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'encriptação-apenas letras': encriptar_subst_simples_apenas_letras,
                                      'encriptação-vários caracteres': encriptar_subst_simples_varios_caracteres,
                                      'tradução-apenas letras': traduzir_subst_simples_apenas_letras,
                                      'tradução-vários caracteres': traduzir_subst_simples_varios_caracteres},
                                      JSON_chaves)
}

function executar_menu_cifra_de_vigenere(JSON_chaves) {
    executar_cifra_menu_padrao_atual(['modo', 'opcoes'],
                                     {'encriptação-apenas letras': encriptar_vigenere_apenas_letras,
                                      'encriptação-vários caracteres': encriptar_vigenere_varios_caracteres,
                                      'tradução-apenas letras': traduzir_vigenere_apenas_letras,
                                      'tradução-vários caracteres': traduzir_vigenere_varios_caracteres},
                                      JSON_chaves)
}

function executar_menu_forca_bruta_cesar() {
    executar_cifra_menu_padrao_atual(['opcoes'],
                                     {'apenas letras': forca_bruta_cesar_apenas_letras,
                                      'vários caracteres': forca_bruta_cesar_varios_caracteres})
}

function executar_menu_adivinhador_cesar() {
    executar_cifra_menu_padrao_atual(['opcoes'],
                                     {'apenas letras': adivinha_cesar_apenas_letras,
                                      'vários caracteres': adivinha_cesar_varios_caracteres})
}