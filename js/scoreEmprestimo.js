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

function scoreComSomaGarantia () {
    var score = 100;
    score += toInt("#casaPropria");
    score += toInt("#veiculoProprio");
    score += toInt("#mediaRenda");
    score += toInt("#situacaoProfissional");
    score += toInt("#nivelEscolaridade");
    if (document.querySelector("#opcao2").checked == true) {
        score += 100;
    }
    totalScore = score;
    var scorePlaceModal2 = document.querySelector("#valorScoreModal2"); // Selecionar campos que pedem valor score
    scorePlaceModal2.textContent = totalScore; // Incluir valor score aos campos selecionados
}