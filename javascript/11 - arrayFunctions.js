Array.forEach(f) // Ejecuta la funcion definida en "f" por cada uno de los elementos del array.

    const arr = ["a", "b", "c", "d"];
    
    // Con funciones por expresion
    const f = function(){
        console.log("Un elemento.");
    }
    arr.forEach(f);

    // Con funciones anonimas
    arr.forEach(function(){
        console.log("Un elemento.");
    })

    // Con funciones flecha
    arr.forEach(() => console.log("Un elemento."));

    const arr = ["a", "b", "c", "d"];

    arr.forEach((e) => console.log(e)); // Devuelve 'a' / 'b' / 'c' / 'd'
    arr.forEach((e, i) => console.log(e, i)); // Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3
    arr.forEach((e, i, a) => console.log(a[0])); // Devuelve 'a' / 'a' / 'a' / 'a'

// Comprobaciones -- BOOLEAN

Array.every(f) // Comprueba si TODOS los elementos del array cumplen la condicion de "f".

    const arr = ["a", "b", "c", "d"];
    arr.every((e) => e.length == 1); // true

    const arr = ["a", "b", "c", "d"];

    // Esta función se ejecuta por cada elemento del array
    const todos = function (e) {
    // Si el tamaño del string es igual a 1
    if (e.length == 1) return true;
    else return false;
    };

    arr.every(todos); // Le pasamos la función callback todos() a every

Array.some(f) // Comprueba si AL MENOS un elemento del array cumple la condicion de "f".

    const arr = ["a", "bb", "c", "d"];
    arr.some((e) => e.length == 2); // true

// Transformadores y Filtros

Array.map(f) // Construye un array con lo que devuelve "f" por cada elemento del array. -- ARRAY

    const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
    const nuevoArr = arr.map((e) => e.length);

    nuevoArr; // Devuelve [3, 5, 5, 9, 9]

Array.filter(f) // Filtra un array y se queda solo con los elementos que cumplen la condicion de "f". -- ARRAY

    const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
    const nuevoArr = arr.filter((e) => e[0] == "P");

    nuevoArr; // Devuelve ['Pablo', 'Pedro', 'Pancracio']

Array.flat(level) // Aplana el array al nivel "level" indicado. -- OBJECT

    const values = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

    values.flat(0);         // [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
    values.flat(1);         // [10, 15, 20, 25, 30, 35, 40, 45, [50, 55], 60];
    values.flat(2);         // [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    values.flat(Infinity);  // Idem al anterior, pero si hubieran más niveles los aplanaría todos

Array.flatMap(f) // Aplana cada elemento del array, transformandolo segun "f". Equivale a ".flat(1).map()". -- OBJECT

// Busquedas

Array.findIndex(f) // Devuelve la posicion del elemento que cumple la condicion de "f". -- NUMBER
Array.find(f) // Devuelve el elemento que cumple la condicion de "f". -- OBJECT
Array.findLastIndex(f) // Idem a "findIndex()", pero empezando a buscar desde el ultimo elemento al primero. -- OBJECT
Array.findLast(f) // Idem a "find()", pero empezando a buscar desde el ultimo elemento al primero. -- OBJECT

    const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

    names.find((e) => e.length == 5); // 'Pablo'
    names.findIndex((e) => e.length == 5); // 1

    const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

    names.findLast((e) => e.length == 5); // 'Pedro'
    names.findLastIndex((e) => e.length == 5); // 2

// Acumuladores

Array.reduce(f, initial) // Ejecuta "f" con cada elemento (de izq a der), acumulando el resultado. -- OBJECT
Array.reduceRight(f, initial) // Idem al anterior, pero en orden de derecha a izquierda. -- OBJECT

    const arr = [95, 5, 25, 10, 25];
    arr.reduce((p, e) => {
    console.log(`P=${p} e=${e}`);
    return p + e;
    });

    // P=95 e=5     (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
    // P=100 e=25   (2ª iteración: 100 + elemento 3: 25) = 125
    // P=125 e=10   (3ª iteración: 125 + elemento 4: 10) = 135
    // P=135 e=25   (4ª iteración: 135 + elemento 5: 25) = 160

    // Finalmente, devuelve 160

    const arr = [95, 5, 25, 10, 25];
    arr.reduce((p, e) => p - e); // 95 - 5 - 25 - 10 - 25. Devuelve 30
    arr.reduceRight((p, e) => p - e); // 25 - 10 - 25 - 5 - 95. Devuelve -110

    // Parametro Inicial

    const arr = [95, 5, 25, 10, 25];
    arr.reduce((p, e) => {
        console.log(`P=${p} e=${e}`);
        return p + e;
    }, 0);

    // P=0 e=95     (iteración inicial): 0 + elemento 1: 95) = 95
    // P=95 e=5     (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
    // P=100 e=25   (2ª iteración: 100 + elemento 3: 25) = 125
    // P=125 e=10   (3ª iteración: 125 + elemento 4: 10) = 135
    // P=135 e=25   (4ª iteración: 135 + elemento 5: 25) = 160

    // Finalmente, devuelve 160

// ----- ITERADORES ----- //

Array.keys() // Permite iterar un arrya e ir deviolviendo sus "indices" o posiciones (keys).
Array.values() // Permite iterar un array e ir devolviendo sus "valores" (elementos).
Array.entries() // Permite iterar un array e ir devolviendo un array "[inidce, valor]".

    const arr = ["Sonic", "Mario", "Luigi"];

    // Obtiene un array con las keys (posiciones)
    const keys = [...arr.keys()]; // [0, 1, 2]

    // Obtiene un array con los valores (elementos)
    const values = [...arr.values()]; // ['Sonic', 'Mario', 'Luigi']

    // Obtiene un array con las entradas (par key, valor)
    const entries = [...arr.entries()]; // [[0, 'Sonic'], [1, 'Mario'], [2, 'Luigi']]