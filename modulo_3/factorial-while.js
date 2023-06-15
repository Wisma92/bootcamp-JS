// Este archivo debe calcular el factorial de 10 utilizando un bucle while

let num = 10;
let control = 10;
let factorial = 1;
let i = 0;

while (control > i) {
    i++
    factorial *= num;
    num--
}

console.log(factorial);