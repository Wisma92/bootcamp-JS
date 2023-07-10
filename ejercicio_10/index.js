import { suma, multiplica } from "./controller.js"

console.log(suma(1, 2));
console.log(suma(4, 5));

console.log(chalk.green(multiplica(suma(1, 2), suma(4, 5))))