
function aplicar_novas_configs_usuario() {
    let csrftoken = getCookie('csrftoken');

    fetch('/update_user_infos', {
        method: 'POST',
        body: JSON.stringify({
            'chave_cesar_apenas_letras': document.querySelector('#chave_cesar_apenas_letras').value,
            'chave_cesar_varios_caracteres': document.querySelector('#chave_cesar_varios_caracteres').value,

            'msg_comum_apenas_letras': document.querySelector('#msg_comum_apenas_letras').value,
            'msg_encript_apenas_letras': document.querySelector('#msg_encript_apenas_letras').value,
            'msg_comum_varios_caracteres': document.querySelector('#msg_comum_varios_caracteres').value,
            'msg_encript_varios_caracteres': document.querySelector('#msg_encript_varios_caracteres').value,

            'chave_vigenere_apenas_letras': document.querySelector('#chave_vigenere_apenas_letras').value,
            'chave_vigenere_varios_caracteres': document.querySelector('#chave_vigenere_varios_caracteres').value
        }),
        headers: {'X-CSRFToken': csrftoken}
    })
    .then(response => response.text())
    .then(data => {
        alert(data)
    })
}