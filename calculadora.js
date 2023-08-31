document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tipoCalculadora = urlParams.get('tipo');
  
    const calculadoraContainer = document.getElementById('calculadora-container');
    
    switch (tipoCalculadora) {
      case 'estrutura':
        criarCalculadoraEstruturas(calculadoraContainer);
        break;
      default:
        console.error('Calculadora não encontrada');
    }
  });
  
  function criarCalculadoraEstruturas(container) {
    // Aqui você pode adicionar os elementos HTML e a lógica da calculadora de estruturas
  }
  