// Função pra desbloquear botão ao selecionar opção
function verificarSelecao () {
    if (opcao1.checked || opcao2.checked) {
        document.querySelector(("#proximoOpcoesEmprestimo")).removeAttribute("disabled");
    }

    else {
        document.querySelector(("#proximoOpcoesEmprestimo")).setAttribute("disabled", true);
    }
}


//Função que verifica qual a opção selecionada

function opcaoSelecao () {
    if(opcao1.checked) {
        opcaoSelecionada = opcao1;
      }else if(opcao2.checked) {
        opcaoSelecionada = opcao2;
      }
}