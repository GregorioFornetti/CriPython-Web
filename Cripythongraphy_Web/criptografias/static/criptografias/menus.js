
let container_cifrasEperfil

document.addEventListener('DOMContentLoaded', () => {
    container_cifrasEperfil = document.querySelector('.container-cifrasEperfil')
})

function criar_menu_cifra_de_cesar() {
    criar_layout_padrao_cifras('Cifra de César', executar_menu_cifra_de_cesar, {
        'apenas letras' : ['chave_cesar_apenas_letras'],
        'vários caracteres' :['chave_cesar_varios_caracteres']
    })
}

function criar_menu_subst_simples() {
    criar_titulo('Substituição simples', 'cifra')
    criar_input_padrao_texto('letras mensagem comum')
    criar_input_padrao_texto('letras mensagem encriptada')
    criar_radio_padrao_cifras_utilitarios()
    criar_textarea_input(executar_menu_subst_simples, {
        "apenas letras": ['msg_comum_subst_simples_apenas_letras', 'msg_encript_subst_simples_apenas_letras'],
        "vários caracteres": ['msg_comum_subst_simples_varios_caracteres', 'msg_encript_subst_simples_varios_caracteres']
    })
    criar_textarea_output('resultado')
}

function criar_menu_cifra_de_vigenere() {
    criar_layout_padrao_cifras('Cifra de Vigenère', executar_menu_cifra_de_vigenere, {
        "apenas letras" : ['chave_vigenere_apenas_letras'],
        "vários caracteres" : ['chave_vigenere_varios_caracteres']
    })
}

function criar_menu_forca_bruta_cesar() {
    criar_layout_padrao_utilitarios('Força bruta César', executar_menu_forca_bruta_cesar)
}

function criar_menu_adivinhador_cesar() {
    criar_layout_padrao_utilitarios('Adivinhador César', executar_menu_adivinhador_cesar)
}

function criar_layout_padrao_cifras(titulo_cifra, func_cifra, lista_nomes_chaves) {
    criar_titulo(titulo_cifra, 'cifra')
    criar_input_padrao_texto('chave')
    criar_radio_padrao_cifras_utilitarios()
    criar_textarea_input(func_cifra, lista_nomes_chaves)
    criar_textarea_output('resultado')
}

function criar_layout_padrao_utilitarios(titulo_utilitario, func_utilitario) {
    criar_titulo(titulo_utilitario, 'utilitario', false)
    criar_radio_padrao_cifras_utilitarios()
    criar_textarea_input(func_utilitario)
    criar_textarea_output('resultado')
}

function atualizar_menu_cifras_utilits_para_modo_PC() {
    // Função ativada quando o resize muda o layout para o modo PC.
    let titulo_cifra = document.querySelector("#titulo-cifra")

    if (titulo_cifra) {  // Só atualizar se estiver em uma janela de cifras.
        // Adiciona uma barra separadora (se for uma cifra) e muda o layout dos radios de modos.
        if (titulo_cifra.dataset.tipo == 'cifra')
            titulo_cifra.insertAdjacentElement('afterend', retorna_separador())

        let container_radio = document.querySelector("#container-radio-modos")
        container_radio.insertAdjacentElement('afterend', retorna_input_padrao_radio_PC(['apenas letras', 'vários caracteres'], 'opcoes'))
        container_radio.remove()
    }
}

function atualizar_menu_cifras_utilits_para_modo_CEL() {
    // Função ativada quando o resize muda o layout para o modo CEL.
    let titulo_cifra = document.querySelector("#titulo-cifra")

    if (titulo_cifra) {  // Só atualizar se estiver em uma janela de cifras.
        // Remove a barra separadora (se for uma cifra) e muda o layout dos radios de modos.
        if (titulo_cifra.dataset.tipo == 'cifra')
            document.querySelector("#separador").remove()

        let container_radio = document.querySelector("#container-radio-modos")
        container_radio.insertAdjacentElement('afterend', retorna_input_padrao_radio_CEL(['apenas letras', 'vários caracteres'], 'opcoes'))
        container_radio.remove()
    }
}

