const OBJETO = new Object(); // Esto es un objeto <generico> vacio.
const objeto = {}; // Esto es un objeto vacio. --> Equivalente al anterior, pero mas corto, rapido y comodo.

// Ejemplo

const player = {
    name: "Manz",
    life: 99,
    power: 10,
};

// Formas de Acceder a las propiedades del objeto player

// Notacion con puntos (preferida)
console.log(player.name); // Muestra "Manz"
console.log(player.life); // Muestra 99

// Notacion con corchetes
console.log(player["name"]); // Muestra "Manz"
console.log(player["life"]); // Muestra 99

// Añadir propiedades al objeto player

// Añadimos informacion posteriormente (mediante notacion con puntos)
player.lastname = "Lopez";

// Añadimos informacion posteriormente (mediante notacion con corchetes)
player["lastname"] = "Lopez";

// METODOS de Objetos
const objet = {
    name: "Manz",
    saludar: function () {
        return "Hola";
    }
}

object.name // Es una variable (propiedad), devuelve "Manz"
object.saludar() // Es una funcion (metodo), se ejecuta y devuelve "Hola"

const objects = {};
objects.toString(); // Devuelve '[object Object]' (Un objeto de tipo Object)

const number = 42;      // Tipo Number
number.toString();      // Devuelve "42"

const booleano = true;  // Tipo Boolean
booleano.toString();    // Devuelve "true"

const regexp = /.+/;    // Tipo RegExp
booleano.toString();    // Devuelve "/.+/"

const numbers = 42.512;
numbers.toString();          // Devuelve '42.512'
numbers.toLocaleString();    // Devuelve '42,512'