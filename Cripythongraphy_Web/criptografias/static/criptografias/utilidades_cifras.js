
let JSON_unicode_limitado;
let tamanho_unicode_limitado;
const COMECO_UNICODE_MAIUSC = 65;
const FIM_UNICODE_MAIUSC = 90;
const COMECO_UNICODE_MINUSC = 97;
const FIM_UNICODE_MINUSC = 122;
const LIMITE_UNICODE = 734;

function collect_unicode_json(limite) {
    return fetch(`/unicode/${limite}`)
    .then(response => response.json())
    .then((JSON_unicode_recebido) => {
        console.log(JSON_unicode_recebido)
        return JSON_unicode_recebido;
    })
}

collect_unicode_json(LIMITE_UNICODE).then((JSON_unicode) => {
    JSON_unicode_limitado = JSON_unicode;
    tamanho_unicode_limitado = Object.keys(JSON_unicode_limitado).length / 2;
});