function criar_titulo(nome_titulo, tipo, traduc_encript=true) {
    // Criando container titulo
    let largura_tela_atual = window.innerWidth
    let container_titulo = document.createElement('div')
    container_titulo.className = 'box-titulo'
    // Criando texto titulo
    let titulo = document.createElement('span')
    titulo.id = 'titulo-cifra'
    titulo.className = 'titulo-cifra'
    titulo.dataset.tipo = tipo
    titulo.innerText = nome_titulo
    container_titulo.append(titulo)

    if (traduc_encript) {  // Criar seleção de opções (radio: encriptação ou tradução)
        let container_radio = document.createElement('div')
        container_radio.className = 'box-radio-titulo'
        // Criar barra de separação do titulo das opções
        if (largura_tela_atual > TAMANHO_MAX_CEL) {
            container_titulo.append(retorna_separador())
        }
        // Criando texto(label) encriptação
        let texto_encript = document.createElement('span')
        texto_encript.className = 'texto-radio-titulo'
        texto_encript.innerText = 'encriptação'
        // Criando radio encriptação
        let radio_encript = document.createElement('input')
        radio_encript.className = 'radio-cifra'
        radio_encript.type = 'radio'
        radio_encript.name = 'modo'
        radio_encript.id = 'encript'
        radio_encript.dataset.nome_opcao = 'encriptação'
        radio_encript.checked = true;
        // Criando texto(label) tradução
        let texto_traduc = document.createElement('span')
        texto_traduc.className = 'texto-radio-titulo'
        texto_traduc.style.marginLeft = '40px'
        texto_traduc.innerText = 'tradução'
        // Criando radio tradução
        let radio_traduc = document.createElement('input')
        radio_traduc.className = 'radio-cifra'
        radio_traduc.type = 'radio'
        radio_traduc.name = 'modo'
        radio_traduc.dataset.nome_opcao = 'tradução'
        radio_traduc.id = 'traduc'
        // Adicionando todos os elementos no container do titulo
        container_radio.append(texto_encript)
        container_radio.append(radio_encript)
        container_radio.append(texto_traduc)
        container_radio.append(radio_traduc)
        container_titulo.append(container_radio)
    }
    container_cifrasEperfil.append(container_titulo)
    // Criar local onde terá os formulários
    let div_box_cifras = document.createElement('div')
    div_box_cifras.id = 'box-cifras'
    container_cifrasEperfil.append(div_box_cifras)
}

function retorna_separador() {
    let separador = document.createElement('span')
    separador.className = 'titulo-cifra'
    separador.style.marginLeft ='70px'
    separador.id = 'separador'
    separador.innerText = '|'

    return separador
}

function criar_input_padrao_texto(titulo, id_input='chave') {
    let container_input = retornar_container_IO()
    let titulo_input = retornar_titulo_IO(titulo)

    let input_de_texto = document.createElement('input')
    input_de_texto.className = 'input-cifra'
    input_de_texto.type = 'text'
    input_de_texto.id = id_input
    // Adicionando os novos elementos aos seus containers (divs).
    container_input.append(titulo_input)
    container_input.append(input_de_texto)
    document.querySelector('#box-cifras').append(container_input)
}

function criar_radio_padrao_cifras_utilitarios() {
    // Criar radio padrao com opções de: apenas letras e vários caracteres
    let box_cifras = document.querySelector("#box-cifras")
    if (window.innerWidth <= TAMANHO_MAX_CEL)
        box_cifras.append(retorna_input_padrao_radio_CEL(['apenas letras', 'vários caracteres'], 'opcoes'))
    else
        box_cifras.append(retorna_input_padrao_radio_PC(['apenas letras', 'vários caracteres'], 'opcoes'))
}

function retorna_input_padrao_radio_PC(lista_titulos, name) {
    let container_inputs = retornar_container_IO('container-radio-modos')
    for (let i = 0; i < lista_titulos.length; i++) {
        // Criar titulo do radio
        let titulo_radio = retornar_titulo_IO(lista_titulos[i])
        if (i > 0) // Caso seja um radio diferente do primeiro, dar um espaçamento 
            titulo_radio.style.marginLeft = '50px'
        // Criar opção de radio
        let radio_opcao = document.createElement('input')
        radio_opcao.type = 'radio'
        radio_opcao.className = 'radio-cifra'
        radio_opcao.dataset.nome_opcao = lista_titulos[i]
        radio_opcao.name = name
        if (i == 0)  // Deixar a primeira opção marcada  
            radio_opcao.checked = true
        // Adicionar o radio atual ao container de input atual
        container_inputs.append(titulo_radio)
        container_inputs.append(radio_opcao)
    }
    return container_inputs
}

