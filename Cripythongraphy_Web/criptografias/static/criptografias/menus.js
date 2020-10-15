
function construir_titulo(nome_titulo, traduc_encript=true) {
    // Criando container titulo
    let container_titulo = document.createElement('div')
    container_titulo.className = 'box-titulo'
    // Criando texto titulo
    let titulo = document.createElement('h')
    titulo.className = 'titulo-cifra'
    titulo.innerText = nome_titulo
    container_titulo.append(titulo)

    if (traduc_encript) {  // Criar seleção de opções (radio: encriptação ou tradução)
        // Criar barra de separação do titulo das opções
        let separador = document.createElement('h')
        separador.className = 'titulo-cifra'
        separador.style.marginLeft = '70px'
        separador.innerText = '|'
        // Criando texto(label) encriptação
        let texto_encript = document.createElement('h')
        texto_encript.className = 'texto-radio-titulo'
        texto_encript.style.marginLeft = '120px'
        texto_encript.innerText = 'encriptação'
        // Criando radio encriptação
        let radio_encript = document.createElement('input')
        radio_encript.className = 'radio-cifra'
        radio_encript.type = 'radio'
        radio_encript.name = 'modo'
        radio_encript.id = 'encript'
        radio_encript.checked = true;
        // Criando texto(label) tradução
        let texto_traduc = document.createElement('h')
        texto_traduc.className = 'texto-radio-titulo'
        texto_traduc.style.marginLeft = '40px'
        texto_traduc.innerText = 'tradução'
        // Criando radio tradução
        let radio_traduc = document.createElement('input')
        radio_traduc.className = 'radio-cifra'
        radio_traduc.type = 'radio'
        radio_traduc.name = 'modo'
        radio_traduc.id = 'traduc'
        // Adicionando todos os elementos no container do titulo
        container_titulo.append(separador)
        container_titulo.append(texto_encript)
        container_titulo.append(radio_encript)
        container_titulo.append(texto_traduc)
        container_titulo.append(radio_traduc)
    }
    document.querySelector('.container-cifras').append(container_titulo)
}