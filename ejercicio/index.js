const mensaje = val => {
    if (typeof val === "number") {
        return val * 2
    }

    throw new Error("Mensaje de error personalizado")
}

console.log(mensaje(8))

const valor = "2"

try {
    const doble = mensaje(valor)
    console.log(doble);
} catch {
    console.log("Error: Debe ser un número")
}