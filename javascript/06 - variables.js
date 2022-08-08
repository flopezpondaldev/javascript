let n; // Declaramos una variable "n", pero no le asociamos ningun valor.
let b = 0; // Declaramos una variable "b", y le asociamos el valor 0.

console.log(a); // Muestra "undefined" (no hay valor guardado en la variable "a").
console.log(b); // Muestra 0 (el valor guardado en la variable "b").

// Metodo 1: Declaracion de variables de forma independiente
let c = 1;
let d = 2;
let e = 3;

// Metodo 2: Declaracion masica de variables con el mismo let
let f = 4, g = 5, h = 6;

// Metodo 3: Igual al anterior, pro mejorando la legibilidad del codigo
let i = 7,
    j = 8,
    k = 9;

let x = 40; // Inicializamos la variable "x" al valor 40.
x = 50; // Ahora, hemos declarado que pasa a contener el valor 50 en lugar de 40.

// ----- Ambitos de una variable -----
console.log(z); // Muestra "undefined", en este punto la variable "e" no existe.
let z = 40; // Ambito global.
console.log(z); // Aqui muestra 40, existe porque ya se ha inicializado anteriormente.

// Ejemplo

let a = 1;
console.log(a); // Aqui accedemos a la "zeta" global, que vale 1.

function x() {
    console.log(a); // En esta linea el valor de "jota" es undefined.
    let a = 5; // Aqui creamos una variable "jota" a nivel de funcion.

    console.log(a); // Aqui el valor de "jota" es 5 (a nivel de funcion).
    console.log(window.a); // Aqui el valor de "jota" es 1 (ambito global).
}

x(); // Aqui se ejecuta el codigo de la funcion x()
console.log(a); // En esta linea el valor de "a" es 1

// ---

var m = 1;
console.log(m); // Aquí accedemos a la "m" global, que vale 1

function x() {
  console.log(m); // En esta línea el valor de "m" es 1
  m = 5; // Aquí creamos una variable "a" en el ámbito anterior

  console.log(m); // Aquí el valor de "a" es 5 (a nivel de función)
  console.log(window.m); // Aquí el valor de "a" es 5 (ámbito global)
}

x(); // Aquí se ejecuta el código de la función x()
console.log(m); // En esta línea el valor de "a" es 5

// Opcion 1: Bucle con let
console.log("Antes: ", p); // Antes: undefined
for (let p = 0; p < 3; p++)
  console.log("- ", p); // Durante: 0, 1, 2
console.log("Despues: ", p); // Despues: undefined

// Opcion 2: Bucle con var
console.log("Antes: ", p);    // Antes: undefined
for (var p = 0; p < 3; p++)
  console.log("- ", p);       // Durante: 0, 1, 2
console.log("Después: ", p);  // Después: 3 (WTF!)

// Constantes
const NAME = "Manz";
console.log(NAME);