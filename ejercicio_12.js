function fib(num){
    let a = 1;
    let b = 1;
    let lista = [1, 1];

    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
        lista.push(c)
    }
    return lista;
    console.log(lista);
}

console.log(fib(6))