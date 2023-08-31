function abrirCalculadora(calculadora) {
    switch (calculadora) {
      case 'estrutura':
        window.location.href = 'calculadora.html?tipo=estrutura';
        break;
      default:
        console.error('Calculadora não encontrada');
    }
  }
  