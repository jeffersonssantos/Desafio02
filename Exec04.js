function solicitarNumeros() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML += "<h2>Solicitar Números</h2>"; // Identificação do exercício

    // Criando um array para armazenar os números
    const numeros = [];

    // Solicitar cinco números ao usuário
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt(`Informe o número ${i + 1}:`));
        numeros.push(numero); // Adiciona o número ao array
    }

    // Exibindo os números na tela
    resultDiv.innerHTML += "<h3>Números informados:</h3>";
    numeros.forEach(numero => {
        const p = document.createElement('p');
        p.textContent = numero;
        resultDiv.appendChild(p);
    });
}

// Chama a função quando a página é carregada
window.onload = solicitarNumeros;