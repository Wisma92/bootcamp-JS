let fecha = new Date();

let fecNac = new Date(1992, 9, 24);

let verFec = fecha > fecNac;

let diaNac = fecNac.getDate();
let mesNac = fecNac.getMonth() + 1;
let anyoNac = fecNac.getFullYear();


console.log(fecha);
console.log(fecNac);
console.log(verFec);
console.log(diaNac);
console.log(mesNac);
console.log(anyoNac);