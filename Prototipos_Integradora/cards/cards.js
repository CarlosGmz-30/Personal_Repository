$(document).ready(function() {
    $(".carousel-inner").slick({
        slidesToShow: 4, // El número de elementos visibles en el carrusel
        slidesToScroll: 1, // El número de elementos a desplazar por vez
        infinite: true, // Habilitar el modo infinito
        prevArrow: $(".carousel-control-prev"), // Selector del botón de "anterior"
        nextArrow: $(".carousel-control-next"), // Selector del botón de "siguiente"
        autoplay: true, // Habilitar el desplazamiento automático
        autoplaySpeed: 1500, // Velocidad del desplazamiento automático en milisegundos (3 segundos en este caso)
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});