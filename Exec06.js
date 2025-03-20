function mensagemPersonalizada(nome) {
    return `Olá, ${nome}, que bom ter você no programa Trilhas.`;
}

// Exibindo a mensagem na tela
document.addEventListener("DOMContentLoaded", function() {
    const nomeUsuario = "João"; // Você pode substituir "João" por qualquer nome
    const mensagem = mensagemPersonalizada(nomeUsuario);
    document.getElementById('result').textContent = mensagem;
});