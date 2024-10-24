
/*
let contador = 1;  // Empezamos con x0 y y0

// Función para agregar un nuevo punto dinámicamente
function agregarPunto() {
    const tabla = document.getElementById('tablaPuntos');

    const nuevaFila = document.createElement('tr');
    
    const celdaX = document.createElement('td');
    const inputX = document.createElement('input');
    inputX.type = 'number';
    inputX.step = 'any';
    inputX.id = `x${contador}`;
    celdaX.appendChild(inputX);

    const celdaY = document.createElement('td');
    const inputY = document.createElement('input');
    inputY.type = 'number';
    inputY.step = 'any';
    inputY.id = `y${contador}`;
    celdaY.appendChild(inputY);

    nuevaFila.appendChild(celdaX);
    nuevaFila.appendChild(celdaY);
    tabla.appendChild(nuevaFila);

    contador++;  // Incrementamos el contador para que el próximo punto tenga el siguiente número
}

// Función para quitar el último punto añadido
function quitarPunto() {
    if (contador > 1) {
        const tabla = document.getElementById('tablaPuntos');
        tabla.deleteRow(contador);  // Elimina la última fila
        contador--;  // Reducimos el contador
    } else {
        alert('No se pueden eliminar más puntos. Debe haber al menos un punto.');
    }
}

function calcularLagrange() {
    let puntosX = [];
    let puntosY = [];

    // Obtener todos los puntos ingresados
    for (let i = 0; i < contador; i++) {
        const x = parseFloat(document.getElementById(`x${i}`).value);
        const y = parseFloat(document.getElementById(`y${i}`).value);

        if (!isNaN(x) && !isNaN(y)) {
            puntosX.push(x);
            puntosY.push(y);
        }
    }

    const valorX = parseFloat(document.getElementById('valorX').value);

    if (isNaN(valorX)) {
        alert('Por favor, ingrese un valor válido para X a interpolar.');
        return;
    }

    // Llamar a la función para calcular la interpolación de Lagrange
    const resultado = interpolacionLagrange(puntosX, puntosY, valorX);
    document.getElementById('resultado').innerHTML = `El valor interpolado en X=${valorX} es: ${resultado}`;
}

// Función para realizar la interpolación de Lagrange
function interpolacionLagrange(x, y, valorX) {
    let suma = 0;
    for (let i = 0; i < x.length; i++) {
        let producto = y[i];
        for (let j = 0; j < x.length; j++) {
            if (i !== j) {
                producto *= (valorX - x[j]) / (x[i] - x[j]);
            }
        }
        suma += producto;
    }
    return suma;
}
*/
/*bueni arriba*/

/*con pasos abajo 

let contador = 1;  // Empezamos con x0 y y0

// Función para agregar un nuevo punto dinámicamente
function agregarPunto() {
    const tabla = document.getElementById('tablaPuntos');

    const nuevaFila = document.createElement('tr');
    
    const celdaX = document.createElement('td');
    const inputX = document.createElement('input');
    inputX.type = 'number';
    inputX.step = 'any';
    inputX.id = `x${contador}`;
    celdaX.appendChild(inputX);

    const celdaY = document.createElement('td');
    const inputY = document.createElement('input');
    inputY.type = 'number';
    inputY.step = 'any';
    inputY.id = `y${contador}`;
    celdaY.appendChild(inputY);

    nuevaFila.appendChild(celdaX);
    nuevaFila.appendChild(celdaY);
    tabla.appendChild(nuevaFila);

    contador++;  // Incrementamos el contador para que el próximo punto tenga el siguiente número
}

// Función para quitar el último punto añadido
function quitarPunto() {
    if (contador > 1) {
        const tabla = document.getElementById('tablaPuntos');
        tabla.deleteRow(contador);  // Elimina la última fila
        contador--;  // Reducimos el contador
    } else {
        alert('No se pueden eliminar más puntos. Debe haber al menos un punto.');
    }
}

function calcularLagrange() {
    let puntosX = [];
    let puntosY = [];

    // Obtener todos los puntos ingresados
    for (let i = 0; i < contador; i++) {
        const x = parseFloat(document.getElementById(`x${i}`).value);
        const y = parseFloat(document.getElementById(`y${i}`).value);

        if (!isNaN(x) && !isNaN(y)) {
            puntosX.push(x);
            puntosY.push(y);
        }
    }

    const valorX = parseFloat(document.getElementById('valorX').value);

    if (isNaN(valorX)) {
        alert('Por favor, ingrese un valor válido para X a interpolar.');
        return;
    }

    // Limpiamos los pasos previos
    document.getElementById('tablaPasos').innerHTML = '';

    // Llamar a la función para calcular la interpolación de Lagrange
    const resultado = interpolacionLagrange(puntosX, puntosY, valorX);
    document.getElementById('resultado').innerHTML = `El valor interpolado en X=${valorX} es: ${resultado}`;
}

// Función para realizar la interpolación de Lagrange y registrar el paso a paso
function interpolacionLagrange(x, y, valorX) {
    let suma = 0;
    let pasosHTML = '<tr><th>Índice</th><th>Producto L(x)</th></tr>';

    for (let i = 0; i < x.length; i++) {
        let producto = y[i];
        let pasoProducto = `L(${i}) = ${y[i]}`;

        for (let j = 0; j < x.length; j++) {
            if (i !== j) {
                producto *= (valorX - x[j]) / (x[i] - x[j]);
                pasoProducto += ` * ((X - ${x[j]}) / (${x[i]} - ${x[j]}))`;
            }
        }

        suma += producto;
        pasosHTML += `<tr><td>${i}</td><td>${pasoProducto}</td></tr>`;
    }

    // Mostrar los pasos en la tabla
    document.getElementById('tablaPasos').innerHTML = pasosHTML;

    return suma;
}
*/
let contador = 1;  // Empezamos con x0 y y0

