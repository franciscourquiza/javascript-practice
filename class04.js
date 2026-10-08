// Una función es básicamente: Un bloque de código que guardamos para poder ejecutarlo cuando queramos.

function mostrarMensaje() {
    console.log("Estoy aprendiendo JavaScript");
}

mostrarMensaje();

function saludar(nombre) {
    console.log("Hola", nombre);
}

saludar("fran");
saludar("valen");
saludar("mclovin");

// El parámetro nombre es como una cajita vacía que espera recibir un valor.

function calcularDiferencia(sueldoActual, sueldoObjetivo) {
    console.log("Para el sueldo objetivo faltan", sueldoObjetivo - sueldoActual,"USD");
}

calcularDiferencia(1000, 5000);


function calcularDiferencia2(sueldoActual, sueldoObjetivo) {
    let diferencia = sueldoObjetivo - sueldoActual;
    return  diferencia;
}

console.log("Para el sueldo objetivo faltan USD", calcularDiferencia2(1000, 5000));