
function retornar_json_chaves_caracteres_diferentes(chave_1, chave_2, tamanho_chave) {
    let json_convercoes = {}
    const array_chave_2 = chave_2.split('');

    for (let i = 0; i < tamanho_chave; i++) {
        if (chave_1[i] in array_chave_2) {
            return false;
        }
        json_convercoes[chave_1[i]] = chave_2[i];
        json_convercoes[chave_2[i]] = chave_1[i];
    }
    return json_convercoes;
}

function retornar_json_chaves_mesmos_caracteres(chave_1, chave_2, tamanho_chave) {
    let json_convercoes = {};
    let chave_1_ordenada = chave_1.split('').sort().join('');
    let chave_2_ordenada = chave_2.split('').sort().join('');

    for (let i = 0; i < tamanho_chave; i++) {
        if (chave_1_ordenada[i] != chave_2_ordenada) {
            return false;
        }
        json_convercoes[chave_1[i]] = chave_2[i];
    }
    return json_convercoes;
}

function verificar_chaves_subst_simples(chave_1, chave_2, apenas_letras) {
    const tamanho_chave_1 = chave_1.length;
    const tamanho_chave_2 = chave_2.length;

    if (chave_1.length != chave_2.length) {
        return false;
    }
    retornar_json_chaves_mesmos_caracteres(chave_1, chave_2, tamanho_chave_1);
    if (apenas_letras) {
        for (let i = 0; i < chave_1.length; i++) {
            let ascii_chave_1 = chave_1.charCodeAt(i);
            let ascii_chave_2 = chave_2.charCodeAt(i);

            if (ascii_chave_1 < 65 || (ascii_chave_1 > 90 && ascii_chave_1 < 97) || ascii_chave_1 > 122) {
                return false;
            }
            if (ascii_chave_2 < 65 || (ascii_chave_2 > 90 && ascii_chave_2 < 97) || ascii_chave_2 > 122) {
                return false;
            }
        }
    }
    let chave_JSON = retornar_json_chaves_mesmos_caracteres(chave_1, chave_2, tamanho_chave_1);
    if (!chave_JSON) {
        return retornar_json_chaves_caracteres_diferentes(chave_1, chave_2, tamanho_chave_1);
    }
}