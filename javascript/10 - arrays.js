// Forma tradicional
const array1 = new Array("a", "b", "c");

// Mediante literales (preferida)
const array2 = ["a", "b", "c"]; // Array con 3 elementos
const empty = []; // Array vacío (0 elementos)
const mixto = ["a", 5, true]; // Array mixto (string, number, boolean)

// Acceso a elementos
array.lenght // Devuelve el numero de elementos del array
array[pos] // Operador que devuelve el elemento numero "pos" del array

const array = ["a", "b", "c"];

array[0]; // 'a'
array[2]; // 'c'
array[5]; // undefined

// Añadir o Eliminar Elementos del Array
array.push(obj1, obj2) // Añade uno o varios elementos al final del array. Devuelve tamaño del array
array.pop() // Elimina y devuelve el ultimo elemento del array
array.unshift(obj1, obj2) // Añade uno o varios elementos al inicio del array. Devuelve tamaño del array
array.shift() // Elimina y devuelve el primer elemento del array
array.concat(obj1, objt2) // Concatena los elementos (o elementos de los arrays) pasados por parametro

const array = ["a", "b", "c"]; // Array inicial

array.push("d"); // Devuelve 4. Ahora array = ['a', 'b', 'c', 'd']
array.pop(); // Devuelve 'd'. Ahora array = ['a', 'b', 'c']

array.unshift("Z"); // Devuelve 4. Ahora array = ['Z', 'a', 'b', 'c']
array.shift(); // Devuelve 'Z'. Ahora array = ['a', 'b', 'c']

const array = [1, 2, 3];
array.push(4, 5, 6); // Devuelve 6. Ahora array = [1, 2, 3, 4, 5, 6]
array.push([7, 8, 9]); // Devuelve 7. Ahora array = [1, 2, 3, 4, 5, 6, [7, 8, 9]]

const array = [1, 2, 3];
array = array.concat(4, 5, 6); // Devuelve 6. Ahora array = [1, 2, 3, 4, 5, 6]
array = array.concat([7, 8, 9]); // Devuelve 9. Ahora array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Creacion de Arrays
array.slice(ini, end) // Devuelve los elementos desde la posicion "ini" hasta "end" (excluido)
array.splice(ini, num) // Elimina y devuelve "num" elementos desde posicion "ini"
array.splice(ini, num, o1, o2) // Idem. Ademas inserta o1, o2... en la posicion "ini"
array.join(sep) // Une los elementos del array por "sep" en un string
Array.from(o, f, thisVal) // Crea un array a partir de "o" (algo similar a un array)

const array = ["a", "b", "c", "d", "e"];

// .slice() no modifica el array
array.slice(2, 4); // Devuelve ['c', 'd']. El array no se modifica.

// .splice() si modifica el array
array.splice(2, 2); // Devuelve ['c', 'd']. Ahora array = ['a', 'b', 'e']
array.splice(1, 0, "z", "x"); // Devuelve []. Ahora array = ['a', 'z', 'x', 'b', 'e']

const a = [1, 2, 3, 8, 9, 10];
a.slice(0, 3).concat([4, 5, 6, 7], a.slice(3, 6)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const a = [1, 2, 3, 8, 9, 10];
a.splice(3, 0, ...[4, 5, 6, 7]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array = ["a", "b", "c"];

array.join("->"); // Devuelve 'a->b->c'
array.join("."); // Devuelve 'a.b.c'
"a.b.c".split("."); // Devuelve ['a', 'b', 'c']
"5.4.3.2.1".split("."); // Devuelve ['5', '4', '3', '2', '1']

Array.from("hola"); // ['h', 'o', 'l', 'a']
Array.from(document.querySelector("body")); // [body.document]

// BUSQUEDA y COMPROBACION
Array.isArray(obj) // Comprueba si "obj" es un array. Devuelve "true" o "false" -- BOOLEAN
array.includes(obj, from) // Comprueba si "obj" es uno de los elementos incluidos en el array -- BOOLEAN
array.indexOf(obj, from) // Devuelve la posicion de la primera aparicion de "obj" desde "from" -- NUMBER
array.lastIndexOf(obj, from) // Devuelve la posicion de la ultima aparicino de "obj" desde "from"

const array = [5, 10, 15, 20, 25];

Array.isArray(array); // true
array.includes(10); // true
array.includes(10, 2); // false
array.indexOf(25); // 4
array.lastIndexOf(10, 0); // -1

// MODIFICACION de Arrays
array.copyWithin(pos, ini, end) // Devuelve ARRAY, copiando en "pos" los items desde "ini" a "end"
array.fill(obj, ini, end) // Devuelve un ARRAY relleno de "obj" desde "ini" hasta "end"

const array = ["a", "b", "c", "d", "e", "f"];

// Estos métodos modifican el array original
array.copyWithin(5, 0, 1); // Devuelve ['a', 'b', 'c', 'd', 'e', 'a']
array.copyWithin(3, 0, 3); // Devuelve ['a', 'b', 'c', 'a', 'b', 'c']
array.fill("Z", 0, 5); // Devuelve ['Z', 'Z', 'Z', 'Z', 'Z', 'c']

// ORDENACIONES
array.reverse() // Invierte el orden de elementos del array
array.sort() // Ordena los elementos del array bajo un criterio de "ordenacion alfabetica"
array.sort(func) // Ordena los elementos del array bajo un criterio de ordenacion "func"

const array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];

// Ojo, cada línea está modificando el array original
array.sort(); // ['Alberto', 'Ana', 'Bernardo', 'Mauricio', 'Zoe']
array.reverse(); // ['Zoe', 'Mauricio', 'Bernardo', 'Ana', 'Alberto']

const array = [1, 8, 2, 32, 9, 7, 4];

array.sort(); // Devuelve [1, 2, 32, 4, 7, 8, 9], que NO es el resultado deseado

// Funcion de COMPARACION
const array = [1, 8, 2, 32, 9, 7, 4];

// Función de comparación para ordenación natural
const fc = function (a, b) {
  return a - b;
};

array.sort(fc); // Devuelve [1, 2, 4, 7, 8, 9, 32], que SÍ es el resultado deseado