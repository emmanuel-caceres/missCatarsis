// Tarjetas 
var productos = [lobaA4, tierraA4, cicloA4, edadA4, secretosA4, nocturnaA4, estudioA4, lobaA5, tierraA5, cicloA5, edadA5, secretosA5, nocturnaA5, estudioA5];

for (let producto of productos) {
var contenedorTarjetas = document.querySelector('.row-flex-center');
var tarjeta = document.createElement('div');
tarjeta.classList.add('col-11', 'col-sm-6', 'col-lg-4', 'col-xl-3', 'contenedor-tarjeta');
tarjeta.setAttribute('category',`${producto.categoria}`);
tarjeta.setAttribute('tamanio',`${producto.tamaño}`);
tarjeta.innerHTML = `<div class="tarjeta"> 
<img src="${producto.imagen}" alt="ilustracion-1" class="div__img-tarjeta">
    <h3> ${producto.nombre} </h3>
    <h4 class="text-center"> $ ${producto.precio} </h4>
    <button class="botonTarjeta" id="${producto.nombreConst}">Agregar</button>
</div>`;
contenedorTarjetas.appendChild(tarjeta); 
 };

// agrega el carrito y el subtotal a la lista de productos del sidebar


function agregaItem(){
    for (i=0; i < carritoCompras.length; i++) {
    let listaCarrito = document.querySelector('.listaProductos');
    let itemCarrito = document.createElement('ul');
    itemCarrito.innerHTML = `<li> <img src="${carritoCompras[i].imagen}" alt="" class="imgCarrito"> </li>
    <li> ${carritoCompras[i].nombre} </li>
    <li> ${carritoCompras[i].cantidad}un </li>
    <li> $ ${carritoCompras[i].precio}</li>
    <li class="botonAgregarObj"> <button id="${carritoCompras[i].nombreConst}">X</button> </li>`;
    itemCarrito.classList.add('ulCarrito');
    listaCarrito.appendChild(itemCarrito);
}
    creaSubtotal();
}

// Arma subtotal
let b = 0;
var subtotal = 0;

function creaSubtotal(){
for (i=0; i < carritoCompras.length; i++){
    a = carritoCompras[i].precio * carritoCompras[i].cantidad;
    var c = (a + b);
    b = c;
}
    subtotal = c
    b = 0
    borraSubtotalAnterior();
    var contenedorSubtotal = document.querySelector('.subtotal');
    var agregarSubtotal = document.createElement('h3');
    agregarSubtotal.innerHTML = `$ ${subtotal}`
    if (carritoCompras.length < 1) {
        agregarSubtotal.innerHTML = '$ 0'
    }
    contenedorSubtotal.appendChild(agregarSubtotal);
}

// evita que se dupliquen los items del sideBar

function borraContenido(){
    let padreContenido = document.querySelector('.listaProductos');
    while (padreContenido.firstChild){
        padreContenido.removeChild(padreContenido.firstChild)
    }
}

// evita que se dupliquen los subtotales del sideBar

function borraSubtotalAnterior(){
    let padreSubtotal = document.querySelector('.subtotal');
    while (padreSubtotal.firstChild){
        padreSubtotal.removeChild(padreSubtotal.firstChild)
    }
}

