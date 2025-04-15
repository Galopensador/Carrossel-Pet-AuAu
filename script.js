let currentIndex = 0; // Índice do Banner atualmente exibido, é uma variavel que armazena o indice do banner atualmente visivel

//Será uma função para mover o carousel na direção específica (1 para o proximo(direita), -1 anterior(esquerda))
function moveCarousel(direction) {
    const banners = document.querySelectorAll('.banner'); // Seleciona todos os banners

    currentIndex += direction; // Atualiza o índice atual com a direção escolida, adicionado um novo banner com +=

    // Se o índice for < 0, volta o banner o último banner
    if (currentIndex < 0) {
        currentIndex = banners.length - 1;
    }


    // Se o índice for maior ou igual ao número de banners, após contar todos os banner no positvo (+), volta para o primeiro banner
    else if (currentIndex >= banners.length) {
        currentIndex = 0; // Se o índice for maior ou igual ao número de banners, volta para o primeiro banner
    }

    updateCarousel(); // Atualiza o carousel para exibir o banner primeiro banner
}
// A variavel currentIndex rastreia o banner atualmente visivel. Afunção moveCarousel(direction) atualiza o índice com base na direção escolhida (1 para o próximo banner, -1 para o banner anterior). Se o índice ficar fora dos limites (menor que 0 ou maior que o número total de banners), ele é ajustado para exibir o último ou o primeiro banner, respectivamente. A função updateCarousel() é chamada para aplicar a transformação CSS e mover o carrossel para a posição correta.

// Atualiza o carousel para exibir o banner atual
function updateCarousel() {
    const carrossel = document.querySelector('.carrossel');

    // Seleciona o contêiner do carrossel
    const offset = currentIndex * 100; // Calcula o deslocamento com base no índice atual
    carrossel.style.transform = `translateX(-${offset}%)`; // Aplica a transformação para mover o carrossel no eixo X
    //A função updateCarousel() atualiza a posição do carrossel com base no índice atual. Ela calcula o deslocamento necessário multiplicando o índice atual por 100 (para converter em porcentagem) e aplica essa transformação ao contêiner do carrossel usando a propriedade CSS transform. Isso move o carrossel para a esquerda ou direita, dependendo do índice atual.
}

// Define a data e hora da Black Friday
const blackFriday = new Date();// Cria um novo objeto de data com a data e hora atuais

//blackFriday: esta constante assume  que esta variavel é um objeto do tipo Date, representa data e hora específicada.

blackFriday.setDate(blackFriday.getDate() + 2); // Adiciona 2 dias à data atual

//Função que atualiza o contador da Black Friday
function updateCountdown() {
    const now = new Date(); // obtem a data e hora atuais
    const timeRemaining = blackFriday - now; // Calcula o tempo restante até a Black Friday

    //
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // Calcula o número de dias restantes
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calcula o número de horas restantes
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)); // Calcula o número de minutos restantes
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Calcula o número de segundos restantes

    document.getElementById("days").textContent = days.toString().padStart(2, '0'); // Atualiza o elemento HTML com o número de dias restantes
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0'); // Atualiza o elemento HTML com o número de horas restantes
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0'); // Atualiza o elemento HTML com o número de minutos restantes
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0'); // Atualiza o elemento HTML com o número de segundos restantes

    if (timeRemaining <= 0) { // Se o tempo restante for menor ou igual a zero
        clearInterval(countdownInterval); // Limpa o intervalo do contador
        document.getElementById("timer").textContent = "A Black Friday começou!"; // Atualiza o texto do temporizador
    }
}

// Atualiza o contador a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000); // Chama a função updateCountdown a cada segundo

//Chama a função uma vez para inicializar o contador imediatamente
updateCountdown(); // Chama a função updateCountdown para inicializar o contador imediatamente