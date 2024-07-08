
let numeroSecreto = gerarNumeroAleatorio ();

exibirTexto('h1', 'Jogo do Número da Sorte');
exibirTexto('p', 'Escolha um número entre 0 e 10:');

function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1); // precisa retornar uma info
} // parseInt para arredondar o número (inteiro)

function verificarChute() {
    console.log(numeroSecreto);
} // exibe no console o número random