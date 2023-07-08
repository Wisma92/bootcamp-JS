function sin_parametros (valor = true){
    return console.log(valor);
}

sin_parametros();

setTimeout(() => {
    console.log("Hola soy una promesa");
}, 5000);

function* generaPares() {
    let id = 0;
    while(true) {
        id+=2
        if (id === 10) {
            return id
        }
    yield id
    }
}

const gen = generaPares();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());