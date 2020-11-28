
function carregar_pagina_login() {
    limpar_containers()
    retorna_formulario_login()
}

function retorna_formulario_login() {
    // Criando container do login em geral (onde todas as informações sobre o cadastro ficarão)
    let container_login = document.createElement('div');
    container_login.className = 'container-cadastro';
    // Criando o formulário (inputs, labels e botões de submit)
    let formulario = document.createElement('form');
    formulario.style.paddingBottom = '12px';
    formulario.style.paddingRight = '35px';
    formulario = criar_input_e_label_logins(formulario, ['usuário', 'senha']);
    formulario = criar_botao_submit(formulario, 'acessar', '115px');
    formulario.onsubmit = () => {
        enviar_info_login()
        return false;
    }
    container_login.append(formulario);
    // Criando a primeira parte do texto de redirecionamento para pagina de registrar. 
    let texto_cadastrar_1 = document.createElement('h');
    texto_cadastrar_1.className = 'texto-cadastro-label';
    texto_cadastrar_1.style = 'color: white; margin-left: 115px;';
    texto_cadastrar_1.innerHTML = 'Ainda não é cadastrado ?';
    container_login.append(texto_cadastrar_1);
    container_login.append(document.createElement('br'))
    // Criando link para a pagina de cadastro.
    let link_pagina_cadastrar = document.createElement('a');
    link_pagina_cadastrar.className = 'texto-cadastro-label';
    link_pagina_cadastrar.style = 'margin-left: 115px; color: rgb(64, 112, 111); text-decoration: none; cursor: pointer;';
    link_pagina_cadastrar.addEventListener('click', () => {
        retorna_formulario_cadastro()
    })
    link_pagina_cadastrar.innerHTML = 'Clique aqui';
    container_login.append(link_pagina_cadastrar)
    // Criando a segunda parte do texto de redirecionamento para pagina de registrar. 
    let texto_cadastrar_2 = document.createElement('span');
    texto_cadastrar_2.className = 'texto-cadastro-label';
    texto_cadastrar_2.style.color = 'white';
    texto_cadastrar_2.innerHTML = 'e cadastre-se';
    container_login.append(texto_cadastrar_2);

    document.querySelector('#textos-pagina').append(container_login)
}

function retorna_formulario_cadastro() {
    let container_conteudo_pagina = document.querySelector('#textos-pagina');
    container_conteudo_pagina.innerHTML = '';
    // Criando container do cadastro em geral
    let container_cadastro = document.createElement('div');
    container_cadastro.className = 'container-cadastro';
    // Criando o formulário
    let formulario = document.createElement('form');
    formulario = criar_input_e_label_logins(formulario, ['usuário', 'e-mail', 'senha', 'repetir senha']);
    formulario = criar_botao_submit(formulario, 'cadastrar', '150px');
    formulario.onsubmit = () => {
        enviar_info_novo_registro()
        return false
    }

    container_cadastro.append(formulario)

    container_conteudo_pagina.append(container_cadastro);
}

function criar_input_e_label_logins(formulario, lista_labels) {
    // Adiciona ao formulario passado como parametro inputs com labels iguias aos passados pela lista. Também aplicará o margin-left no botao.
    lista_labels.forEach((nome_label) => {
        let input_container = document.createElement('div');
        input_container.className = 'container-input';

        let label = document.createElement('label');
        label.className = 'texto-cadastro-label';
        label.innerHTML = nome_label;
        input_container.append(label);

        let input_cadastro = document.createElement('input');
        if (nome_label.indexOf('senha') == -1) {
            input_cadastro.type = 'text';
        } else {
            input_cadastro.type = 'password';
        }
        input_cadastro.className = 'input-cadastro';
        input_cadastro.id = nome_label;
        input_container.append(input_cadastro);

        formulario.append(input_container);
    })
    return formulario
}

function criar_botao_submit(formulario, nome_botao, margin_left) {
    // Adiciona ao formulário o botao de submit com o nome passado com parâmetro.
    let botao_submit = document.createElement('input');
    botao_submit.type = 'submit';
    botao_submit.value = nome_botao;
    botao_submit.style.marginLeft = margin_left;
    botao_submit.className = 'submit-cadastro';
    formulario.append(botao_submit);
    return formulario
}


function enviar_info_novo_registro() {
    let nome_usuario = document.querySelector('#usuário').value;
    let e_mail = document.querySelector('#e-mail').value;
    let senha = document.querySelector('#senha').value;
    let confirmar_senha = document.getElementById('repetir senha').value;

    let csrftoken = getCookie('csrftoken');
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({
            'nome_usuario': nome_usuario,
            'e_mail': e_mail,
            'senha': senha,
            'confirmar_senha': confirmar_senha
        }),
        headers: {'X-CSRFToken': csrftoken}
    })
    .then(response => response.text())
    .then(data => {
        alert(data)
        if (data.indexOf('erro') === -1)  // Tudo deu certo com o formulario
            retorna_formulario_login()
    })
}

function enviar_info_login() {
    let nome_usuario = document.querySelector('#usuário').value;
    let senha = document.querySelector('#senha').value;

    let csrftoken = getCookie('csrftoken');
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            nome_usuario: nome_usuario,
            senha: senha,
        }),
        headers: {'X-CSRFToken': csrftoken}
    })
    .then(response => response.text())
    .then(data => {
        alert(data)
        if (data.indexOf('erro') === -1) {  // Tudo deu certo com o formulario
            // Substituir o botao login pelo botão usuario (botao que leva para a pagina de perfil)
            let botao_login = document.querySelector('#botao-login');
            if (botao_login) {
                botao_login.innerHTML = nome_usuario;
                botao_login.onclick = carregar_pagina_de_perfil;
            }
            document.querySelector('#user-status').innerText = nome_usuario  // Marcar que o usuário está logado
            coletar_infos_perfil()

            carregar_home_page()
        }
    })
}

function getCookie(name) {  // Function from Django documentation about CSRF
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