// Función para agregar un nuevo punto 
function agregarPunto() {
    const tabla = document.getElementById('tablaPuntos');

    const nuevaFila = document.createElement('tr');
    
    const celdaX = document.createElement('td');
    const inputX = document.createElement('input');
    inputX.type = 'number';
    inputX.step = 'any';
    inputX.id = `x${contador}`;
    celdaX.appendChild(inputX);

    const celdaY = document.createElement('td');
    const inputY = document.createElement('input');
    inputY.type = 'number';
    inputY.step = 'any';
    inputY.id = `y${contador}`;
    celdaY.appendChild(inputY);

    nuevaFila.appendChild(celdaX);
    nuevaFila.appendChild(celdaY);
    tabla.appendChild(nuevaFila);

    contador++;  
}

// Función para quitar el último punto añadido
function quitarPunto() {
    if (contador > 1) {
        const tabla = document.getElementById('tablaPuntos');
        tabla.deleteRow(contador);  
        contador--;  
    } else {
        alert('No se pueden eliminar más puntos. Debe haber al menos un punto.');
    }
}

// Funcion del metodo Ingerpolacion de Lagrange
function calcularLagrange() {
    let puntosX = [];
    let puntosY = [];

    // Obtener  los puntos ingresados
    for (let i = 0; i < contador; i++) {
        const x = parseFloat(document.getElementById(`x${i}`).value);
        const y = parseFloat(document.getElementById(`y${i}`).value);

        if (!isNaN(x) && !isNaN(y)) {
            puntosX.push(x);
            puntosY.push(y);
        }
    }

    const valorY = parseFloat(document.getElementById('valorY').value);

    if (isNaN(valorY)) {
        alert('Por favor, ingrese un valor válido para Y a interpolar.');
        return;
    }

    // Limpiar la tabla de pasos 
    document.getElementById('tablaPasos').innerHTML = ''; 

    // Llamar a la función para calcular la interpolación de Lagrange y mostrar los pasos
    const resultado = interpolacionLagrange(puntosX, puntosY, valorY);
    document.getElementById('resultado').innerHTML = `El valor interpolado en Y=${valorY} es: ${resultado}`;

    // MathJax para renderizar las fórmulas
    MathJax.typeset();
}

// Función para realizar la interpolación de Lagrange con visualización de los pasos
function interpolacionLagrange(x, y, valorY) {
    let suma = 0;
    
    for (let i = 0; i < x.length; i++) {
        let producto = y[i];
        let pasosProducto = `L(${i}) = ${y[i]}`;

        for (let j = 0; j < x.length; j++) {
            if (i !== j) {
                const operacion = `\\frac{(X - ${x[j]})}{(${x[i]} - ${x[j]})}`;
                producto *= (valorY - x[j]) / (x[i] - x[j]);

                // Mostrar el paso usando Math.js
                agregarPaso(i, operacion, producto);
                pasosProducto += ` \\times ${operacion}`;
            }
        }

        suma += producto;

        // Agregar los pasos del producto acumulado para L(i)
        agregarPaso(i, pasosProducto, producto);
    }
    
    return suma;
}

// Función para agregar un paso a la tabla
function agregarPaso(indice, operacion, resultadoParcial) {
    const tablaPasos = document.getElementById('tablaPasos');
    const nuevaFila = document.createElement('tr');

    const celdaIndice = document.createElement('td');
    celdaIndice.textContent = `L(${indice})`;
    
    const celdaOperacion = document.createElement('td');
    celdaOperacion.innerHTML = `\\(${operacion}\\)`;  

    const celdaResultado = document.createElement('td');
    celdaResultado.textContent = resultadoParcial;

    nuevaFila.appendChild(celdaIndice);
    nuevaFila.appendChild(celdaOperacion);
    nuevaFila.appendChild(celdaResultado);

    tablaPasos.appendChild(nuevaFila);
}
