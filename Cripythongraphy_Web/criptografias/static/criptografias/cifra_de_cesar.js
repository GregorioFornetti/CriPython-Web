
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = () => {
        const chave = document.querySelector('#chave').value;
        const mensagem = document.querySelector('#mensagem').value;
        encriptar_cesar_apenas_letras(chave, mensagem)
        return false;
    }
})

function encriptar_cesar_apenas_letras(chave, mensagem) {
    chave = parseInt(chave) % 26 // Converter chave para inteiro e aplicar modulo de 26 (já que após 26, já deu uma volta).
    let mensagem_encriptada = '';
    if (!mensagem) {
        alert('erro mensagem');
    }
    if (chave) {
        for (indice_caractere in mensagem) {
            const valor_unicode_atual = mensagem.charCodeAt(indice_caractere);
            let valor_unicode_somado = valor_unicode_atual + chave;
            if (valor_unicode_atual >= COMECO_UNICODE_MAIUSC && valor_unicode_atual <= FIM_UNICODE_MAIUSC) {
                if (valor_unicode_somado > FIM_UNICODE_MAIUSC) {
                    valor_unicode_somado -= 26;
                }
                mensagem_encriptada += String.fromCharCode(valor_unicode_somado);
            } else if (valor_unicode_atual >= COMECO_UNICODE_MINUSC && valor_unicode_atual <= FIM_UNICODE_MINUSC) {
                if (valor_unicode_somado > FIM_UNICODE_MINUSC) {
                    valor_unicode_somado -= 26;
                }
                mensagem_encriptada += String.fromCharCode(valor_unicode_somado);
            } else {
                mensagem_encriptada += mensagem[indice_caractere];
            }
        }
        alert(mensagem_encriptada);
    } else {
        alert('erro chave');
    }
}

function encriptar_cesar_varios_caracteres(chave, mensagem) {
    chave = parseInt(chave) % LIMITE_UNICODE;
    let mensagem_encriptada = '';
    if (!mensagem) {
        alert('erro mensagem');
    }
    if (chave) {
        for (indice_caractere in mensagem) {
            const valor_unicode_atual = mensagem.charCodeAt(indice_caractere);
            if (valor_unicode_atual <= LIMITE_UNICODE) {
                let valor_unicode_somado = JSON_unicode_limitado[mensagem[indice_caractere]] + chave;
                console.log(valor_unicode_somado)
                if (valor_unicode_somado > tamanho_unicode_limitado) {
                    valor_unicode_somado -= tamanho_unicode_limitado;
                }
                mensagem_encriptada += JSON_unicode_limitado[valor_unicode_somado];
            } else {
                mensagem_encriptada += mensagem[indice_caractere];
            }
        }
    } else {
        alert('erro chave');
    }
    console.log(mensagem_encriptada);
}