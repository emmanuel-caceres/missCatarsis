// Objetos - Contructor de productos

function nuevoProducto (nombre, tamaño, precio, categoria, imagen, dir, nombreConst, id) {
    this.nombre = nombre,
    this.tamaño = tamaño,
    this.cantidad = 1,
    this.precio = precio,
    this.categoria = categoria,
    this.imagen = imagen,
    this.direccion = dir,
    this.nombreConst = nombreConst
}

// Productos

const lobaA4 = new nuevoProducto("Loba A4", "A4", 1200, "ilustraciones", "imagenes/00_loba.jpg", "loba.html", "lobaA4");
const lobaA5 = new nuevoProducto("Loba A5", "A5", 800, "ilustraciones", "imagenes/00_loba.jpg", "loba.html", "lobaA5");

const tierraA4 = new nuevoProducto("Tierra A4", "A4", 1500, "ilustraciones", "imagenes/00_tierra.jpg", "loba.html", "tierraA4");
const tierraA5 = new nuevoProducto("Tierra A5", "A5", 750, "ilustraciones", "imagenes/00_tierra.jpg", "loba.html", "tierraA5");

const cicloA4 = new nuevoProducto("Ciclo A4", "A4", 1350, "tela", "imagenes/00_ciclo.jpg", "loba.html", "cicloA4");
const cicloA5 = new nuevoProducto("Ciclo A5", "A5", 820, "tela", "imagenes/00_ciclo.jpg", "loba.html", "cicloA5");

const edadA4 = new nuevoProducto("Edad A4", "A4", 1200, "acuarelas", "imagenes/00_edad.jpg", "loba.html", "edadA4");
const edadA5 = new nuevoProducto("Edad A5", "A5", 800, "acuarelas", "imagenes/00_edad.jpg", "loba.html", "edadA5");

const secretosA4 = new nuevoProducto("Secretos A4", "A4", 1200, "textil", "imagenes/00_secretos.jpg", "loba.html", "SecretosA4");
const secretosA5 = new nuevoProducto("Secretos A5", "A5", 800, "textil", "imagenes/00_secretos.jpg", "loba.html", "secretosA5");

const nocturnaA4 = new nuevoProducto("Nocturna A4", "A4", 1200, "ilustraciones", "imagenes/00_nocturna.jpg", "loba.html", "nocturnaA4");
const nocturnaA5 = new nuevoProducto("Nocturna A5", "A5", 800, "ilustraciones", "imagenes/00_nocturna.jpg", "loba.html", "nocturnaA5");

const estudioA4 = new nuevoProducto("Estudio A4", "A4", 1200, "ilustraciones", "imagenes/00_estudio.jpg", "loba.html", "estudioA4");
const estudioA5 = new nuevoProducto("Estudio A5", "A5", 800, "ilustraciones", "imagenes/00_estudio.jpg", "loba.html", "estudioA5");
