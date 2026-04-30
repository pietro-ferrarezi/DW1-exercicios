let dados = JSON.parse(localStorage.getItem("dadosAtleta"));

if (dados) {

    let texto = `
    Eu, <strong>${dados.responsavel}</strong>, responsável legal pelo(a) atleta <strong>${dados.nome}</strong>, portador(a) do CPF <strong>${dados.cpf}</strong>, com <strong>${dados.idade}</strong> anos de idade, autorizo sua participação na modalidade de <strong>${dados.modalidade}</strong>, enquadrado(a) na categoria <strong>${dados.categoria}</strong>, bem como sua viagem da cidade de <strong>${dados.origem}</strong> até <strong>${dados.destino}</strong>, para participação no torneio esportivo.
    <br><br>
    Declaro estar ciente de todas as condições da viagem e responsabilidade durante o evento.`;

    document.getElementById("textoAutorizacao").innerHTML = texto;

} else {
    document.body.innerHTML = "<h2>Erro: nenhum dado encontrado.</h2>";
}