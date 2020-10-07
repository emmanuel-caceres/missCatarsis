$('.iconCarrito').on('click', function() {
    $('.contenedorCarritoSideBar').toggleClass('abrirCarrito');
})

$('.cerrarCarrito').on('click', function() {
    $('.contenedorCarritoSideBar').toggleClass('abrirCarrito');
})


// filtros

$(document).ready(function(){

$('.contenedor-filtros .filtro[category="all"]').addClass('filtroActivo');

    $('.filtro').click(function(){
        var selectCategory = $(this).attr('category');
        console.log(selectCategory)

    // Sacando Clase filtroActivo al hacer click
    $('.filtro').removeClass('filtroActivo');
    // Agregando clase filtroActivo al que le hice click
    $(this).addClass('filtroActivo');
    // Ocultando las tarjetas
    $('.contenedor-tarjeta').css('transform', 'scale(0)');
        function hideTarjetas(){
            $('.contenedor-tarjeta').hide();
        } setTimeout(hideTarjetas, 400);
    // Mostrar segun categorias
        function showTarjetas(){
            $('.contenedor-tarjeta[category="'+selectCategory+'"]').show();
            $('.contenedor-tarjeta[category="'+selectCategory+'"]').css('transform', 'scale(1)');
        } setTimeout(showTarjetas, 400);
    })
    // Mostrando todas las categorias
    $('.filtro[category="all"]').click(function(){
        function showAll(){
            $('.contenedor-tarjeta').show();
            $('.contenedor-tarjeta').css('transform', 'scale(1)');
        } setTimeout(showAll, 400);
    })
})