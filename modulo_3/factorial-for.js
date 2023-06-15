// Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let num = 10;
let fact = 1;

for(let i = num; i > 0 ; i--){
    fact *= i;
}
console.log(fact);