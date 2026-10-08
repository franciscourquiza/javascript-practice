async function getUserById(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error("Error searching the user by ID");
        }
        let data = await response.json();
        console.log("Name:",data.name, "Email:",data.email, "City:", data.address.city);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUserById(1);

async function getUserByIdWithReturn(id) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error("Error searching the user by ID");
        }
        let data = await response.json();
        return data;
}

async function main() {
    try {
        let users = await Promise.all([
            getUserByIdWithReturn(1),
            getUserByIdWithReturn(5)
        ]);
        users.forEach(user => {
            showUser(user);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

function showUser(user) {
    console.log("Name:", user.name,"Email:", user.email,"City:", user.address.city);
}

main();

