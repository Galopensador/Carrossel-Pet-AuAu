let currentIndex = 0; // Índice do Banner atualmente exibido, é uma variavel que armazena o indice do banner atualmente visivel

//Será uma função para mover o carousel na direção específica (1 para o proximo(direita), -1 anterior(esquerda))
function moveCarousel(direction) {
    const banners = document.querySelectorAll('.banner'); // Seleciona todos os banners

    currentIndex += direction; // Atualiza o índice atual com a direção escolida, adicionado um novo banner com +=

    // Se o índice for < 0, volta o banner o último banner
    if (currentIndex < 0) {
        currentIndex = banners.length -1;
    }


    // Se o índice for maior ou igual ao número de banners, após contar todos os banner no positvo (+), volta para o primeiro banner
    else if (currentIndex >= banners.length) {
        currentIndex = 0; // Se o índice for maior ou igual ao número de banners, volta para o primeiro banner
    }

    updateCarousel(); // Atualiza o carousel para exibir o banner primeiro banner
}

// Atualiza o carousel para exibir o banner atual
function updateCarousel() {
    const carrossel = document.querySelector('.carrossel');

    // Seleciona o contêiner do carrossel
    const offset = currentIndex * 100; // Calcula o deslocamento com base no índice atual
carrossel.style.transform = `translateX(-${offset}%)`; // Aplica a transformação para mover o carrossel no eixo X
} 