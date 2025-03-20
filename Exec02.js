const senhaCorreta = "senha123";
let tentativas = 0;
let senha;

do {
    senha = prompt("Digite a senha de acesso (tentativa " + (tentativas + 1) + " de 3):");
    tentativas++;

    if (senha === senhaCorreta) {
        alert("Acesso concedido!");
        document.getElementById('result').textContent = "Acesso concedido!";
        break; // Sai do loop se a senha estiver correta
    }
} while (tentativas < 3);

if (tentativas === 3 && senha !== senhaCorreta) {
    alert("Senha bloqueada!");
    document.getElementById('result').textContent = "Senha bloqueada!";
}