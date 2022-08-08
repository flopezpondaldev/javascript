// Literales
const texto1 = "¡Hola a todos!";
const texto2 = "Otro mensaje de texto";

// Objeto
const texto3 = new String("¡Hola a todos!");
const texto4 = new String("Otro mensaje de texto");

// Propiedades --> .lenght es la unica

"Hola".length; // 4
"Adiós".length; // 5
"".length; // 0
"¡Yeah!".length; // 6

// Metodos de posiciones

"string".charAt(pos) // Devuelve el caracter en la posicion "pos" de la variable []
"string".concat(str1, str2) // Devuelve el texto de la variable unido a "str1", a "str2", a ... +
"string". indexOf(str) // Devuelve la primera posicion del texto "str"
"string".indexOf(str, from) // Idem al anterior, partiendo desde la posicion "form"
"string".lastIndexOf(str, from) // Idem al anterior, pero devuelve la ultima posicion

// Ejemplos

"Manz".charAt(0); // 'M'
"Manz".charAt(1); // 'a'
"Manz".charAt(10); // ''
"Manz"[0]; // 'M'
"Manz"[1]; // 'a'
"Manz"[10]; // undefined

"Manz".concat("i", "to"); // 'Manzito'
"Manz" + "i" + "to"; // 'Manzito'
"Manz" + 4 + 5; // 'Manz45'
10 + 5 + 4 + 5; // 24

"LenguajeJS, página de Javascript".indexOf("n"); // 2
"LenguajeJS, página de Javascript".indexOf("n", 3); // 16
"LenguajeJS, página de Javascript".indexOf("n", 17); // -1
"LenguajeJS, página de Javascript".lastIndexOf("n"); // 16
"LenguajeJS, página de Javascript".lastIndexOf("n", 3); // 2

// Metodos para Busquedas

"string".startsWith(s, from) // Comprueba si el texto comienza por "s" desde la posicion "from" -- BOOLEAN
"string".endsWith(s, to) // Comprueba si el texto hasta la posicion "to", termina por "s" -- BOOLEAN
"string".includes(s, from) // Comprueba si el texto contiene el subtexto "s" desde la posicion "from" -- BOOLEAN
"string".search(regex) // Busca si hay un patron que encaje con "regex" y devuelve la posicion -- NUMBER
"string".match(regex) // Idem a la anterior, pero devuelve las coincidencias encontradas -- ARRAY

// Ejemplos

"Manz".startsWith("M"); // true ('Manz' empieza por 'M')
"Manz".startsWith("a", 1); // true ('anz' empieza por 'a')
"Manz".endsWith("o"); // false ('Manz' no acaba en 'o')
"Manz".endsWith("n", 3); // true ('Man' acaba en 'n')
"Manz".includes("an"); // true ('Manz' incluye 'an')
"Manz".includes("M", 1); // false ('anz' no incluye 'M')

// La expresión regular /o/g busca globalmente las "o" en el texto

"Hola a todos".search(/o/g); // 1, porque la primera "o" está en la posición 1
"Hola a todos".match(/o/g); // ['o', 'o', 'o'], las 3 "o" que encuentra

// Metodos para Transformar

"string".repeat(n) // Devuelve el texto de la variable repetido "n" vaces
"string".toLowerCase() // Devuelve el texto de la variable en minusculas
"string".toUpperCase() // Devuelve el texto de la variable en mayusculas
"string".trim() // Devuelve el texto sin espacios a la izquierda y derecha
"string".trimStart // Devuelve el texto sin espacios a la izquierda
"string".trimEnd // Devuelve el texto sin espacion a la derecha
"string".replace(str | regex | newstr) // Reemplaza la primera aparicion del texto "str" por "newstr"
"string".replaceAll(str | regex | newstr) // Reemplaza todas las apariciones del texto "str" por "newstr"
"string".replace(str | regex, func) // Idem a .replace(), pero reemplazando por la devolucion de "func"
"string".substr(ini, len) // Devuelve el subtexto desde la posicion "ini" hasta "ini + len"
"string".substring(ini, end) // Devuelve el subtexto desde la posicion "ini" hasta "end"
"string".slice(ini, end) // Idem a .substr() con leves diferencias
"string".split(sep|regex, limit) // Separa el texto usando "sep" como separador, en "limit" fragmentos
"string".padStart(len, str) // Rellena el principio de la cadena con "str" hasta llegar al tamaño "len"
"string".padEnd(len, str) // Rellena el finakl de la cadena con "str" hasta llegar al tamaño "len"

// Ejemplos

"Na".repeat(5); // 'NaNaNaNaNa'
"MANZ".toLowerCase(); // 'manz'
"manz".toUpperCase(); // 'MANZ'
"    Hola  ".trim(); // 'Hola'

"Amigo".replace("A", "Ene"); // 'Enemigo'
"Dispara".replace("a", "i"); // 'Dispira' (sólo reemplaza la primera aparición)
"Dispara".replace(/a/g, "i"); // 'Dispiri' (reemplaza todas las ocurrencias)

"Submarino".substr(3); // 'marino' (desde el 3 en adelante)
"Submarino".substr(3, 1); // 'm'      (desde el 3, hasta el 3+1)
"Submarino".substring(3); // 'marino' (desde el 3 en adelante)
"Submarino".substring(3, 6); // 'mar'    (desde el 3, hasta el 6)

"1.2.3.4.5".split("."); // ['1', '2', '3', '4', '5'] (5 elementos)
"Hola a todos".split(" "); // ['Hola', 'a', 'todos'] (3 elementos)
"Código".split(""); // ['C', 'ó', 'd', 'i', 'g', 'o'] (6 elementos)

"5".padStart(6, "0"); // '000005'
"A".padEnd(5, "·"); // 'A····'

// Metodos UNICODE

String.fromCharCode(num) // Devuelve el caracter del valor "unicode" indicado en "num"
"string".charCodeAt(pos) // Devuelve el valor "unicode" del caracter de la posicion "pos" del texto

String.fromCharCode(65); // 'A' (65 es el código U+0041 en decimal)
String.fromCharCode(0x0041); // 'A' (0x0041 es el código U+0041 en hexadecimal)
"A".charCodeAt(0); // 65
"A".charCodeAt(0).toString(16); // 41

// El valor unicode del emoji 🐦 es (55357, 56358)
emoji = "🐦";
codigos = [];

for (let i = 0; i < emoji.length; i++) {
  codigos.push(emoji.charCodeAt(i));
}

String.fromCharCode(...codigos); // '🐦' (Usamos desestructuración, ver más adelante)

String.fromCharCode(55357, 56358); // '🐦'
String.fromCharCode(55357, 56359); // '🐧'
String.fromCharCode(55357, 56360); // '🐨'
("\u0041"); // 'A'
("\ud83d\udc28"); // '🐨'

// Interpolacion de Variables

const sujeto = "frase";
const adjetivo = "concatenada";
"Una " + sujeto + " bien " + adjetivo; // 'Una frase bien concatenada'

const sujet = "frase";
const adjetiv = "concatenada";
`Una ${sujet} mejor ${adjetiv}`; // 'Una frase mejor concatenada'