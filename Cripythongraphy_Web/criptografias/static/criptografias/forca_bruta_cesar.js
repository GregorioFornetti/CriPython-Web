
function forca_bruta_cesar_apenas_letras(mensagem) {
    if (!mensagem)
        return false
    lista_mensagens = [];

    for (let chave = 1; chave <= TAMANHO_ALFABETO; chave++) {
        lista_mensagens.push(traduzir_cesar_apenas_letras(chave, mensagem));
    }

    return lista_mensagens;
}

function forca_bruta_cesar_varios_caracteres(mensagem) {
    if (!mensagem)
        return false
    let lista_mensagens = [];

    for (let chave = 1; chave <= tamanho_unicode_limitado; chave++) {
        lista_mensagens.push(traduzir_cesar_varios_caracteres(chave, mensagem));
    }

    return lista_mensagens;
}
