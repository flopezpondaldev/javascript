// Constantes de Math

Math.E // Numero de Euler
Math.LN2 // Logaritmo natural en base 2
Math.LN10 // Logaritmo decimal
Math.LOG2E // Logaritmo base 2 de E
Math.LOG10E // Logaritmo base 10 de E
Math.PI // Numero PI
Math.SQRT1_2 // Raiz cuadrada de 1/2
Math.SQRT2 // Raiz cuadrada de 2

// Metodos matematicos

Math.abs(x) // Devuelve el valor absoluto de x
Math.sign(x) // Devuelve el signo del numero: 1 positivo, -1 negativo
Math.exp(x) // Exponenciacion. Devuelve el numero "e" elevado a "x"
Math.expm1(x) // Equivalente a Math.exp(x) - 1
Math.max(a, b, c) // Devuelve el numero mas grande de los indicados por parametro
Math.min(a, b, c) // Devuelve el numero mas pequeño de los indicados por parametro
Math.pow(base, exp) // Potenciacion. Devuelve el numero "base" elevado a "exp"
Math.sqrt(x) // Devuele la raiz cuadrada de "x"
Math.cbrt(x) // Devuelve la raiz cubica de "x"
Math.imul(a, b) // Equivalente a "a * b", pero a nivel de bits
Math.clz32(x) // Devuelve el numero de ceros a la izquierda ded "x" en binario (32 bits)

// Ejemplos

Math.abs(-5); // 5
Math.sign(-5); // -1
Math.exp(1); // e, o sea, 2.718281828459045
Math.expm1(1); // 1.718281828459045
Math.max(1, 40, 5, 15); // 40
Math.min(5, 10, -2, 0); // -2
Math.pow(2, 10); // 1020
Math.sqrt(2); // 1.4142135623730951
Math.cbrt(2); // 1.2599210498948732
Math.imul(0xffffffff, 7); // -7
// Ejemplo de clz32 (count leading zeros)
const x = 1;
"0".repeat(Math.clz32(x)) + x.toString(2); // Devuelve "00000000000000000000000000000001"

// Metodo Math.random()
Math.random() // Devuelve un numero al azar entre 0 y 1 con 16 decimales

// Obtenemos un número al azar entre [0, 1) con 16 decimales
let y = Math.random();

// Multiplicamos dicho número por el valor máximo que buscamos (5)
y = y * 5;

// Redondeamos inferiormente, quedándonos sólo con la parte entera
y = Math.floor(y);

// Metodos de Logaritmos

Math.log(x) // Devuelve el logaritmo natural en base "e" de "x"
Math.log10(x) // Devuelve el logatirmo decimal (en base 10) de "x"
Math.log2(x) // Devuelve el logaritmo binario (en base 2) de "x"
Math.log1p(x) // Devuelve el logartimo natural de (1 + x)

// Ejemplos

Math.log(2); // 0.6931471805599453
Math.log10(2); // 0.3010299956639812
Math.log2(2); // 1
Math.log1p(2); // 1.0986122886681096

// Metodos de Redondeo

Math.round(x) // Devuelve el redondeo de "x" (el entero mas cercano)
Math.ceil(x) // Devuelve el redondeo superior de "x" (el entero mas alto)
Math.floor(x) // Devuelve le redondeo inferior de "x" (el entero mas bajo)
Math.fround(x) // Devuelve el redonde de "x" (flotante con precision simple)
Math.trunc(x) // Trunca el numero "x" (devuelve solo la parte entera)

// Redondeo natural, el más cercano
Math.round(3.75); // 4
Math.round(3.25); // 3

// Redondeo superior (el más alto)
Math.ceil(3.75); // 4
Math.ceil(3.25); // 4

// Redondeo inferior (el más bajo)
Math.floor(3.75); // 3
Math.floor(3.25); // 3

// Redondeo con precisión
Math.round(3.123456789); // 3
Math.fround(3.123456789); // 3.1234567165374756

// Truncado (sólo parte entera)
Math.trunc(3.75); // 3
Math.round(-3.75); // -4
Math.trunc(-3.75); // -3

// Metodos Trigonometricos

Math.sin(x) // Seno de "x"
Math.asin(x) // Arcoseno de "x"
Math.sinh(x) // Seno hiperbolico de "x"
Math.asinh(x) // Arcoseno hiperbolico de "x"
Math.cos(x) // Coseno de "x"
Math.acos(x) // Arcoseno de "x"
Math.cosh(x) // Coseno hiperbolico de "x"
Math.acosh(x) // Arcoseno hiperbolico de "x"
Math.tan(x) // Tangente de "x"
Math.atan(x) // Arcotangente de (x)
Math.tanh(x) // Tangernte hiperbolica de "x"
Math.atanh(x) // Arcotangente hiperbolica de "x"
Math.atan2(x, y) // Arcotangente del conciente de x/y
Math.hypot(a, b) // Devuelve la raiz cuadrada de a2 + b2 + ...