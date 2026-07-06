# Carrito de Compras Dinamico

Este es un proyecto web interactivo muy sencillo que simula la compra de un producto (Laptop Gamer). Permite sumar y restar cantidades en tiempo real y calcula el precio total automaticamente de forma dinamica.

## Tecnologias Usadas

* HTML5: Para armar la estructura visual de la tarjeta de producto y los botones.
* JavaScript: Para realizar los calculos matematicos (multiplicacion del precio por cantidad) y actualizar la pantalla al hacer clic.

## Como Funciona

1. Precio Inicial: Al cargar la pagina, se asigna el precio base de la laptop ($400.000) mediante JavaScript.
2. Interactividad (onclick): Los botones + y - activan funciones en JavaScript directamente desde el HTML.
3. Calculo Automatico: Cada vez que cambia la cantidad, el sistema multiplica cantidad actual por precio y refresca el "Total a pagar" al instante.
4. Control de Errores: Tiene un seguro (if) para evitar que las cantidades bajen de cero.
