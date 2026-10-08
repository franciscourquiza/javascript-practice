let clientes = ["Juan","Pedro","Lucas","Maria","Carlos"];

console.log(clientes);
console.log(clientes[0]);
console.log(clientes[1]);
console.log(clientes[2]);
console.log(clientes[3]);

console.log(clientes.length);
console.log(clientes[clientes.length-1]);

clientes.push("Franco");
console.log(clientes);
console.log(clientes.length);
console.log(clientes[clientes.length-1]);

let clienteEliminado = clientes.pop();
console.log("Se eliminó: ", clienteEliminado);
console.log(clientes);

for (let i = 0; i < clientes.length; i++) {
    console.log(clientes[i]);
}

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i] === "Lucas") {
        console.log("Encontre a Lucas");
    }
}

let clienteBuscado = "Pedro";
let encontrado = false;

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i] === clienteBuscado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("Cliente encontrado");
} else {
    console.log("Cliente no encontrado");
}