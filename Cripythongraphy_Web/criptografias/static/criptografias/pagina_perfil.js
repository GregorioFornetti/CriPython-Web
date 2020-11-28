
function carregar_pagina_de_perfil() {
    // Cria e carrega a pagina de perfil.
    limpar_containers()
    criar_inputs_dados_usuario()
    let titulo_chaves_padroes = document.createElement('span')
    titulo_chaves_padroes.className = 'titulo-chaves-padroes'
    titulo_chaves_padroes.innerText = 'Chaves padrões'
    container_cifrasEperfil.append(titulo_chaves_padroes)
    criar_barra_opcoes_chaves_padroes()
    criar_botoes_perfil()
}


function criar_inputs_dados_usuario() {
    // Retorna um elemento div contendo todos os inputs pré-preenchidos com os dados do usuário
    let container_inputs_dados_usuario = document.createElement('div')
    container_inputs_dados_usuario.className = 'container-dados-perfil'

    let input_usuario = criar_input_dado_usuario('usuario')
    let input_email = criar_input_dado_usuario('e-mail')

    container_inputs_dados_usuario.append(input_usuario)
    container_inputs_dados_usuario.append(input_email)
    
    container_cifrasEperfil.append(container_inputs_dados_usuario)
}

function criar_input_dado_usuario(titulo_input) {
    // Cria e retorna um input e label de dado de usuario (label a esquerda e input a direita)
    let container_dado_usuario = document.createElement('div')
    container_dado_usuario.className = 'container-input-cifra'

    let label_input = document.createElement('span')
    label_input.className = 'texto-cifra'
    label_input.style.lineHeight = '35px'
    label_input.innerText = titulo_input

    let container_input = document.createElement('div')
    container_input.className = 'container-input-dados-perfil'
    let input = document.createElement('input')
    input.className = 'input-cifra'
    input.type = 'text'
    container_input.append(input)

    container_dado_usuario.append(label_input)
    container_dado_usuario.append(container_input)
    return container_dado_usuario
}


function criar_barra_opcoes_chaves_padroes() {
    // Cria opção da Cifra de César com seus inputs (escondidos até clicar no botão da opção)
    let opcao_cifra_de_cesar = criar_opcao_chave_padrao('Cifra de César')
    opcao_cifra_de_cesar.addEventListener('click', () => {
        esconderOUmostrar_inputs_chaves_padroes('container-cifra-de-cesar')
    })
    container_cifrasEperfil.append(opcao_cifra_de_cesar)
    criar_inputs_cesar_vigenere('container-cifra-de-cesar', 'cesar')
    // Cria opção da subst. simples com seus inputs
    let opcao_subst_simples = criar_opcao_chave_padrao('Substituição simples')
    opcao_subst_simples.addEventListener('click', () => {
        esconderOUmostrar_inputs_chaves_padroes('container-subst-simples')
    })
    container_cifrasEperfil.append(opcao_subst_simples)
    criar_inputs_subst_simples('container-subst-simples')
    // Cria opção da cifra de Vigenère com seus inputs
    let opcao_cifra_de_vigenere = criar_opcao_chave_padrao('Cifra de Vigenère')
    opcao_cifra_de_vigenere.addEventListener('click', () => {
        esconderOUmostrar_inputs_chaves_padroes('container-cifra-de-vigenere')
    })
    container_cifrasEperfil.append(opcao_cifra_de_vigenere)
    criar_inputs_cesar_vigenere('container-cifra-de-vigenere', 'vigenere')
}

function criar_opcao_chave_padrao(titulo_opcao) {
    let opcao_chave_padrao = document.createElement('div')
    opcao_chave_padrao.className = 'barra-chaves-padroes'

    let elemento_titulo_opcao = document.createElement('span')
    elemento_titulo_opcao.className = 'texto-barra-chaves-padroes'
    elemento_titulo_opcao.innerText = titulo_opcao

    opcao_chave_padrao.append(elemento_titulo_opcao)
    return opcao_chave_padrao
}


function esconderOUmostrar_inputs_chaves_padroes(container_id) {
    // Procura o elemento com o id passado no parametro e esconde ele se ele não estiver escondido, caso contrário mostra ele.
    let container_inputs = document.querySelector(`#${container_id}`)
    if (container_inputs.hidden)
        container_inputs.hidden = false
    else
        container_inputs.hidden = true

}

