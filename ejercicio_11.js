class estudiante {
    nombre = "Rafael"
    asignatura = ["JavaScript","HTML", "CSS"]
    
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
    }
}

const estud = new estudiante();
console.log(estud.obtenDatos())
