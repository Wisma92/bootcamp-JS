let lista = ["arroz", "pasta", "aceite", "leche", "huevos"];

lista.push("Aceite de Girasol");
console.log(lista);

lista.pop("Aceite de Girasol");
console.log(lista);

let peliculas = [
    {
        titulo: "Titulo 1",
        director: "Director 1",
        fecha: new Date(2002, 4, 21)
    },
    {
        titulo: "Titulo 2",
        director: "Director 2",
        fecha: new Date(2022, 8, 15)
    },
    {
        titulo: "Titulo 3",
        director: "Director 3",
        fecha: new Date(2023, 7, 3)
    }
]

let peliculasNueva = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));
console.log(peliculasNueva);

let directores = peliculas.map(pelicula => pelicula.director);
console.log(directores);

let titulos = peliculas.map(pelicula => pelicula.titulo);
console.log(titulos);

let listaPeliculas = directores.concat(" ",titulos);
console.log(listaPeliculas);

let lista3 = [...directores, ...peliculas];
console.log(lista3);
