// Se dispara cuando el usuario quiere agregar algo al carrito

const traeProductos = document.querySelector('.row-flex-center');

traeProductos.addEventListener('click', agregar);

function agregar(e) {
    var duplicado = carritoCompras.find(elem => elem.nombreConst == e.target.id);
    if (duplicado) {
        duplicado.cantidad++;
    } else {
        var nuevo = productos.find(prod => prod.nombreConst == e.target.id)
        if (e.target.id == nuevo.nombreConst) {
            console.log(e.target.id)
            carritoCompras.push(nuevo);
        }
    }
    var carritoJson = JSON.stringify(carritoCompras);
    localStorage.setItem('carrito', carritoJson);
    borraContenido();
    agregaItem();
    contador()
};


// Eliminar un producto del carrito

function eliminarProducto(a) {
    for (let i = 0; i <= carritoCompras.length; i++) {
        if (carritoCompras[i].nombreConst == a.target.id) {
            carritoCompras.splice(i, 1);
            reseteaCantidad = productos.find(elem => elem.nombreConst == a.target.id);
            if (reseteaCantidad) {
                reseteaCantidad.cantidad = 1;
            }
            break
        }
    }
    var carritoJson = JSON.stringify(carritoCompras);
    localStorage.setItem('carrito', carritoJson);
}

// Eliminar un producto del sideBar

const borraProducto = document.querySelector('.listaProductos');

borraProducto.addEventListener('click', eliminarDelSideBar);

function eliminarDelSideBar(a) {
    for (i = 0; i <= carritoCompras.length; i++) {
        if (carritoCompras[i].nombreConst == a.target.id) {
            let hijo = document.querySelectorAll('ul')[i];
            let borraHijo = borraProducto.removeChild(hijo);
            break
        }
    }
    eliminarProducto(a);
    creaSubtotal();
    contador()
}

// Carrito y Crea los productos que esten en el local Storage en el sidebar

var carritoCompras = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

if (carritoCompras.length > 0) {
    let padreContenido = document.querySelector('.listaProductos');
    while (padreContenido.firstChild) {
        padreContenido.removeChild(padreContenido.firstChild)
    }

    let b = 0;
    var subtotal = 0;
    for (var i = 0; i < carritoCompras.length; i++) {
        let listaCarrito = document.querySelector('.listaProductos');
        let itemCarrito = document.createElement('ul');
        itemCarrito.innerHTML = `
        <li> <img src="${carritoCompras[i].imagen}" alt="" class="imgCarrito"> </li>
        <li> ${carritoCompras[i].nombre} </li>
        <li> ${carritoCompras[i].cantidad}un </li>
        <li> $ ${carritoCompras[i].precio}</li>
        <li class="botonAgregarObj"> <button id="${carritoCompras[i].nombreConst}">X</button> </li>
        `;
        itemCarrito.classList.add('ulCarrito');
        listaCarrito.appendChild(itemCarrito);
        //-----
        a = carritoCompras[i].precio * carritoCompras[i].cantidad;
        var c = (a + b);
        b = c;
    }
    subtotal = c
    var contenedorSubtotal = document.querySelector('.subtotal');
    var agregarSubtotal = document.createElement('h3');
    agregarSubtotal.innerHTML = `$ ${subtotal}`
    contenedorSubtotal.appendChild(agregarSubtotal);
    contador();
} else {
    var contenedorSubtotal = document.querySelector('.subtotal');
    var agregarSubtotal = document.createElement('h3');
    agregarSubtotal.innerHTML = `0`
    contenedorSubtotal.appendChild(agregarSubtotal);
}

// contador carrito

function contador() {
    const cuentaCarrito = document.querySelector('.contador');
    cuentaCarrito.innerHTML = " ";
    if (carritoCompras.length > 0) {
        var unidadB = 0;
        for (i = 0; i < carritoCompras.length; i++) {
            var unidadA = carritoCompras[i].cantidad;
            var unidadC = unidadA + unidadB;
            unidadB = unidadC;
        }
        let cantidadProductos = document.createElement('div');
        cantidadProductos.innerHTML = ` <p> ${unidadC} </p>`;
        cuentaCarrito.appendChild(cantidadProductos);
    }
}
