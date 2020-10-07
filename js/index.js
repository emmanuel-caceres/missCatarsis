 // Tarjetas destacadas

 var destacado = [lobaA4, tierraA4, cicloA4, edadA4];

 for (let destacadas of destacado){
     var contenedorDestacadas = document.querySelector('.tarjetaDestacadas');
     var tarjetaDestacada = document.createElement('div');
     tarjetaDestacada.classList.add('col-11', 'col-sm-6', 'col-lg-4', 'col-xl-3', 'contenedor-tarjeta');
     tarjetaDestacada.innerHTML = `<div class="tarjeta"> 
     <a href="wallArt.html"> <img src="${destacadas.imagen}" alt="ilustracion-1" class="imgDestacada"> </a>
         <h3> ${destacadas.nombre} </h3>
         <h4 class="text-center"> $ ${destacadas.precio} </h4>
     </div>`;
     contenedorDestacadas.appendChild(tarjetaDestacada); 
};
