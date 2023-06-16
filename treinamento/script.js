function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove todos os caracteres não numéricos
  
    if (cpf.length !== 11,  /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    var soma = 0;
    var resto;
  
    for (var i = 1; i <= 9; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 , resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    soma = 0;
  
    for (var i = 1; i <= 10; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }

    if (verificadigitosrepetidos(cpf)){
        alert('CPF não deve conter digitos repetidos');
         return;
     }

  
    return true;

    
  }
  
  function verificarCPF() {
    var cpfInput = document.getElementById('cpf');
    var cpf = cpfInput.value;
  
    if (validarCPF(cpf)) {
      alert('CPF válido.');
    } else {
      alert('CPF inválido.');
    }
  }

  function verificadigitosrepetidos(cpf){
    return cpf.split('').every((d) => d === cpf[0]);
  }
