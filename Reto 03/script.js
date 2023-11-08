const productos = document.querySelectorAll('.producto');
let currentIndex = 0;

function mostrarProducto(index) {
    productos.forEach((producto, i) => {
        producto.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

mostrarProducto(currentIndex);

function avanzar() {
    if (currentIndex < productos.length - 1) {
        currentIndex++;
        mostrarProducto(currentIndex);
    }
}

function retroceder() {
    if (currentIndex > 0) {
        currentIndex--;
        mostrarProducto(currentIndex);
    }
}

document.querySelector('.comprar-btn').addEventListener('click', () => {
    // Aquí puedes agregar la lógica de compra del producto actual
    alert('Producto comprado.');
});

document.querySelector('#btn-avanzar').addEventListener('click', avanzar);
document.querySelector('#btn-retroceder').addEventListener('click', retroceder);
