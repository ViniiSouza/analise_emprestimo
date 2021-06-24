function opcoesDeEmprestimo () {
    var valorEmprestimo = toFloat("#valorEmprestimo");
    var parcelasEmprestimo = toInt("#numParcelas");
    var parceladoSemJuros = (valorEmprestimo/parcelasEmprestimo);
    var parceladoComJuros = (((parceladoSemJuros + (parceladoSemJuros*0.035))*parcelasEmprestimo)/parcelasEmprestimo); // Taxa de juros de 3.5% ao mês sem garantia
    var parceladoComJurosGarantia = (((parceladoSemJuros + (parceladoSemJuros*0.02))*parcelasEmprestimo)/parcelasEmprestimo); // Taxa de juros de 2% ao mês com garantia

    // Opção sem garantia
    op1Parcela = document.querySelector("#op1-parcela");
    op1Parcela.textContent = parcelasEmprestimo;
    op1Valor = document.querySelector("#op1-valor");
    op1Valor.textContent = parceladoComJuros.toFixed(2);

    // Opção com garantia
    op2Parcela = document.querySelector("#op2-parcela");
    op2Parcela.textContent = parcelasEmprestimo;
    op2Valor = document.querySelector("#op2-valor");
    op2Valor.textContent = parceladoComJurosGarantia.toFixed(2);

}