function retorna_input_padrao_radio_CEL(lista_titulos, name) {
    let container_inputs = document.createElement('div')
    container_inputs.id = 'container-radio-modos'

    for (let i = 0; i < lista_titulos.length; i++) {
        let container_input = retornar_container_IO()
        // Criar titulo do radio
        let titulo_radio = retornar_titulo_IO(lista_titulos[i])
        // Criar opção de radio
        let radio_opcao = document.createElement('input')
        radio_opcao.type = 'radio'
        radio_opcao.className = 'radio-cifra'
        radio_opcao.dataset.nome_opcao = lista_titulos[i]
        radio_opcao.name = name
        if (i == 0)  // Deixar a primeira opção marcada  
            radio_opcao.checked = true
        // Adicionar o radio atual ao container de input atual
        container_input.append(titulo_radio)
        container_input.append(radio_opcao)
        container_inputs.append(container_input)
    }
    return container_inputs
}

function criar_textarea_input(func_botao, lista_nomes_chave, id_textarea='mensagem') {
    let container_input = retornar_container_IO()
    let titulo_text = retornar_titulo_IO('mensagem')

    let textarea_input = document.createElement('textarea')
    textarea_input.className = 'textarea_cifra'
    textarea_input.id = id_textarea

    let botao_exec = retorna_botao_cifras_utilit('executar', func_botao)

    container_input.append(titulo_text)
    container_input.append(textarea_input)
    container_input.append(botao_exec)
    if (document.querySelector("#titulo-cifra").dataset.tipo == 'cifra') 
        container_input.append(retorna_botao_cifras_utilit('usar chave padrão', func_botao, lista_nomes_chave))
    
    document.querySelector('#box-cifras').append(container_input)
}

function retorna_botao_cifras_utilit(titulo_botao, func_botao, JSON_nomes_chaves) {
    let botao = document.createElement('input')
    botao.type = 'button'
    botao.id = titulo_botao
    botao.className = 'botao-cifras'
    botao.value = titulo_botao

    if (!JSON_nomes_chaves)
        botao.addEventListener('click', () => {
            func_botao(false)  // Executar cifra utilizando chave escrita
        })
    else  // Executar cifra usando chave padrao
        botao.addEventListener('click', () => {
            let textarea_resultado = document.querySelector('#resultado')

            if (!JSON_dados_usuario)
                textarea_resultado.value = 'Você precisa estar logado para poder usar essa opção !'
            else {
                let lista_chaves = []
                let nome_opcao = retorna_opcao_cifra('opcoes')  // Coletar o modo de cifra selecionado pelo usuario

                for (let i = 0; i < JSON_nomes_chaves[nome_opcao].length; i++) {
                    lista_chaves.push(JSON_dados_usuario[JSON_nomes_chaves[nome_opcao][i]])

                    if (JSON_dados_usuario[JSON_nomes_chaves[nome_opcao][i]] == 0 || JSON_dados_usuario[JSON_nomes_chaves[nome_opcao][i]] == '') {
                        textarea_resultado.value = 'Você precisa definir uma chave padrão válida na pagina de perfil para usar essa opção !'
                        return
                    }
                }
                func_botao(lista_chaves)
            }
        })

    return botao
}

function mostrar_msg_erro_chave_padrao(info_erro) {
    document.querySelector('#resultado').value = info_erro
}

function criar_textarea_output(id_textarea='resultado') {
    // Criar textarea com titulo. Esse textarea será readonly
    let container_input = retornar_container_IO()
    let titulo_textarea = retornar_titulo_IO('resultado')

    let textarea_output = document.createElement('textarea')
    textarea_output.id = id_textarea
    textarea_output.className = 'textarea_cifra'
    textarea_output.style.borderRadius = '10px'
    textarea_output.style.height = '450px'
    textarea_output.readOnly = true

    container_input.append(titulo_textarea)
    container_input.append(textarea_output)
    document.querySelector('#box-cifras').append(container_input)
}

function retornar_container_IO(container_id) {
    // Retorna container padrão de inputs/outputs de formulários de cifras/utilitários.
    let container_input = document.createElement('div')
    container_input.className = 'container-input-cifra'
    if (container_id)
        container_input.id = container_id

    return container_input
}

function retornar_titulo_IO(titulo) {
    // Retorna titulo padrão de inputs/outputs de formulários de cifras/utilitários.
    let titulo_input = document.createElement('span')
    titulo_input.innerHTML = titulo
    titulo_input.className = 'texto-cifra'
    return titulo_input
}