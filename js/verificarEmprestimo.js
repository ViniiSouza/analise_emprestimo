var botaoCalcular = document.getElementById("calcularParcelas");

function verificarEmprestimo() {
    var rendaMensal = document.querySelector("#rendaMensal").value; 
    var valorEmprestimo = document.querySelector("#valorEmprestimo").value; 
    var numParcelas = document.querySelector("#numParcelas").value;
    var totalParcela = (valorEmprestimo / numParcelas) //Calcular total parcela
    var msgAviso = document.querySelector("#msgAviso"); // Selecionar parágrafo que receberá mensagem de erro
    var botaoContinuar = document.querySelector("#enviarValores") // Selecionar botão de continuar
    botaoContinuar.setAttribute("disabled", true); // Bloquear clique no botão caso esteja desbloqueado
    msgAviso.textContent = (""); //Limpar mensagem antes de aparecer novo erro

    if (totalParcela>=(rendaMensal*0.5)) { // Se total da parcela for maior que 50% da renda mensal, negar
        msgAviso.style = "background-color: #DC3545;"; //Bg vermelho na mensagem
        msgAviso.textContent = ("O empréstimo não será avaliado pois compromete mais da metade de sua renda mensal.");
        
    }
    else if (totalParcela>=(rendaMensal*0.3)) { // Senão se total da parcela for maior que 30% da renda mensal, confirmar
        msgAviso.style = "background-color: #FFC107;"; //Bg amarelo na mensagem
        msgAviso.textContent = ("O valor da parcela é maior que 30% de sua renda mensal e pode comprometer seu orçamento. Deseja mesmo continuar?");
        botaoContinuar.removeAttribute("disabled");
    }
    else if (totalParcela<(rendaMensal*0.3)) {
        msgAviso.style = "background-color: #198754;"; //Bg verde na mensagem
        msgAviso.textContent = ("O empréstimo pode ser analisado. Clique em Seguir com Solicitação.");
        botaoContinuar.removeAttribute("disabled");
    }
}