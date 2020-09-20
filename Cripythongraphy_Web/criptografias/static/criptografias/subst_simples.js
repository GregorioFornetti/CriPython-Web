
function verificar_chaves_subst_simples_e_criar_json(chave_1, chave_2, apenas_letras) {
    // Se não tiver erro na chave, retornará um json para a conversões de caracteres.
    const tamanho_chave_1 = chave_1.length;
    const tamanho_chave_2 = chave_2.length;

    if (tamanho_chave_1 != tamanho_chave_2) {
        return false;
    }
    retornar_json_chaves_mesmos_caracteres(chave_1, chave_2, tamanho_chave_1);
    if (apenas_letras) {
        for (let i = 0; i < chave_1.length; i++) {
            let ascii_chave_1 = chave_1.charCodeAt(i);
            let ascii_chave_2 = chave_2.charCodeAt(i);

            if (ascii_chave_1 < COMECO_UNICODE_MAIUSC|| (ascii_chave_1 > FIM_UNICODE_MAIUSC && ascii_chave_1 < COMECO_UNICODE_MINUSC) || ascii_chave_1 > FIM_UNICODE_MINUSC) {
                return false;
            }
            if (ascii_chave_2 < COMECO_UNICODE_MAIUSC || (ascii_chave_2 > FIM_UNICODE_MAIUSC && ascii_chave_2 < COMECO_UNICODE_MINUSC) || ascii_chave_2 > FIM_UNICODE_MINUSC) {
                return false;
            }
        }
    }
    let chave_JSON = retornar_json_chaves_mesmos_caracteres(chave_1, chave_2, tamanho_chave_1);
    if (!chave_JSON) {
        chave_JSON = retornar_json_chaves_caracteres_diferentes(chave_1, chave_2, tamanho_chave_1);
    }
    if (chave_JSON && apenas_letras) {
        for (chave in chave_JSON) {
            const VALOR_ATUAL = chave_JSON[chave];
            chave_JSON[chave.toUpperCase()] = VALOR_ATUAL.toUpperCase();
            chave_JSON[chave.toLowerCase()] = VALOR_ATUAL.toLowerCase(); 
        }
    }
    return chave_JSON;
}


function retornar_json_chaves_caracteres_diferentes(chave_1, chave_2, tamanho_chave) {
    /* Se as chaves forem totalmente distintas (todos caracteres são diferentes uma das outras), retornará um json
    com conversões dos caracteres da chave_1 com os caracteres da chave_2, e vice-versa.*/
    let json_convercoes = {}
    const array_chave_2 = chave_2.split('');

    for (let i = 0; i < tamanho_chave; i++) {
        if (array_chave_2.indexOf(chave_1[i]) !== -1) {
            return false;
        }
        json_convercoes[chave_1[i]] = chave_2[i];
        json_convercoes[chave_2[i]] = chave_1[i];
    }
    return json_convercoes;
}


function retornar_json_chaves_mesmos_caracteres(chave_1, chave_2, tamanho_chave) {
    /* Se as chaves tiverem todos os mesmos caracteres (independente da ordem), retornará um json
    com conversões dos caracteres da chave_1 com os caracteres da chave_2.*/
    let json_convercoes = {};
    let chave_1_ordenada = chave_1.split('').sort().join('');
    let chave_2_ordenada = chave_2.split('').sort().join('');

    for (let i = 0; i < tamanho_chave; i++) {
        if (chave_1_ordenada[i] !== chave_2_ordenada[i]) {
            return false;
        }
        json_convercoes[chave_1[i]] = chave_2[i];
    }
    return json_convercoes;
}


function subst_simples_apenas_letras(chave_1, chave_2, mensagem) {
    if (!mensagem) {
        return "Erro mensagem !"
    }
    let json_convercoes = verificar_chaves_subst_simples_e_criar_json(chave_1, chave_2, true);
    if (!json_convercoes) {
        return "Erro chaves !"
    }
    return subst_simples_criar_nova_mensagem(json_convercoes, mensagem);
}


function subst_simples_varios_caracteres(chave_1, chave_2, mensagem) {  // Codigo parecido (pode ser que dê para simplificar dps).
    if (!mensagem) {
        return "Erro mensagem !"
    }
    let json_convercoes = verificar_chaves_subst_simples_e_criar_json(chave_1, chave_2);
    if (!json_convercoes) {
        return "Erro chaves !"
    }
    return subst_simples_criar_nova_mensagem(json_convercoes, mensagem);
}


function subst_simples_criar_nova_mensagem(json_convercoes, mensagem) {
    let nova_mensagem = '';
    for (indice_caractere in mensagem) {
        let caractere_convertido = json_convercoes[mensagem[indice_caractere]];
        if (caractere_convertido) {
            nova_mensagem += caractere_convertido;
        } else {
            nova_mensagem += mensagem[indice_caractere];
        }
    }
    return nova_mensagem;
}