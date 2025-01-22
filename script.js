const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const visibleItems = 7; // Número de itens visíveis
let index = 0;

// Função para rodar o carrossel
function moveCarousel() {
  index++;
  if (index > items.length - visibleItems) {
    index = 0; // Reinicia o carrossel quando chega ao fim
  }
  const translateX = -(index * (100 / visibleItems));
  track.style.transform = `translateX(${translateX}%)`;
}

// Executa o carrossel a cada 5 segundos
setInterval(moveCarousel, 5000);
