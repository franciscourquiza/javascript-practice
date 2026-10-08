let nombre = "Francisco";
let edad = 18;
let sueldoActual = 1000;
let sueldoObjetivo = 5000;

console.log(
    "Mi nombre es",nombre,
    "Tengo", edad,"años y Actualmente gano",
    sueldoActual,"USD mensuales y mi objetivo es llegar a",
     sueldoObjetivo,"USD mensuales como programador"
    );

let diferencia = sueldoObjetivo - sueldoActual;
console.log(diferencia);

let cuantoFaltaParaElObjetivo = sueldoObjetivo - sueldoActual;
let sueldoAnualActual = sueldoActual * 12;
let sueldoAnualObjetivo = sueldoObjetivo * 12;

console.log("Faltan",cuantoFaltaParaElObjetivo,"USD para el sueldo objetivo");
console.log("Mi sueldo anual actual es de", sueldoAnualActual, "USD");
console.log("Mi sueldo anual objetivo es de", sueldoAnualObjetivo, "USD");

if (sueldoActual < sueldoObjetivo ) {
    console.log("Todavia no llegue a mi objetivo");
}

if (sueldoActual >= sueldoObjetivo) {
    console.log("Llegue a mi objetivo");
}

if (edad >= 18) {
    console.log("Sos mayor de edad");
}
else {
    console.log("Sos menor de edad");
}

if (edad == 18) {
    console.log("Acabas de cumplir la mayoria de edad")
} else if(edad >= 18 && edad < 65) {
    console.log("Sos mayor de edad")
} else if (edad < 18) {
    console.log("Sos menor de edad")
} else {
    console.log("Sos un adulto mayor, anciano")
}