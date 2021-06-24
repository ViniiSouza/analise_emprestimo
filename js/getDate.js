//Função que pega data e hora
function getDate() {
var placeData = document.querySelector("#recebeData");
var placeHora = document.querySelector("#recebeHora");
now = new Date;
var dataAtual = (now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear());
var horaAtual = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
placeData.textContent = dataAtual;
placeHora.textContent = horaAtual;
}