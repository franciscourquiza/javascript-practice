async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/2");

    let data = await response.json();
    
    console.log(data.name, data.email);
}

getUser();

async function getUser2() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    
        let data = await response.json();
        
        console.log(data.name);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser2();

async function getUser3() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/999")
        if (!response.ok) {
            throw new Error("User not found");
        }
        let data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser3();

async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("Users not found");
        }
        let data = await response.json();
        data.forEach(user => {
            console.log(user.name, user.email);
        });
    } catch (error) {
        console.log("Error:", error)
    }
}

getUsers();

async function getUsers2() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("Users not found");
        }
        let data = await response.json();
        let names = data.map(user => user.name);
        console.log(names);
    } catch (error) {
        console.log("Error:", error)
    }
}

getUsers2();

async function getUsersFromSouthChristy() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("Users not found");
        }
        let data = await response.json();
        let usersFromSouthChristy = data.filter(user => user.address.city === "South Christy");
        let result = usersFromSouthChristy.map(user => user.name);
        console.log(result);
    } catch (error) {
        console.log("Error:", error)
    }
}

getUsersFromSouthChristy();

async function createUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST", //le indicamos al sv que vamos a crear/enviar info
            headers: {
                "Content-Type": "application/json" //le avisamos al server que estamos enviando JSON
            },
            body: JSON.stringify({  //convierte el objeto JavaScript a JSON
                name: "Francisco",
                email: "francisco@example.com"
            })
        })
        if (response.ok) {
            let data = await response.json();
            console.log(data);
        } else {
            throw new Error("Error al crear el usuario")
        }
        
    } catch (error) {
        console.log("Error:", error);
    }
}

createUser();