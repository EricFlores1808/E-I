// carrito.js

function agregarAlCarrito(nombre, precio) {
    var carrito = document.getElementById('carrito');
    var elemento = document.createElement('div');
    elemento.textContent = nombre + ' - $' + precio;
    carrito.appendChild(elemento);
}
