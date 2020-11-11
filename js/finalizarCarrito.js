// Arma lista de carrito en html

function creafincarrito() {
  let carritoJson = localStorage.getItem('carrito');
  carritoNuevo = JSON.parse(carritoJson);
  for (i = 0; i < carritoNuevo.length; i++) {
    let listaCarrito = document.querySelector('.listaProductosFinal');
    let itemCarrito = document.createElement('div');
    itemCarrito.innerHTML = `<div class="col-1"> <img src="${carritoNuevo[i].imagen}" alt="" class="imgCarrito"> </div>
    <div class="col-3"> ${carritoNuevo[i].nombre} </div>
    <div class="col-2"> 
    <button class="menos" id="${carritoNuevo[i].nombreConst}">-</button>
    ${carritoNuevo[i].cantidad}un 
    <button class="mas" id="${carritoNuevo[i].nombreConst}">+</button></div>
    <div class="col-3"> $ ${carritoNuevo[i].precio}</div>
    <div class="col-1"> <button class="botonborrador" id="${carritoNuevo[i].nombreConst}">X</button> </div>`;
    itemCarrito.classList.add('row', 'ulCarrito');
    listaCarrito.appendChild(itemCarrito);

  }
}

creafincarrito();

creaSubtotal();

// borra Productos del carrito

$('.botonborrador').on('click', function (a) {
  for (i = 0; i <= carritoNuevo.length; i++) {
    if (carritoNuevo[i].nombreConst == a.target.id) {
      carritoNuevo.splice(i, 1);
      break
    }
  }
  var carritoJson = JSON.stringify(carritoNuevo);
  localStorage.setItem('carrito', carritoJson);
  location.href = "finalizarCarrito.html"
});

// Arma subtotal

var subtotal = 0;

function creaSubtotal() {
  let b = 0;
  var contenedorSubtotal = document.querySelector('.resumenCarrito');
  var agregarSubtotal = document.createElement('div');
  for (i = 0; i < carritoNuevo.length; i++) {
    a = carritoNuevo[i].precio * carritoNuevo[i].cantidad;
    var c = (a + b);
    b = c;
  }
  subtotal = c
  b = 0
  let envio = Math.floor(subtotal * 0.15);
  agregarSubtotal.innerHTML = `
    <h3> Subtotal $ ${subtotal} <h3>
    <h3 class="mt-3"> Gastos de Envio $ ${envio} </h3>
    <h3 class="mt-5"> TOTAL $ ${subtotal + envio} </h3>`
  if (carritoNuevo.length < 1) {
    agregarSubtotal.innerHTML = '$ 0'
  }
  contenedorSubtotal.appendChild(agregarSubtotal);

}

function borraSubtotal() {
  var contenedorBorrador = document.querySelector('.resumenCarrito');
  while (contenedorBorrador.firstChild) {
    contenedorBorrador.removeChild(contenedorBorrador.firstChild);
  }
}

// boton Sumar unidad

$('.mas').on('click', function (e) {
  let carritoJson = localStorage.getItem('carrito');
  carritoNuevo = JSON.parse(carritoJson);
  const menosCant = carritoNuevo.find(elem => elem.nombreConst == e.target.id);
  if (menosCant) {
    menosCant.cantidad++;
  }
  let carritoJson3 = JSON.stringify(carritoNuevo);
  localStorage.setItem('carrito', carritoJson3);
  location.href = "finalizarCarrito.html"
})

// boton restar unidad

$('.menos').on('click', function (e) {
  let carritoJson = localStorage.getItem('carrito');
  carritoNuevo = JSON.parse(carritoJson);
  const menosCant = carritoNuevo.find(elem => elem.nombreConst == e.target.id);
  if (menosCant) {
    menosCant.cantidad--;
    if (menosCant.cantidad < 1) {
      for (i = 0; i <= carritoNuevo.length; i++) {
        if (carritoNuevo[i].nombreConst == menosCant.nombreConst) {
          carritoNuevo.splice(i, 1);
          let carritoJson3 = JSON.stringify(carritoNuevo);
          localStorage.setItem('carrito', carritoJson3);

          location.href = "finalizarCarrito.html"
        }
      }
    } else {
      let carritoJson3 = JSON.stringify(carritoNuevo);
      localStorage.setItem('carrito', carritoJson3);
      location.href = "finalizarCarrito.html"
    }
  }
})

// Boton Comprar Alert

$('.comprar').on('click', function () {
  let timerInterval
  swal.fire({
    title: 'Redireccionando a Mercado Pago',
    timer: 2000,
    timerProgressBar: true,
    willOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
})

// function borraContenido(){
//     let padreContenido = document.querySelector('.listaProductosFinal');
//     while (padreContenido.firstChild){
//         padreContenido.removeChild(padreContenido.firstChild)
//     }
// }

// function eliminarProductoCarNuevo (a) {
//     for (let i=0; i <= carritoNuevo.length; i++){
//         if (carritoNuevo[i].nombreConst == a.target.id){
//             carritoNuevo.splice(i, 1);
//             break
//         }
//     }
// };