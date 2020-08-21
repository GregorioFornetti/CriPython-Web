let texto_paginas

document.addEventListener('DOMContentLoaded', () => {
    texto_paginas = document.querySelector('#textos-pagina')
})

function carregar_home_page() {
    if (botao_nav_clicado !== 'home'){
        esconder_sub_menu('home');
        texto_paginas.innerHTML = '';
        fetch('/home')
        .then(response => response.json())
        .then(dados => {
            carregar_textos_pagina(dados)
    })
    }
}

function carregar_textos_pagina(textos_json) {
    for (chave in textos_json) {
        let container_textos = document.createElement('div');
        container_textos.className = 'container-textos-pagina';

        let titulo = document.createElement('h1');
        titulo.innerHTML = chave;
        titulo.className = 'titulos-pagina';
        container_textos.append(titulo);

        let texto = document.createElement('h');
        texto.innerHTML = textos_json[chave];
        texto.className = 'textos-pagina';
        container_textos.append(texto);

        texto_paginas.append(container_textos);
    }
}

function carregar_pagina_login() {
    esconder_sub_menu('login')
    retorna_formulario_login()

}


function carregar_pagina_de_perfil() {
    esconder_sub_menu('usuario')
}