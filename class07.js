let usuario = {
    nombre: "Francisco",
    edad: 23,
    profesion: "Soporte"
};

usuario.profesion = "Desarrollador";
usuario.sueldo = 1000;
usuario.experiencia = 1;

console.log(usuario);

let usuarios = [
    { nombre: "Juan", edad: 30, activo: true },
    { nombre: "Pedro", edad: 25, activo: false },
    { nombre: "Lucas", edad: 28, activo: true }
];

let usuarioEncontrado = usuarios.find(usuario => usuario.nombre === "Pedro");
usuarioEncontrado.activo = true;
console.log(usuarios);

let clientes = [
    { nombre: "Juan", edad: 30, activo: true },
    { nombre: "Pedro", edad: 25, activo: false },
    { nombre: "Lucas", edad: 28, activo: true },
    { nombre: "Maria", edad: 31, activo: false }
];



let algunClienteActivo = clientes.some(cliente => cliente.activo);
console.log(algunClienteActivo);

let clientes2 = [
    { nombre: "Juan", edad: 30, activo: true, vehiculos: 2 },
    { nombre: "Pedro", edad: 25, activo: false, vehiculos: 1 },
    { nombre: "Lucas", edad: 28, activo: true, vehiculos: 3 },
    { nombre: "Maria", edad: 31, activo: false, vehiculos: 4 }
];

let clientesConMasDe2Vehiculos = clientes2.filter(cliente => cliente.vehiculos > 2);
console.log(clientesConMasDe2Vehiculos);

let clientesActivosConMasDe2Vehiculos = clientes2.filter(cliente => cliente.activo && cliente.vehiculos >= 2);
let nombres = clientesActivosConMasDe2Vehiculos.map(cliente => cliente.nombre);
console.log(nombres);

let ventas = [1000, 2500, 3000, 1500];
let resultado = ventas.reduce((acumulador, venta) => {
    return acumulador + venta;
}, 0);

console.log(resultado);

let ventas2 = [
    { producto: "Auto", precio: 15000 },
    { producto: "Moto", precio: 8000 },
    { producto: "Camioneta", precio: 22000 },
    { producto: "Auto", precio: 18000 }
];

totalVentas = ventas2.reduce((acumulador, venta) => {
    return acumulador + venta.precio;
}, 0);

console.log(totalVentas);

let ventas3 = [
    { producto: "Auto", precio: 15000, vendedor: "Juan" },
    { producto: "Moto", precio: 8000, vendedor: "Pedro" },
    { producto: "Camioneta", precio: 22000, vendedor: "Juan" },
    { producto: "Auto", precio: 18000, vendedor: "Maria" }
];

let buscarAJuan = ventas3.filter(venta => venta.vendedor === "Juan");
let cuantoVendioJuan = buscarAJuan.reduce((acumulador, venta) => {
    return acumulador + venta.precio;
}, 0);

console.log(cuantoVendioJuan);

let cuantoVendioJuan2 = ventas3.filter(venta => venta.vendedor === "Juan").reduce((acumulador, venta) => {
    return acumulador + venta.precio;
}, 0);

console.log(cuantoVendioJuan2); 

let ventas4 = [
    { producto: "Auto", precio: 15000, vendedor: "Juan" },
    { producto: "Moto", precio: 8000, vendedor: "Pedro" },
    { producto: "Camioneta", precio: 22000, vendedor: "Juan" },
    { producto: "Auto", precio: 18000, vendedor: "Maria" },
    { producto: "Moto", precio: 7000, vendedor: "Juan" }
];

let ventasFiltradas = ventas4.filter(venta => venta.precio > 10000 && venta.vendedor === "Juan");
let resultado2 = ventasFiltradas.reduce((acumulador, venta) => {
    return acumulador + venta.precio;
}, 0);
console.log(resultado2);


let ventas5 = [
    { vendedor: "Juan", precio: 15000 },
    { vendedor: "Pedro", precio: 8000 },
    { vendedor: "Juan", precio: 22000 },
    { vendedor: "Maria", precio: 18000 },
    { vendedor: "Pedro", precio: 12000 }
];

let cuantoVendioCadaVendedor = ventas5.reduce((acumulador, venta) => {
    if (acumulador[venta.vendedor]) {
        acumulador[venta.vendedor] = acumulador[venta.vendedor] + venta.precio;
    } else {
        acumulador[venta.vendedor] = venta.precio;
    }
    return acumulador;
}, {});

console.log(cuantoVendioCadaVendedor);

let productos = [
    { nombre: "iPhone", precio: 1000 },
    { nombre: "Samsung", precio: 800 },
    { nombre: "Xiaomi", precio: 500 }
];

let resultado6 = productos.reduce((acumulador, producto) => {
    acumulador[producto.nombre] = producto.precio;
    return acumulador;
}, {});

console.log(resultado6);


