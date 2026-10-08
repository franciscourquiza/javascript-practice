let edad = 23;
let tieneCuenta = true;

if (edad >= 18 && tieneCuenta !== false) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

let tieneEntrada = false;
let esInvitado = true;

if (tieneEntrada || esInvitado) {
    console.log("Puede entrar");
} else {
    console.log("No puede entrar");
}

let estaBloqueado = false;
let tienePermiso = true;

if (!estaBloqueado && tienePermiso) {
    console.log("Puede acceder");
}   else {
    console.log("No puede acceder");
}