function ValidarForm(dado1, dado2, dado3, botaoProx) {
    var input1 = document.querySelector(dado1);
    var vInput1 = input1.value;
    var input2 = document.querySelector(dado2);
    var vInput2 = input2.value;
    var input3 = document.querySelector(dado3);
    var vInput3 = input3.value;
    var proxBotao = document.querySelector(botaoProx);
    if (vInput1 == "" || vInput2 == "" || vInput3 == "") {
        alert("Preencha todos os campos");
        proxBotao.setAttribute("disabled", true);
    }
    else {  // Remover bloqueio no botão
        proxBotao.removeAttribute("disabled");
    }
    if(vInput1 != "") {
        input1.style = "border: 2px solid green";
    }
  
    else {
        input1.style = "border: 2px solid red";
    }
  
    if(vInput2 != "") {
        input2.style = "border: 2px solid green";
    }
  
    else {
        input2.style = "border: 2px solid red";
    }
  
    if(vInput3 != "") {
        input3.style = "border: 2px solid green";
    }
    
    else {
        input3.style = "border: 2px solid red";
    }
  }