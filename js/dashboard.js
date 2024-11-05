const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Gás', 'Bicicleta', 'Encomenda', 'Reclamações', 'Temperatura'],
      datasets: [{
        label: 'Numero de ocorrências ',
        data: [5, 12, 27, 32, 19],
       
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 50,  
          beginAtZero: true
        }
       
      }
    }
  });
