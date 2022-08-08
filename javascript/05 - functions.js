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

// ----- CREACION de FUNCIONES -----

// Por declaracion (la mas usada por principiantes)
function nombre(p1, p2){}

function saludar() {
    return "Hola";
}

saludar(); // "Hola"
typeof saludar; // "function"

// Por expresion (la mas habitual en programadores con experiencia)
let nombre = function(p1, p2){}

// El segundo "saludar" (nombre de la función) se suele omitir: es redundante
const saludo = function saludar() {
    return "Hola";
  };
  
  saludo(); // 'Hola'

// Mediante constructor de  objeto (no recomendada)
new Function(p1, p2, code);

const saludar = new Function("return 'Hola';");

saludar(); // 'Hola'

// Funciones Anonimas

// Función anónima "saludo"
const saludos = function () {
    return "Hola";
  };
  
  saludos; // ƒ () { return 'Hola'; }
  saludos(); // 'Hola'

// CALLBACKS

// fB = Función B
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fA = Función A
  const fA = function (callback) {
    callback();
  };
  
  fA(fB);

  // fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fError = Función Error (callback)
  const fError = function () {
    console.error("Error");
  };
  
  // fA = Función A
  const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
  };
  
  fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no

  // fA = Función A
const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
  };
  
  fA(
    function () {
      console.log("Función B ejecutada.");
    },
    function () {
      console.error("Error");
    }
  );

  // Funciones Autoejecutables

  // Función autoejecutable
(function () {
    console.log("Hola!!");
  })();
  
  // Función autoejecutable con parámetros
  (function (name) {
    console.log(`¡Hola, ${name}!`);
  })("Manz");

  const f = (function (name) {
    return `¡Hola, ${name}!`;
  })("Manz");
  
  f; // '¡Hola, Manz!`
  typeof f; // 'string'

  // CLAUSURAS

// Clausura: Función incr()
const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
  typeof incr; // 'function'
  incr(); // 1
  incr(); // 2
  incr(); // 3

  // Arrow Functions
  const func = function () {
    return "Función tradicional.";
  };
  
  const func = () => {
    return "Función flecha.";
  };

  const func = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
  const func = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
  const func = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b

// Ambito lexico de THIS

// Si son funciones globales
const a = function () {
    console.log(this);
  };
  const b = () => {
    console.log(this);
  };
  
  a(); // Window
  b(); // Window

  padre = {
    a: function () {
      console.log(this);
    },
    b: () => {
      console.log(this);
    },
  };
  
  padre.a(); // padre
  padre.b(); // Window