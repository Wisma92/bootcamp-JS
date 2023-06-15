// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10;
let factorial = 1;

while (true) {
    factorial *= num;
    num--
    if (num <= 1) {
        break;
    }
}

console.log(factorial);