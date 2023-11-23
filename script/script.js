// Gera um número aleatório entre 1 e 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    // Obtém a entrada do jogador
    const guess = document.getElementById('guessInput').value;

    // Converte a entrada para um número inteiro
    const guessInt = parseInt(guess);

    // Verifica se adivinhou corretamente
    if (guessInt === secretNumber) {
        showMessage('Parabéns! Você acertou!');
    } else {
        showMessage('Ops! Tente novamente.');
    }
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
