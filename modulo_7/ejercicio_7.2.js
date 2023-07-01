let datos = {
    nombre: "Rafael",
    apaellido: "Mendoza",
    edad: 30,
    altura: 1.76,
    soyDesarrollador: true,
}

let miEdad = datos.edad;
console.log(miEdad);

let lista = [
    datos,
    amigo1 = {
        nombre: "Yaneth",
        apaellido: "Rodriguez",
        edad: 43,
        altura: 1.58,
        soyDesarrollador: true,
    },
    amigo2 = {
        nombre: "Dilaurys",
        apaellido: "Ruiz",
        edad: 283,
        altura: 1.58,
        soyDesarrollador: false,
    }
]

const lista2 = lista.sort((a, b) => b.edad - a.edad);
console.log(lista2);

console.log(lista);
