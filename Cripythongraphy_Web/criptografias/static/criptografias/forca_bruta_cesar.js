
function forca_bruta_cesar_apenas_letras(mensagem) {
    for (let chave = 1; chave <= TAMANHO_ALFABETO; chave++) {
        console.log(traduzir_cesar_apenas_letras(chave, mensagem));
    }
}

function forca_bruta_cesar_varios_caracteres(mensagem) {
    for (let chave = 1; chave <= tamanho_unicode_limitado; chave++) {
        console.log(traduzir_cesar_varios_caracteres(chave, mensagem))
    }
}