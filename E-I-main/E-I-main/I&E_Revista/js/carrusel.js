$(document).ready(function(){
  // Activate the carousel
  var carousel = $("#carouselExampleIndicators").carousel();

  // Función para avanzar automáticamente el carrusel
  function avanzarCarrusel() {
    carousel.carousel('next');
  }

  // Configurar intervalo para avanzar automáticamente el carrusel cada 3 segundos (3000 milisegundos)
  var intervaloCarrusel = setInterval(avanzarCarrusel, 3000);

  // Pausar el avance automático cuando el usuario interactúa con el carrusel
  $("#carouselExampleIndicators").on("slide.bs.carousel", function() {
    clearInterval(intervaloCarrusel); // Limpiar el intervalo para detener el avance automático
  });

  // Reanudar el avance automático cuando el usuario deja de interactuar con el carrusel
  $("#carouselExampleIndicators").on("slid.bs.carousel", function() {
    intervaloCarrusel = setInterval(avanzarCarrusel, 3000); // Configurar nuevamente el intervalo
  });

  // Enable carousel control buttons
  $(".carousel-control-prev").click(function(){
    $("#carouselExampleIndicators").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#carouselExampleIndicators").carousel("next");
  });

  // Enable carousel indicators
  $(".carousel-indicators button").click(function(){
    $("#carouselExampleIndicators").carousel(parseInt($(this).attr("data-bs-slide-to")));
  });
});

