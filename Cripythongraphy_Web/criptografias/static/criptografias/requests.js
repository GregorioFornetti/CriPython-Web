function retorna_formulario_login() {
    document.querySelector('#textos-pagina').innerHTML = `
        <div class='container-cadastro'>
            <form>
                <div class='container-input'>
                    <label class='texto-cadastro-label'>usuário</label>
                    <input type='text' class='input-cadastro'>
                </div>
                <div class='container-input'>
                    <label class='texto-cadastro-label'>senha</label>
                    <input type='password' class='input-cadastro'>
                </div>
                <input type='submit' value='acessar' class='submit-cadastro'><br><br>
                <h class='texto-cadastro-label' style='color: white; margin-left: 115px;'>Ainda não é cadastrado ?</h><br>
                <a class='texto-cadastro-label' style='margin-left: 115px; color: rgb(64, 112, 111);'>Clique aqui</a><span class='texto-cadastro-label' style='color: white;'>e cadastre-se</span>
            </form>
        </div>
    `
    
}