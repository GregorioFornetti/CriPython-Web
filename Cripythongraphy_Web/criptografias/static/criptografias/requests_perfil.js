
function aplicar_novas_configs_usuario() {
    let csrftoken = getCookie('csrftoken');

    fetch('/update_user_infos', {
        method: 'POST',
        body: JSON.stringify({
            'cesar_apenas_letras': document.querySelector('#cesar_apenas_letras').value,
            'cesar_varios_caracteres': document.querySelector('#cesar_varios_caracteres').value,

            'msg_comum_apenas_letras': document.querySelector('#msg_comum_apenas_letras').value,
            'msg_encript_apenas_letras': document.querySelector('#msg_encript_apenas_letras').value,
            'msg_comum_varios_caracteres': document.querySelector('#msg_comum_varios_caracteres').value,
            'msg_encript_varios_caracteres': document.querySelector('#msg_encript_varios_caracteres').value,

            'vigenere_apenas_letras': document.querySelector('#vigenere_apenas_letras').value,
            'vigenere_varios_caracteres': document.querySelector('#vigenere_varios_caracteres').value
        }),
        headers: {'X-CSRFToken': csrftoken}
    })
    .then(response => response.text())
    .then(data => {
        alert(data)
    })
}