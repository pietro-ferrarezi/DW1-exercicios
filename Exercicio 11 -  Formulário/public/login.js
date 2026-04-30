document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();

    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let responsavel = document.getElementById("responsavel").value;
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let modalidade = document.getElementById("modalidade").value;
    let mensagem = document.getElementById("mensagem");

    let categoria = "";

    // Regras de idade
    if (idade < 7) {
        mensagem.innerText = "Não pode participar: idade mínima não atingida.";
        return;
    } else if (idade <= 11) {
        categoria = "Infantil";
    } else if (idade <= 13) {
        categoria = "Pré-adolescente";
    } else if (idade <= 18) {
        categoria = "Adolescente";
    } else {
        mensagem.innerText = "Não pode participar: torneio apenas para menores.";
        return;
    }

    // Salvar dados
    let dados = {
        cpf,
        nome,
        idade,
        responsavel,
        origem,
        destino,
        modalidade,
        categoria
    };

    localStorage.setItem("dadosAtleta", JSON.stringify(dados));

    // Redirecionar
    window.location.href = "autorizacao.html";
});