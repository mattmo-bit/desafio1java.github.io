
const precio = 400000;

let cantidadActual = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

const botonSumar = document.querySelector(".btn-mas");
const botonRestar = document.querySelector(".btn-menos");

precioSpan.innerHTML = precio;

function actualizarPantalla() {
    cantidadSpan.innerHTML = cantidadActual;
    valorTotalSpan.innerHTML = cantidadActual * precio;
}

botonSumar.addEventListener("click", () => {
    cantidadActual = cantidadActual + 1;
    actualizarPantalla();
});


botonRestar.addEventListener("click", () => {
    if (cantidadActual > 0) {
        cantidadActual = cantidadActual - 1;
        actualizarPantalla();
    }
});