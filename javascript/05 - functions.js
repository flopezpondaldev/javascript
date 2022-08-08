function saludar() {
    console.log('Hola, soy una funcion');
}

saludar();

// Ejemplo
for (i = 0; i < 11; i++) {
    console.log('1 x', i, '=', 1 * i);
}

function tablaDelUno() {
    for (i = 0; i <= 10; i++) console.log('1 x', i, '=', 1 * i);
}

for (intento = 0; intento < 3; intento++) tablaDelUno();

// Parametros
function tablaDelUno(hasta) {
    for (i = 0; i <+ hasta; i++) console.log('1 x', i, '=', 1 * i);
}

tablaDelUno(10);
tablaDelUno(5);

// Parametros multiples
function tablaMultiplicar(tabla, hasta) {
    for (i = 0; i <= hasta; i++) console.log(table, 'x', i, '=', tabla * i);
}

tablaMultiplicar(1, 10); // Tabla del 1
tablaMultiplicar(5, 10); // Tabla del 5

// Parametros por defecto
function tablaMultiplicar(tabla, hasta = 10) {
    for (i = 0; i <= hasta; i++) console.log(tabla, 'x', i, '=', tabla * i);
}

tablaMultiplicar(2); // Esta tabla llegara hasta el numero 10
tablaMultiplicar(2, 15); // Esta tabla llegara hasta el numero 15

// Devolucion de valores
function sumar(a, b) {
    return a + b; // Devolvemos la suma de a y b al exterior de la funcion
    console.log('Ya he realizado la suma.'); // Este codigo nunca se ejecutara
}

let resultado = sumar(5, 5); // Se guarda 10 en la variable resultado