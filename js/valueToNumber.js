// Transformar value em número

//Inteiro
function toInt (number) {
    var variavel = document.querySelector(number).value;
    variavel = parseInt(variavel);
    return variavel;
}

//Real / Float
function toFloat (number) {
    var variavel = document.querySelector(number).value;
    variavel = parseFloat(variavel);
    return variavel;
}