
var JSON_dados_usuario

function aplicar_novas_configs_usuario() {
    // Enviar as novas informações digitadas pelo usuário para o servidor
    let csrftoken = getCookie('csrftoken');

    fetch('/update_user_infos', {
        method: 'POST',
        body: JSON.stringify({
            'usuario' : document.querySelector('#usuario').value,
            'e-mail' :  document.querySelector('#e-mail').value,

             // Padrao de nomenclatura: nome_da_chave_nome_da_cifra_nome_do_modo
            'chave_cesar_apenas_letras': document.querySelector('#chave_cesar_apenas_letras').value,
            'chave_cesar_varios_caracteres': document.querySelector('#chave_cesar_varios_caracteres').value,

            'msg_comum_subst_simples_apenas_letras': document.querySelector('#msg_comum_subst_simples_apenas_letras').value,
            'msg_encript_subst_simples_apenas_letras': document.querySelector('#msg_encript_subst_simples_apenas_letras').value,
            'msg_comum_subst_simples_varios_caracteres': document.querySelector('#msg_comum_subst_simples_varios_caracteres').value,
            'msg_encript_subst_simples_varios_caracteres': document.querySelector('#msg_encript_subst_simples_varios_caracteres').value,

            'chave_vigenere_apenas_letras': document.querySelector('#chave_vigenere_apenas_letras').value,
            'chave_vigenere_varios_caracteres': document.querySelector('#chave_vigenere_varios_caracteres').value
        }),
        headers: {'X-CSRFToken': csrftoken}
    })
    .then(response => response.text())
    .then(data => {
        alert(data)  // Mostrar ao usuário o registro das novas informações enviadas (se elas foram salvas com sucesso ou não).
        coletar_infos_perfil()
        .then(() => {
            let botao_login = document.querySelector('#botao-login');
            if (botao_login)
                botao_login.innerHTML = JSON_dados_usuario['usuario']
        })
    })
}

function logout() {
    fetch('/logout')
    .then(response => response.text())
    .then(data => {
        if (data == 'Logout realizado com sucesso !') {
            let botao_login = document.querySelector('#botao-login');
            if (botao_login) {
                botao_login.innerHTML = 'login';  // Atualizar o botão de login para ter o nome "login" (ao invés do nome do usuário)
                botao_login.onclick = carregar_pagina_login;  // Ao invés de carregar a pagina de perfil, carregar a pagina de login,
            }
            document.querySelector('#user-status').innerText = '' // Marcar que o usuário não está logado
            
            JSON_dados_usuario = ''
            carregar_home_page()
        }
        alert(data)
    })
}

function coletar_infos_perfil() {
    let csrftoken = getCookie('csrftoken')

    return fetch('/get_user_infos', {
        method: 'GET',
        headers: {'X-CSRFToken': csrftoken}
    })
    .then(response => response.json())
    .then(response_JSON => {
        if (Object.keys(response_JSON).length > 0) {
            JSON_dados_usuario = response_JSON
            return
        }
    })
}