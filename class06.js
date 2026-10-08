let yo = {
    nombre: "Francisco",
    edad: 23,
    sueldo: 1000,
    profesion: "Soporte",
}

console.log(yo);

console.log(yo.nombre);
console.log(yo.edad);
console.log(yo.sueldo);
console.log(yo.profesion);

let clientes = [
    {
        nombre: "Juan",
        edad: 22,
        profesion: "Electricista",
    },
    {
        nombre: "Pedro",
        edad: 33,
        profesion: "Gasista",
    },
    {
        nombre: "Lucas",
        edad: 44,
        profesion: "Soporte",
    },
    {
        nombre: "Maria",
        edad: 14,
        profesion: "Soporte",
    }
]

for (let i = 0; i < clientes.length; i++) {
    console.log(clientes[i].nombre);
}

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].profesion === "Soporte") {
        console.log(clientes[i]);
    }
}

let cantidadEnSoporte = 0;
for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].profesion === "Soporte") {
        cantidadEnSoporte = cantidadEnSoporte + 1;
    }
}

console.log("La cantidad de empleados en Soporte es:", cantidadEnSoporte);

let clientesSoporte = clientes.filter(function(cliente) {
    return cliente.profesion === "Soporte";   // filter siempre espera da un retorno
});
console.log(clientesSoporte);

let clientesSoporte2 = clientes.filter(cliente => cliente.profesion === "Soporte"); //arrow function, no lleva el FUNCTION
console.log(clientesSoporte2);

let edades = [15, 22, 17, 30, 14, 25, 19]
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad);

let precios = [100, 200, 300, 400, 500];
let preciosConIVA = precios.map(precio => precio + precio * 0.21);
console.log(preciosConIVA);

let clientes3 = [
    { nombre: "Juan", edad: 30, profesion: "Ventas" },
    { nombre: "Pedro", edad: 25, profesion: "Soporte" },
    { nombre: "Lucas", edad: 28, profesion: "Desarrollo" },
    { nombre: "Maria", edad: 31, profesion: "Soporte" }
];

let clientesFiltrados = clientes3.filter(cliente => cliente.profesion === "Soporte");
let resultadoFinal = clientesFiltrados.map(cliente => cliente.nombre);
console.log(resultadoFinal);

let clientes4 = [
    { nombre: "Juan", edad: 30, activo: true },
    { nombre: "Pedro", edad: 25, activo: false },
    { nombre: "Lucas", edad: 28, activo: true },
    { nombre: "Maria", edad: 31, activo: false }
];

let clientesFiltrados2 = clientes4.filter(cliente => cliente.activo);
let clientesActivos = clientesFiltrados2.map(cliente => cliente.nombre);
console.log(clientesActivos);

let clientes5 = [
    { nombre: "Juan", edad: 30, activo: true },
    { nombre: "Pedro", edad: 25, activo: false },
    { nombre: "Lucas", edad: 28, activo: true },
    { nombre: "Maria", edad: 31, activo: false }
];

let clientesActivosMayores = clientes5.filter(cliente => cliente.activo && cliente.edad > 28);
let resultadoFinal3 = clientesActivosMayores.map(cliente => cliente.nombre);
console.log(resultadoFinal3);

let clientes7 = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Pedro", edad: 25 },
    { nombre: "Lucas", edad: 28 }
];

let clienteCon28 = clientes7.find(cliente => cliente.edad === 28);
console.log(clienteCon28);  // Método	Qué hace	                Resultado
                            // filter()	Busca todos los que cumplen	Array
                            // find()	Busca el primero que cumple	Objeto/elemento
                            // map()	Transforma cada elemento	Array


let hayMayorde30 = clientes7.some(cliente => cliente.edad === 28);
console.log(hayMayorde30);

let todosMayores = clientes7.every(cliente => cliente.edad > 18);
console.log(todosMayores);

let productos = ["Auto", "Moto", "Camioneta", "Camión"];

productos.forEach(producto => {
    console.log("Producto:",producto);
});

clientes5.forEach(cliente =>{
    if (cliente.activo) {
        console.log("Cliente activo:",cliente.nombre);
    }
});

let tickets = [
    { id: 101, titulo: "Error al guardar cliente", prioridad: "alta" },
    { id: 102, titulo: "Cambiar color del botón", prioridad: "baja" },
    { id: 103, titulo: "App se cierra al iniciar", prioridad: "alta" },
    { id: 104, titulo: "Texto mal traducido", prioridad: "media" }
];

tickets.forEach(ticket => {
    if (ticket.prioridad === "alta") {
        console.log("Ticket:", ticket.id, ticket.titulo);
    }
});