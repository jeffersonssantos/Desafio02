// Criando a lista com 4 números
const numeros = [10, 20, 30, 40];

// Selecionando a div onde os números serão exibidos
const resultDiv = document.getElementById('result');

// Exibindo os números na tela
resultDiv.innerHTML += "<h2>Lista de Números</h2>";
numeros.forEach(numero => {
    resultDiv.innerHTML += `<p>${numero}</p>`;
});
