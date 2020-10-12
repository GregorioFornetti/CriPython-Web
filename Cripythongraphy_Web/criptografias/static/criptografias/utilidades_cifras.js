
let JSON_unicode_limitado = {};
let tamanho_unicode_limitado;
const LISTA_DIGITOS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const COMECO_UNICODE_MAIUSC = 65;
const FIM_UNICODE_MAIUSC = 90;
const COMECO_UNICODE_MINUSC = 97;
const FIM_UNICODE_MINUSC = 122;
const LIMITE_UNICODE = 734;
const TAMANHO_ALFABETO = 26;
const ERRO_MENSAGEM = "Mensagem inválida !"
const ERRO_CHAVE = "Chave inválida !"

/*
function collect_unicode_json(limite) {
    return fetch(`/unicode/${limite}`)
    .then(response => response.json())
    .then((JSON_unicode_recebido) => {
        return JSON_unicode_recebido;
    })
}


collect_unicode_json(LIMITE_UNICODE).then((JSON_unicode) => {
    JSON_unicode_limitado = JSON_unicode;
    console.log(JSON_unicode_limitado)
    tamanho_unicode_limitado = Object.keys(JSON_unicode_limitado).length / 2;
    for (chave in JSON_unicode_limitado) {
        if (JSON_unicode_limitado[chave] === JSON_unicode_limitado2[chave]) {
            console.log('certo')
        } else {
            console.log('deu errado')
        }
    }
    console.log(JSON_unicode_limitado === JSON_unicode_limitado2)
});
*/

let cod_atual = 0
for (let i = 32; i <= 734; i++) {
    if ((i >= 127 && i <= 160) || i === 173)  // Caracteres inválidos (não imprimiveis)
        continue
    
    let caractere_atual = String.fromCharCode(i)
    JSON_unicode_limitado[cod_atual] = caractere_atual
    if (caractere_atual in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])  
        /* Caso o caractere trocado atual seja um número, colocar um "str" depois dele 
        para que não ocorra conflito com as chaves do tipo int (JSON não faz diferenciação de chaves int de chaves str) */
        caractere_atual += 'str'
    JSON_unicode_limitado[caractere_atual] = cod_atual
    cod_atual++
}

tamanho_unicode_limitado = Object.keys(JSON_unicode_limitado).length / 2;

function eh_digito(caractere) {
    return LISTA_DIGITOS.indexOf(caractere) !== -1
}

function adicionar_identificador_str(caractere) {
    // Caso o caractere atual ser um digito em forma de string, colocar um "str" depois para identifica-lo com string
    if (eh_digito(caractere))
        return caractere + 'str'
    return caractere
}