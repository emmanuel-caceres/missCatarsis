// function ver Carrito y finalizar compra - pedirá datos de usuario y redirecionará a finalizarCarrito.html 

var mailRegistrado = ["emmanuelc89@gmail.com", "hola@hola.com", "mail3"];
var nombreRegistrado = ["Emmanuel", "hola", "nombre3"];

function finalizarCarrito (producto){
   if (carritoCompras == 0){
      alert("agregue productos al carrito")
   }else{
    usuario = prompt ('Ingresa con tu Mail');
    for (i=0; i < mailRegistrado.length; i++){
       if (usuario == mailRegistrado[i]) {
       var nombre = i
       }
    } 
    if(mailRegistrado.includes(usuario) == true){
         alert ('Bienvenido ' + nombreRegistrado[nombre]); 
         
    } else{
       mailRegistrado.push(usuario)
       nuevoNombre = prompt ('Por favor ingrese un nombre de usuario');
       nombreRegistrado.push(nuevoNombre);
       alert ('Bienvenido ' + nuevoNombre);
    }
    location.href = "finalizarCarrito.html"
   }
}













