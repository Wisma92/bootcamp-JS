let nombre = "Wisma";
let apellido = "Mendoza";
let estudiante = nombre.concat(" ", apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitud = estudiante.length;
let primera = nombre.charAt();
let ultima = apellido.slice(-1);
let espacio = estudiante.replace(/\s+/g, "");
let contenido = estudiante.includes(nombre);


console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longitud);
console.log(primera);
console.log(ultima);
console.log(espacio);
console.log(contenido);