// function ver Carrito y finalizar compra - pedirá datos de usuario y redirecionará a finalizarCarrito.html 

var mailRegistrado = ["emmanuelc89@gmail.com", "hola@hola.com", "mail3"];
var nombreRegistrado = ["Emmanuel", "hola", "nombre3"];

function finalizarCarrito(producto) {
   if (carritoCompras == 0) {
      Swal.fire({
         title: "Por favor, Agregue productos al Carrito",
         position: 'center',
         icon: 'error',
         showConfirmButton: true,
         timer: 5000,
         timerProgressBar: true,
      })
   } else {
      (async () => {
         const emailing = { value: email } = await swal.fire({
            title: "Por favor Ingrese su email",
            position: 'center',
            input: 'text',
            inputPlaceholder: 'email',
            inputValue: ''
         });

         for (i = 0; i < mailRegistrado.length; i++) {
            if (emailing.value == mailRegistrado[i]) {
               var nombre = i
                  ;
            }
         }
         if (mailRegistrado.includes(emailing.value) == true) {
            (async () => {
               await swal.fire({
                  title: `Bienvenido ${nombreRegistrado[nombre]}`,
                  position: 'center',
                  timer: 5000,
               });
               location.href = "finalizarCarrito.html";
            })()
         } else {
            (async () => {
               mailRegistrado.push(email)
               const nuevoNombre = { value: name } = await swal.fire({
                  title: "Por favor Ingrese un nombre de usuario",
                  position: 'center',
                  input: 'text',
                  inputPlaceholder: 'Nuevo Usuario',
                  inputValue: ''
               });
               nombreRegistrado.push(nuevoNombre);
               location.href = "finalizarCarrito.html"
            })()
         }
      })()
   }
}













