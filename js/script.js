// Todos os botões de enviar dados validando as informações

//Modal Dados Pessoais
document.querySelector("#botaoDadosPessoais").addEventListener("click", function() {
    ValidarForm("#nomeCliente", "#sobrenomeCliente", "#dataNascimento", "#proximoDadosPessoais")
});

//Modal Dados Pessoais2
document.querySelector("#botaoDadosPessoais2").addEventListener("click", function() {
    ValidarForm("#casaPropria", "#veiculoProprio", "#mediaRenda", "#proximoDadosPessoais2")
});

//Modal Dados Profissionais
document.querySelector("#botaoDadosProfissionais").addEventListener("click", function() {
    ValidarForm("#situacaoProfissional", "#nivelEscolaridade", "#rendaMensal", "#proximoDadosProfissionais")
});



// Chamar função de verificar empréstimo ao clicar no botão Calcular
botaoCalcular.addEventListener("click", verificarEmprestimo);

// Chamar função de calcular score do empréstimo e por o resultado no lugar definido
var totalScore;
botaoCalcular.addEventListener("click", somarScore); // Soma os pontos e armazena na variável totalScore

// Gerar opções de empréstimo
botaoCalcular.addEventListener("click", opcoesDeEmprestimo);

// Detectar seleção de botão de empréstimo
opcao1 = document.querySelector("#opcao1"); //Botão da opção de empréstimo 1
opcao2 = document.querySelector("#opcao2"); //Botão da opção de empréstimo 2
var opcaoSelecionada;

// Chamar função que libera o clique no botão próximo ao selecionar opção
document.querySelector("#menuOpcoes").addEventListener("click", verificarSelecao);

//Verificar opção selecionada
document.querySelector("#menuOpcoes").addEventListener("click", opcaoSelecao);

//Gerar Score após seleção de opção de empréstimo (score aumenta em 100 caso seja na opção com garantia)
document.querySelector("#proximoOpcoesEmprestimo").addEventListener("click", scoreComSomaGarantia);

// Preencher campos de confirmação do empréstimo pegando valores recebidos anteriormente
document.querySelector("#proximoOpcoesEmprestimo").addEventListener("click", preencherConfirmacao);

// Pegar data e hora
document.querySelector("#proximoFinalizacaoEmprestimo").addEventListener("click", getDate);

// Preencher todos os campos de finalização do empréstimo
document.querySelector("#proximoFinalizacaoEmprestimo").addEventListener("click", preencherFinalizacao);
