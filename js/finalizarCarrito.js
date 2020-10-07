// Arma lista de carrito

let carritoJson = localStorage.getItem('carrito');
carritoNuevo = JSON.parse(carritoJson);
for (i=0; i < carritoNuevo.length; i++) {
    let listaCarrito = document.querySelector('.listaProductosFinal');
    let itemCarrito = document.createElement('ul');
    itemCarrito.innerHTML = `<li> <a href="${carritoNuevo[i].direccion}"> <img src="${carritoNuevo[i].imagen}" alt="" class="imgCarrito"> </a> </li>
    <li> <a href="${carritoNuevo[i].direccion}"> ${carritoNuevo[i].nombre} </a> </li>
    <li> ${carritoNuevo[i].cantidad}un </li>
    <li> $ ${carritoNuevo[i].precio}</li>
    <li> <button id="${carritoNuevo[i].nombreConst}">X</button> </li>`;
    itemCarrito.classList.add('ulCarrito');
    listaCarrito.appendChild(itemCarrito);
}

creaSubtotal();

// eliminar producto de finalizarCarrito.html
let padre = document.querySelector('.listaProductosFinal');

padre.addEventListener('click', eliminarHTML);

function eliminarHTML (a){
    for (i=0; i <= carritoNuevo.length; i++) {
        if (carritoNuevo[i].nombreConst == a.target.id){
    let hijo = document.querySelectorAll('ul')[i];
    console.log(hijo)
    let borrar = padre.removeChild(hijo);
    break
        }
    }
    eliminarProductoCarNuevo(a);
    var carritoJson = JSON.stringify(carritoNuevo);
    localStorage.setItem('carrito', carritoJson);
    borraSubtotal();
    creaSubtotal();
}

function eliminarProductoCarNuevo (a) {
    for (let i=0; i <= carritoNuevo.length; i++){
        if (carritoNuevo[i].nombreConst == a.target.id){
            carritoNuevo.splice(i, 1);
            break
        }
    }
}

// Arma subtotal

var subtotal = 0;

function creaSubtotal(){
    let b = 0;
    var contenedorSubtotal = document.querySelector('.resumenCarrito');
    var agregarSubtotal = document.createElement('div');
for (i=0; i < carritoNuevo.length; i++){
    a = carritoNuevo[i].precio * carritoNuevo[i].cantidad;
    var c = (a + b);
    b = c;
}
    subtotal = c
    b = 0
    let envio = Math.floor(subtotal*0.15);
    agregarSubtotal.innerHTML = `
    <h3> Subtotal $ ${subtotal} <h3>
    <h3 class="mt-3"> Gastos de Envio $ ${envio} </h3>
    <h3 class="mt-5"> TOTAL $ ${subtotal + envio} </h3>`
    if (carritoNuevo.length < 1) {
        agregarSubtotal.innerHTML = '$ 0'
    }
    contenedorSubtotal.appendChild(agregarSubtotal);

}

function borraSubtotal(){
    var contenedorBorrador = document.querySelector('.resumenCarrito');
    while (contenedorBorrador.firstChild){
        contenedorBorrador.removeChild(contenedorBorrador.firstChild);
    }
}