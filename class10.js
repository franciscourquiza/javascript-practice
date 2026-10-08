async function deleteUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/2", {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Error");
        }
        console.log("User deleted successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}

deleteUser();


async function updateUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/2", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Francisco",
                email: "francisco@updated",
            })
        });
        if (!response.ok) {
            throw new Error("Error al actualizar el usuario");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

updateUser();

async function getUsersFromSouthChristy() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Error al encontrar el listado de usuarios");
        }
        let data = await response.json();
        let usersFromSouthChristy = data.filter(user => user.address.city === "South Christy").map(user => ({ name: user.name, email: user.email}));
        console.log(usersFromSouthChristy);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsersFromSouthChristy();

async function getUsersFromSouthChristy2() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Error al encontrar el listado de usuarios");
        }
        let data = await response.json();
        let usersFromSouthChristy = data.map(user => ({ name: user.name, email: user.email}));
        console.log(usersFromSouthChristy);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsersFromSouthChristy2();

async function getUsersBizEmail() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Error al encontrar el listado de usuarios");
        }
        let data = await response.json();
        let usersWithBizEmail = data.filter(user => user.email.endsWith(".biz")).map(user => ({
            name: user.name,
            email: user.email,
        }));
        console.log(usersWithBizEmail);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsersBizEmail();

async function updateUserEmail() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/2", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "francisco@newemail.com",
            }),
        });
        
        if (!response.ok) {
            throw new Error("Error al actualizar el email del usuario");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

updateUserEmail();