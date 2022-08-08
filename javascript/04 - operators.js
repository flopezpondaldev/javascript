// Operadores Aritmeticos : para realizar operaciones matematicas.

let a = 2;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Devuelve el resto de la devision entre a y b.
console.log(a ** b); // Equivalente a Math.pow(a, b).

// Operadores de Asignacion : para guardar informacion en variables.

c = a + b; // Asignacion
a += b // a = a + b
a -= b // a = a - b
a *= b // a = a * b
a /= b // a = a / b
a %= b // a = a % b
a **= b // a = a ** b

// Operadores Unarios : se utilizan con un solo operando.

a++ // Incremento (postincremento)
a-- // Decremento (Postdecremento)
++a // Incremento previo (preincremento)
--a // Decremento previo (predecremento)
-a // Resta unaria (cambia de signo)

// Operadores de Comparacion : para realizar comprobaciones.

a == b // Operador de igualdad
a != b // Operador de desigualdad
a > b // Operador mayor que
a >= b // Operador mayor/igual que
a < b // Operador menor que
a <= b // Operador menor/igual que
a === b // Operador de identidad
a !== b // Operador no identico

// Operadores Binarios : a bajo nivel (a nivel de bits).

a & b // Operador AND
a | b // Operador OR
// Operador XOR
~a // Operador NOT
// Operador LEFT SHIFT
// Operador RIGHT SHIFT
// Operadort RIGHT SHIFT sin signo

// ----- OPERADORES de Strings ----- //

a + b // Concatenacion de texto --> Une el contenido de "a" con el contenido de "b"
+a // Conversion a numero (Suma unaria) --> Si "a" no es un numero, intenta convertirlo en un numero

// Operador de Concatenacion

// Ejemplo       Resultado                       Explicación
// ---------     ----------                      ------------
2 + 2         // 4      (Número + número)     2 + 2
"2" + "2"     // "22"   (String + string)     String(2) + String(2)
"2" + 2       // "22"   (String + número)     String(2) + 2
2 + "2"       // "22"   (Número + string)     2 + String(2)
"a" + 2       // "a2"   (String + número)     String("a") + 2

// Operador de Suma Unaria

+5              // 5      (El valor ya era numérico y positivo)
+-5             // -5     (El valor ya era numérico y negativo)
+"5"            // 5      (El valor era string y pasa a ser numérico)
+"-5"           // -5     (El valor era string y pasa a ser numérico)
+"a"            // NaN    (El valor era string pero no es un número)

// Operadores Logicos

a && b // Operador AND: Devuelve "a" si es "false", sino devuelve "b"

false && false      // false (si ninguno de los dos es true, false)
true && false       // false (idem)
false && true       // false (idem)
true && true        // true (si ambos son true, true)

0 && undefined      // 0 (se evalua como false && false, devuelve el primero)
undefined && 0      // undefined (se evalua como false && false, devuelve el primero)
55 && null          // null (se evalua como true && false, devuelve el segundo)
null && 55          // null (se evalua como false && true, devuelve el primero)
44 && 20            // 20 (se evalua como true && true, devuelve el segundo)

45 && "OK"            // "OK"
false && "OK"         // false

const doTask = () => "OK!";   // Creamos función que devuelve "OK!"
isCorrect && doTask()         // Si isCorrect es true, ejecuta doTask()

a ? b : c // Operador ternarios ?: Si "a" es "true", devuelve "b", sino devuelve "c"

// Sin operador ternario
let role;
if (name === "Manz") {
  role = "streamer";
} else {
  role = "user";
}

// Con operador ternario
const role = name === "Manz" ? "streamer" : "user";

a || b // Operador OR: Devuelve "a" si es "true", sino devuelve "b"

false || false     // false (si ninguno de los dos es true, false)
true || false      // true (desde que uno sea true, true)
false || true      // true (idem)
true || true       // true (idem)

0 || null          // null (se evalua como false || false, devuelve el segundo)
44 || undefined    // 44 (se evalua como true || false, devuelve el primero)
0 || 17            // 17 (se evalua como false || true, devuelve el segundo)
4 || 10            // 4 (se evalua como true || true, devuelve el primero)

const userName = name || "Unknown name";

"Manz" || "Unknown name"      // "Manz"
null || "Unknown name"        // "Unknown name"
false || "Unknown name"       // "Unknown name"
undefined || "Unknown name"   // "Unknown name"
0 || "Unknown name"           // "Unknown name"

a ?? b // Operador Nullish coalescing: Devuelve "b" si "a" es "null" o "undefined", sino devuelve "a"

42 || 50          // 42
42 ?? 50          // 42 (ambos se comportan igual)
false || 50       // 50 (false es un valor falsy, devuelve el segundo)
false ?? 50       // false (la parte izquierda no es null ni undefined, devuelve el primero)
0 || 50           // 50 (0 es un valor falsy, devuelve el segundo)
0 ?? 50           // 0 (la parte izquierda no es null ni undefined, devuelve el primero)
null || 50        // 50 (null es un valor falsy, devuelve el segundo)
null ?? 50        // 50 (devuelve el primero)
undefined || 50   // 50 (undefined es un valor falsy, devuelve el segundo)
undefined ?? 50   // 50 (devuelve el primero)

const data = { ammo: 0 }
data.ammo || "Sin balas";     // "Sin balas"
data.ammo ?? "Sin balas";     // 0

const data = {}
data.ammo || "Sin balas";     // "Sin balas"
data.ammo ?? "Sin balas";     // "Sin balas"

a ??= b // Operador de Asignacion de Logica Nula ??= --> Es equivalente a "a ?? (a = b)"

// Sin asignación lógica nula
if (x === null || x === undefined) {
    x = 50;
  }
  
  // Con asignación lógica nula
  x ??= 50;

const resetConfig = (data) => {
    data.life ??= 100;
    data.level ??= 1;
    return data;
}
  
resetConfig({ life: 25, level: 4 });      // { life: 25, level: 4 }
resetConfig({ life: null, level: 2 });    // { life: 100, level: 2 }
resetConfig({});                          // { life: 100, level: 1 }

data?.name // Operador de Encadenamiento Opcional ?. --> Permite intentar acceder a una propiedad, aunque su padre no exista

const user = {
    name: "Manz",
    role: "streamer",
    attrs: {
      life: 100,
      power: 25
    }
  }

user.attrs.power        // 25
user.attrs.life         // 100

user.attrs.power        // TypeError: Cannot read properties of undefined (reading 'power')
user.attrs.life         // TypeError: Cannot read properties of undefined (reading 'life')

user.attrs && user.attrs.life   // Evitamos el error (comprobamos si existe attrs antes de continuar)

user.attrs?.power       // undefined
user.attrs?.life        // undefined

!a // Operador Unario NOT: Invierte el valor. Si es "true" devuelve "false" y viceversa

!true        // false
!false       // true
!!true       // true
!!false      // false
!!!true      // false

!44          // false (se evalua como !true)
!0           // true (se evalua como !false)
!""          // true (se evalua como !0, que es !false)
!(10 || 23)  // false (se evalua como !10, que es !true)

// ----- Otros Operadores ----- //

// Operador Coma

// Sin operador coma
const a = 5;
const b = 10;

// Con operador coma
const a = 5, b = 10;

1 + 2, 1 + 1, 3 + 3                // 6 (Parece que sólo ha hecho la tercera operación, pero no)
a = 1 + 2, b = 1 + 1, c = 3 + 3    // a=3, b=2, c=6 (se han realizado todas)

alert("Hello"), alert("Hi"), alert("Bye"), "42"   // Devuelve "42", pero se ejecutan los anteriores