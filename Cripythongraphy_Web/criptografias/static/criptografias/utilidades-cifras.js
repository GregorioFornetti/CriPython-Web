
let JSON_unicode_limitado;
let COMECO_UNICODE_MAIUSC = 65;
let FIM_UNICODE_MAIUSC = 90;
let COMECO_UNICODE_MINUSC = 97;
let FIM_UNICODE_MINUSC = 122;

function collect_unicode_json(limite) {
    return fetch(`/unicode/${limite}`)
    .then(response => response.json())
    .then(JSON_unicode_recebido => JSON_unicode_recebido)
}

collect_unicode_json(733).then((JSON_unicode) => {
    JSON_unicode_limitado = JSON_unicode;
    console.log(JSON_unicode_limitado);
});
