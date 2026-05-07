function irCanal(url) {
  window.open(url, "_blank");
}

const tarjetas = document.querySelectorAll('.card-back');

tarjetas.forEach(tarjeta => {
  const sonido = tarjeta.querySelector('audio');

  tarjeta.addEventListener('mouseenter', () => {
    sonido.play();
  });

  tarjeta.addEventListener('mouseleave', () => {
    sonido.pause();
    sonido.currentTime = 0;
  });
});