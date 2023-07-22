let nombre = "Wisma";
let apellido = "Mendoza";

let datos = {
    nom: nombre,
    ape: apellido
}

localStorage.setItem("persona", JSON.stringify(datos));

sessionStorage.setItem("persona", JSON.stringify(datos));

function crearCookie(nombre, value) {
    var date = new Date();
    date.setTime(date.getTime()+(120000));
    var expires = "; expires="+date.toGMTString();
    
    document.cookie = nombre+"="+value+expires+"; path=/";
}

crearCookie("Micookie", datos);
