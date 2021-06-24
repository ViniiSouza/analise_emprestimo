// Função grande e repetida por conta do prazo de entrega próximo
function preencherFinalizacao() {
    // comandos repetidos e nomes estranhos por falta de tempo
    
    // 2 variáveis que armazenam dados anteriores e o local para inserção dos mesmos
    var endNomeCliente = (document.querySelector("#nomeCliente").value + " " + document.querySelector("#sobrenomeCliente").value);
    var endPlaceNomeCliente = document.querySelector("#endPlaceNomeCliente");
    var endNascimento = document.querySelector("#dataNascimento").value;
    var endPlaceNascimento = document.querySelector("#endPlaceNascimento");
    var endValorEmprestimo = toInt("#valorEmprestimo");
    var endPlaceValorEmprestimo = document.querySelector("#endPlaceValorEmprestimo");
    var endValorFinal = document.querySelector("#placeValorFinal").textContent;
    var endPlaceValorFinal = document.querySelector("#endPlaceValorFinal");
    var endQuantParcelas = document.querySelector("#numParcelas").value;
    var endPlaceQuantParcelas = document.querySelector("#endPlaceQuantParcelas");
    var endValorParcela = document.querySelector("#placeValorParcela").textContent;
    var endPlaceValorParcela = document.querySelector("#endPlaceValorParcela");
    var endJurosMes = document.querySelector("#placeJurosMes").textContent;
    var endPlaceJurosMes = document.querySelector("#endPlaceJurosMes");
    var endGarantia = document.querySelector("#placeGarantia").textContent;
    var endPlaceGarantia = document.querySelector("#endPlaceGarantia");
    var endChanceAprovacao = document.querySelector("#placeChanceAprovacao").textContent;
    var endPlaceChanceAprovacao = document.querySelector("#endPlaceChanceAprovacao");
    var endScoreFinal = document.querySelector("#valorScoreModal2").textContent;
    var endPlaceScoreFinal = document.querySelector("#endPlaceScoreFinal");

    //Inclusão dos dados nos locais corretos
    endPlaceNomeCliente.textContent = endNomeCliente;
    endPlaceNascimento.textContent = endNascimento;
    endPlaceValorEmprestimo.textContent = endValorEmprestimo.toFixed(2);
    endPlaceValorFinal.textContent = endValorFinal;
    endPlaceQuantParcelas.textContent = endQuantParcelas;
    endPlaceValorParcela.textContent = endValorParcela;
    endPlaceJurosMes.textContent = endJurosMes;
    endPlaceGarantia.textContent = endGarantia;
    endPlaceChanceAprovacao.textContent = endChanceAprovacao;
    endPlaceScoreFinal.textContent = endScoreFinal;

    


}