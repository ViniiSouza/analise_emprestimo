var calcularParcelas = document.getElementById("calcularParcelas");

function verificarEmprestimo() {
    var rendaMensal = document.querySelector("#rendaMensal").value; 
    var valorEmprestimo = document.querySelector("#valorEmprestimo").value; 
    var numParcelas = document.querySelector("#numParcelas").value;
    var totalParcela = (valorEmprestimo / numParcelas) //Calcular total parcela
    var msgAviso = document.querySelector("#msgAviso"); // Selecionar parágrafo que receberá mensagem de erro
    msgAviso.textContent = (""); //Limpar mensagem antes de aparecer novo erro

    if (totalParcela>=(rendaMensal*0.5)) { // Se total da parcela for maior que 50% da renda mensal, negar
        document.querySelector("#msgAviso").classList.add("bg-warning"); //Bg vermelho a mensagem
        msgAviso.textContent = ("O empréstimo não será avaliado pois compromete mais da metade de sua renda mensal.")
    }
    else if (totalParcela>=(rendaMensal*0.3)) { // Senão se total da parcela for maior que 30% da renda mensal, confirmar
        document.querySelector("#msgAviso").classList.add("bg-warning"); //Bg vermelho a mensagem
        msgAviso.textContent = ("O valor da parcela é maior que 30% de sua renda mensal e pode comprometer seu orçamento. Deseja mesmo continuar?")
    }
}
// Falta bloquear passagem adiante se empréstimo negar. Seguir para próximas etapas também

calcularParcelas.addEventListener("click", verificarEmprestimo);
