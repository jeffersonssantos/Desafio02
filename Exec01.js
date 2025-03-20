//exercicio 01
let numero;

while (true) {
    numero = parseInt(prompt("Informe um número (digite 3 para sair):"));
    
    if (numero === 3) {
        alert("Você digitou 3. O programa será encerrado.");
        break;
    } else {
        alert("Você digitou: " + numero + ". Continue informando números.");
    }
}