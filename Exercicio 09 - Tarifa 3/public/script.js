const login = ["usuario123", "senha_forte1234"]

function entrar() {
    let usuario = document.querySelector("#user")
    let senha = document.querySelector("#pass")

    if (usuario.value === login[0] && senha.value === login[1]) {
        window.location.href = "/Exercicio%2009%20-%20Tarifa%203/view/menu.html"
    } else {
        usuario.value = ""
        senha.value = ""
        alert("Email ou senha incorretos!")
    }
}