// Recupera o tempo salvo
let time = parseInt(sessionStorage.getItem('tempoDecorrido')) || 0;
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

// Atualiza o contador visualmente
function updateTimer() {
    timerElement.textContent = time;
    if (time > 10) {
        messageElement.style.display = 'block';
    } else {
        messageElement.style.display = 'none';
    }
}

// Inicia o contador
updateTimer();
const interval = setInterval(() => {
    time++;
    sessionStorage.setItem('tempoDecorrido', time.toString());
    updateTimer(); // Corrigido para chamar a função correta
}, 1000);

resetButton.addEventListener('click', () => {
    time = 0;
    sessionStorage.setItem('tempoDecorrido', time);
    updateTimer();
});