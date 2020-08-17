const fundo_popup_erro = 'rgb(239, 211, 212)';
const fundo_popup_sucesso = 'rgb(209, 221, 220)';
const cor_texto_erro = 'rgb(173, 35, 42)';
const cor_texto_sucesso = 'rgb(64, 112, 111)';
let container_popup
let texto_popup
let botao_fechar_popup


document.addEventListener('DOMContentLoaded', () => {
    // Salvando os elementos do popup dentro de variaveis
    container_popup = document.querySelector('#container-popup');
    texto_popup = document.querySelector('.texto-popup');
    botao_fechar_popup = document.querySelector('.botao-fechar-popup');

    document.querySelector('.botao-fechar-popup').onclick = () => {  // Fazer com que o popup suma quando o "X" for clicado.
        container_popup.style.display = 'none';
        texto_popup.innerHTML = '';
        botao_fechar_popup.innerHTML = '';
    }
})

function criar_popup_erro(mensagem, classe) {
    container_popup.style.display = 'block';
    container_popup.style.backgroundColor = fundo_popup_erro;
    container_popup.className = classe;
    
    texto_popup.innerHTML = mensagem;
    texto_popup.style.color = cor_texto_erro;

    botao_fechar_popup.innerHTML = 'x'
    botao_fechar_popup.style.color = cor_texto_erro;
}

function criar_popup_sucesso(mensagem, classe) {
    container_popup.style.display = 'block';
    container_popup.style.backgroundColor = fundo_popup_sucesso;
    container_popup.className = classe;

    texto_popup.innerHTML = mensagem;
    texto_popup.style.color = cor_texto_sucesso;

    botao_fechar_popup.innerHTML.innerHTML = 'x'
    botao_fechar_popup.style.color = cor_texto_sucesso;
}
