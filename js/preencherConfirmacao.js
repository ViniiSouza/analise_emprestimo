//Função que recebe valor do id de referencia e insere no idplace, com 2 casas decimais
function pegarDadoEPreencher (idreferencia, idplace) { 
    var dado = idreferencia;
    var place = document.querySelector(idplace);
    place.textContent = dado.toFixed(2);
}

// Função para preencher campos do modal com confirmação de empréstimos
// Função grande e repetida por conta do prazo de entrega próximo
function preencherConfirmacao () {
    var valorEmprestimo = toInt("#valorEmprestimo");
    var parcelasEmprestimo = document.querySelector("#numParcelas").value;
    var parceladoSemJuros = (valorEmprestimo/parcelasEmprestimo);
    var totalComJuros = ((parceladoSemJuros + (parceladoSemJuros*0.035))*parcelasEmprestimo);
    var parceladoComJuros = (((parceladoSemJuros + (parceladoSemJuros*0.035))*parcelasEmprestimo)/parcelasEmprestimo); // Taxa de juros de 3.5% ao mês sem garantia
    var totalComJurosGarantia = ((parceladoSemJuros + (parceladoSemJuros*0.02))*parcelasEmprestimo);
    var parceladoComJurosGarantia = (((parceladoSemJuros + (parceladoSemJuros*0.02))*parcelasEmprestimo)/parcelasEmprestimo); // Taxa de juros de 2% ao mês com garantia
    var scoreFinal = document.querySelector("#valorScoreModal2").textContent;
    var placeValorEmprestimo = document.querySelector("#placeValorEmprestimo");
    var placeNumParcelas = document.querySelector("#placeQuantParcelas");
    var placeJurosMes = document.querySelector("#placeJurosMes");
    var placeGarantia = document.querySelector("#placeGarantia");
    var placeChance = document.querySelector("#placeChanceAprovacao");
    var placeAvisoGarantia = document.querySelector("#placeAvisoGarantia");

    // Aqui são os valores que não são alterados se o juros muda

    placeValorEmprestimo.textContent = valorEmprestimo.toFixed(2);
    placeNumParcelas.textContent = parcelasEmprestimo;

    //Abaixo valores que alteram conforme os juros
    
    if (document.querySelector("#opcao1").checked == true) {
        pegarDadoEPreencher(totalComJuros, "#placeValorFinal");
        pegarDadoEPreencher(parceladoComJuros, "#placeValorParcela");
        placeJurosMes.textContent = "3.5";
        placeGarantia.textContent = "Não";
        placeChance.textContent = scoreFinal/10; //Dividir para ficar de 0 a 100 de porcentagem
        placeAvisoGarantia.textContent = "";
    }

    else if (document.querySelector("#opcao2").checked == true) {
        pegarDadoEPreencher(totalComJurosGarantia, "#placeValorFinal");
        pegarDadoEPreencher(parceladoComJurosGarantia, "#placeValorParcela");
        placeJurosMes.textContent = "2";
        placeGarantia.textContent = "Sim";
        placeChance.textContent = scoreFinal/10; //Dividir para ficar de 0 a 100 de porcentagem
        placeAvisoGarantia.textContent = "A opção selecionada contém garantia de pagamento, seguindo com a solicitação, você confirma que dá garantia de pagamento com um bem a ser definido.";
    }

}