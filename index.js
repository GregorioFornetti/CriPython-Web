
let botao_nav_clicado

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#botao-utilitarios').onclick = () => {
        if (botao_nav_clicado !== 'utilitarios') {  // Não mostrar o sub-menu caso o usuário clique duas vezes no botão cifras.
            esconder_sub_menu('utilitarios')
            reiniciar_animacao()
            document.querySelector('#triang-utilitarios').style.display = 'block';
            document.querySelector('.sub-barra-navegacao').style.display = 'block';
        }
        else {  // Caso o usuário clique duas vezes consecutivas no botão "cifras", a segunda deve esconder o sub-menu.
            esconder_sub_menu('utilitarios2')
        }
    }

    document.querySelector('#botao-cifras').onclick = () => {
        // A mesmo padrão de esconder e mostrar o sub-menu que ocorre nas "cifras", ocorre aqui também !
        if (botao_nav_clicado !== 'cifras') {
            esconder_sub_menu('cifras')
            reiniciar_animacao()
            document.querySelector('#triang-cifras').style.display = 'block';
            document.querySelector('.sub-barra-navegacao').style.display = 'block';
        }
        else {
            esconder_sub_menu('cifras2')
        }
    }

    document.querySelector('#botao-login').onclick = () => esconder_sub_menu('login');
    document.querySelector('#botao-home').onclick = () => esconder_sub_menu('home');

    document.querySelector('.container-sub-barra-nav').addEventListener('animationend', () => {
        
    })
})


function esconder_sub_menu(botao) {
    document.querySelector('#triang-utilitarios').style.display = 'none';
    document.querySelector('#triang-cifras').style.display = 'none';
    document.querySelector('.sub-barra-navegacao').style.display = 'none';
    botao_nav_clicado = botao
}

function reiniciar_animacao() {
    let sub_menu_container = document.querySelector('.container-sub-barra-nav');
    sub_menu_container.style.animation = 'none';
    sub_menu_container.offsetHeight;  // Reflow (recarregar o elemento para reiniciar a animação).
    sub_menu_container.style.animation = null;
}