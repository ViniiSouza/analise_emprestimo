function somarScore () {
    var score = 100;
    score += toInt("#casaPropria");
    score += toInt("#veiculoProprio");
    score += toInt("#mediaRenda");
    score += toInt("#situacaoProfissional");
    score += toInt("#nivelEscolaridade");
    totalScore = score;
    var scorePlace = document.querySelector("#valorScore"); // Selecionar campos que pedem valor score
    scorePlace.textContent = totalScore; // Incluir valor score aos campos selecionados
}