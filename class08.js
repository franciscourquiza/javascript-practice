let buscarUsuario = new Promise((resolve, reject) =>{
    resolve("Usuario encontrado exitosamente"); 
});

buscarUsuario.then(resultado => {
    console.log(resultado);
});

let usuarioCargado = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos del usuario cargados correctamente");
    }, 2000);
});

async function cargarUsuario() {
    let resultado2 = await usuarioCargado;
    console.log(resultado2);
}

// cargarUsuario();


let obtenerUsuario = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({ nombre: "Francisco", edad: 23 });
    }, 2000);

});

let obtenerPedidos = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(["Pedido 1", "Pedido 2", "Pedido 3"]);
    }, 3000);

});

async function cargarDatos() {
    let usuario = await obtenerUsuario;
    let pedidos = await obtenerPedidos;
    console.log(usuario, pedidos);
}

// cargarDatos();

async function cargarDatos2() {
    let [usuario, pedidos] = await Promise.all([
        obtenerUsuario,
        obtenerPedidos,
    ]);
    console.log(usuario);
    console.log(pedidos);
}

// cargarDatos2();

let buscarUsuarioPromise = new Promise((resolve, reject) => {
    let usuarioExiste  = false;

    if (usuarioExiste) {
        resolve("Usuario encontrado");
    } else {
        reject("Error al buscar el usuario");
    }
});

async function buscarUsuario2() {
    try {
        let resultado = await buscarUsuarioPromise;
        console.log(resultado);
    } catch (error) {
        console.log("Error:", error);
    }
}

buscarUsuario2();

let buscarCliente = new Promise((resolve, reject) => {
    let clienteExiste = true;

    if (clienteExiste) {
        resolve({ nombre: "Francisco", edad: 23});
    } else {
        reject("Cliente no encontrado");
    }
});

async function obtenerCliente() {
    try {
        let resultado2 = await buscarCliente;
        console.log("Cliente:", resultado2.nombre);
        console.log("Edad:", resultado2.edad);
    } catch (error) {
        console.log("Error:", error);
    }
}

obtenerCliente();