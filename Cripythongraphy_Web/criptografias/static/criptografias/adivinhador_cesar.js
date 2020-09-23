
const JSON_FREQ_ALFA_BR = {'a':14.63, 'e':12.57, 'o':10.73, 's':7.81, 'r':6.53, 'i':6.18, 'n':5.05, 'd':4.99,
                           'm':4.74, 'u':4.63, 't':4.34, 'c':3.88, 'l':2.78, 'p':2.52, 'v':1.67, 'g':1.3,
                           'h':1.28, 'q':1.20, 'b':1.04, 'f':1.02, 'z':0.47, 'j':0.4, 'x':0.21, 'k':0.02,
                           'y':0.01, 'w':0.01}

function adivinha_cesar_apenas_letras(mensagem) {
    let melhor_pontuacao;
    let melhor_texto;
    for (let chave = 1; chave <= TAMANHO_ALFABETO; chave++) {
        let mensagem_traduzida_atual = traduzir_cesar_apenas_letras(chave, mensagem).toLowerCase();
        let pontuacao_atual = calcular_pontuacao_texto(mensagem_traduzida_atual);
        if (chave == 1 || pontuacao_atual < melhor_pontuacao) {
            melhor_texto = mensagem_traduzida_atual;
            melhor_pontuacao = pontuacao_atual;
        }
    }
    return melhor_texto;
}

function adivinha_cesar_varios_caracteres(mensagem) {
    let melhor_pontuacao;
    let melhor_texto;
    for (let chave = 1; chave <= tamanho_unicode_limitado; chave++) {
        let mensagem_traduzida_atual = traduzir_cesar_varios_caracteres(chave, mensagem).toLowerCase();
        let pontuacao_atual = calcular_pontuacao_texto(mensagem_traduzida_atual);
        if (chave == 1 || pontuacao_atual < melhor_pontuacao) {
            melhor_texto = mensagem_traduzida_atual;
            melhor_pontuacao = pontuacao_atual;
        }
    }
    return melhor_texto;
}

function calcular_pontuacao_texto(texto) {
    let JSON_pontuacao_letras = {'a':0, 'b':0, 'c':0, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':0, 'j':0, 'k':0, 'l':0,
                                 'm':0, 'n':0, 'o':0, 'p':0, 'q':0, 'r':0, 's':0, 't':0, 'u':0, 'v':0, 'w':0, 'x':0, 'y':0, 'z':0}
    let pontuacao_atual = 0;
    let quant_caracteres_validos = 1;
    for (indice_caractere in texto) {
        let caractere_atual = texto[indice_caractere];
        if (caractere_atual in JSON_pontuacao_letras) {
            JSON_pontuacao_letras[caractere_atual]++;
            quant_caracteres_validos++;
        }
    }
    for (chave in JSON_pontuacao_letras) {
        pontuacao_atual += Math.abs((JSON_pontuacao_letras[chave] / quant_caracteres_validos * 100) - (JSON_FREQ_ALFA_BR[chave]));
    }
    return pontuacao_atual;
}