function criar_inputs_cesar_vigenere(container_id, input_id) {
    /* Cria um elemento "div" contendo os inputs/labels necessários para as chaves padrões da
       Cifra de Cesár e Vigenere */
    let container_inputs = document.createElement('div');
    container_inputs.className = 'container-inputs-chaves-padroes'
    container_inputs.id = container_id
    container_inputs.hidden = true

    let input_apenas_letras = criar_input_padrao_chaves_padroes('apenas letras', `chave_${input_id}_apenas_letras`)
    let input_varios_caracteres = criar_input_padrao_chaves_padroes('vários caracteres', `chave_${input_id}_varios_caracteres`)

    container_inputs.append(input_apenas_letras)
    container_inputs.append(input_varios_caracteres)
    container_cifrasEperfil.append(container_inputs)
}

function criar_input_padrao_chaves_padroes(titulo_label_input, input_id, pxs_margin_top) {
    // Cria um elemento "div" contendo o input e label padronizado do projeto.
    let container_input = document.createElement('div')
    container_input.className = 'container-input-cifra'
    if (pxs_margin_top)  // Só alterar a propriedade margin-top do container input se for "pedido". Caso contrario usar valor padrao da classe
        container_input.style.marginTop = pxs_margin_top

    let label_input = document.createElement('span')
    label_input.className = 'texto-cifra'
    label_input.innerText = titulo_label_input

    let input = document.createElement('input')
    input.className = 'input-cifra'
    input.type = 'text'
    input.id = input_id

    container_input.append(label_input)
    container_input.append(input)
    return container_input
}

function criar_inputs_subst_simples(container_id) {
    /* Cria um elemento "div" contendo os inputs/labels necessários para as chaves padrões da
       cifra de Subst. simples (que possui 4 chaves possiveis para serem guardadas -> 2 para cada modo)*/
    let container_subst_simples = document.createElement('div')
    container_subst_simples.className = 'container-inputs-chaves-padroes'
    container_subst_simples.id = container_id
    container_subst_simples.hidden = true
    let lista_elementos_subst_simples = []

    lista_elementos_subst_simples.push(criar_titulo_modos_subst_simples('apenas letras'))
    lista_elementos_subst_simples.push(criar_input_padrao_chaves_padroes('letras mensagem comum', 'msg_comum_apenas_letras', '5px'))
    lista_elementos_subst_simples.push(criar_input_padrao_chaves_padroes('letras mensagem encriptada', 'msg_encript_apenas_letras', '5px'))

    lista_elementos_subst_simples.push(criar_titulo_modos_subst_simples('vários caracteres'))
    lista_elementos_subst_simples.push(criar_input_padrao_chaves_padroes('letras mensagem comum', 'msg_comum_varios_caracteres','5px'))
    lista_elementos_subst_simples.push(criar_input_padrao_chaves_padroes('letras mensagem encriptada', 'msg_encript_varios_caracteres','5px'))

    for (indice in lista_elementos_subst_simples)
        container_subst_simples.append(lista_elementos_subst_simples[indice])
    
    container_cifrasEperfil.append(container_subst_simples)
}

function criar_titulo_modos_subst_simples(nome_titulo) {
    let titulo = document.createElement('div')
    titulo.className = 'texto-subst-simples-perfil'
    titulo.innerText = nome_titulo
    return titulo
}


function criar_botoes_perfil() {
    // Criando uma linha branca que separa os inputs e menu das chaves padrões dos botões.
    let linha_divisoria = document.createElement('div')
    linha_divisoria.className = 'linha-divisoria'

    // Criando os botoes da pagina de perfil
    let container_botoes = document.createElement('div')
    container_botoes.className = 'container-botoes-perfil'

    let botao_aplicar = criar_botao_perfil('aplicar configurações')
    botao_aplicar.addEventListener('click', aplicar_novas_configs_usuario)

    let botao_logout = criar_botao_perfil('logout')

    container_cifrasEperfil.append(linha_divisoria)
    container_botoes.append(botao_aplicar)
    container_botoes.append(botao_logout)
    container_cifrasEperfil.append(container_botoes)
}

function criar_botao_perfil(titulo_botao) {
    // Cria e retorna um botao com o titulo enviado como parametro
    let botao = document.createElement('input')
    botao.type = 'button'
    botao.className = 'botao-perfil'
    botao.value = titulo_botao

    return botao
}