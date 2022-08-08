// if : Condiicon simple : Si ocurre algo, haz lo siguiente...

let nota = 7;

if (nota >= 6) {
    console.log('He aprobado el examen!');
}

//if/else : Condicion con alternativa : Si ocurre algo, haz esto, sino, haz lo esto otro...

nota = 8;

if (nota < 6) {
    calificacion = 'Reprobado';
} else {
    calificacion = 'Aprobado';
}

console.log('Estoy', calificacion);

// ?: : Operador ternario : Equivalente a if/else, metodo abreviado.

nota = 7;

let calificacion = nota < 6 ? 'Reprobado' : 'Aprobado';

console.log('Estoy', calificacion);

// switch : Estructura para casos especificos : Similar a varios if/else anidados.

nota = 7;

if (nota < 6) {
    calificacion = 'Insuficiente';
} else if (nota < 7) {
    calificacion = 'Suficiente';
} else if (nota < 8) {
    calificacion = "Bien";
} else if (nota <= 9) {
    calificacion = 'Notable';
} else {
    calificacion = 'Sobresaliente';
}

console.log('He obtenido un', calificacion);

// --- //

nota = 7;

switch (nota) {
    case 10:
        calificacion = 'Sobresaliente';
        break;
    case 9:
    case 8:
        calificacion = 'Notable'
        break;
    case 7:
    case 6:
        calificacion = 'Bien';
        break;
    case 5:
        calificacion = 'Suficiente'
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        calificacion: 'Insuficiente'
        break;
    default:
        // Cualquier otro caso
        calificacion = 'Nota erronea';
        break;
}

console.log('He obtenido un', calificacion);