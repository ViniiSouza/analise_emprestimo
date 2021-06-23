// Todos os botões de enviar dados validando as informações

document.querySelector("#botaoDadosPessoais").addEventListener("click", function() {
    ValidarForm("#nomeCliente", "#sobrenomeCliente", "#dataNascimento", "#proximoDadosPessoais")
});

document.querySelector("#botaoDadosPessoais2").addEventListener("click", function() {
    ValidarForm("#casaPropria", "#veiculoProprio", "#mediaRenda", "#proximoDadosPessoais2")
});

document.querySelector("#botaoDadosProfissionais").addEventListener("click", function() {
    ValidarForm("#situacaoProfissional", "#nivelEscolaridade", "#rendaMensal", "#proximoDadosProfissionais")
});



// Chamar função de verificar empréstimo
botaoCalcular.addEventListener("click", verificarEmprestimo);

// Chamar função de score do empréstimo e Por valor de Score no lugar
var totalScore;
botaoCalcular.addEventListener("click", somarScore); // Soma os pontos e armazena na variável totalScore

// Gerar opções de empréstimo
botaoCalcular.addEventListener("click", opcoesDeEmprestimo);

// Detectar seleção de botão de empréstimo

opcao1 = document.querySelector("#opcao1");
opcao2 = document.querySelector("#opcao2");
var opcaoSelecionada;

// Chamar função de liberação do botão próximo ao selecionar opção

document.querySelector("#menuOpcoes").addEventListener("click", verificarSelecao);

//Verificar opção selecionada

document.querySelector("#menuOpcoes").addEventListener("click", opcaoSelecao);

//Colocar informações do empréstimo e usar score (aumentar caso tenha garantia)
