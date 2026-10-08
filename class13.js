// filter() → seleccionar
// map() → transformar
// find() → encontrar uno
// some() → ¿alguno cumple?
// every() → ¿todos cumplen?
// forEach() → hacer algo con cada elemento
// reduce() → convertir muchos elementos en un resultado acumulado

async function getPostByUserId(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Error finding user posts");
    }
    let userPosts = await response.json();
    return userPosts;
}

async function main() {
    try {
        let userPosts = await getPostByUserId(1);
        userPosts.forEach(post => {
            console.log("Title:", post.title);
        });
    } catch (error) {
       console.log("Error:", error); 
    }
}

main();

async function getPostByUserId2(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Error finding user posts");
    }
    let userPosts = await response.json();
    let userPostsFiltered = userPosts.filter(post => post.id > 5);
    return userPostsFiltered;
}

async function main2() {
    try {
        let userPosts = await getPostByUserId2(1);
        userPosts.forEach(post => {
            console.log("Title:", post.title);
        });
    } catch (error) {
       console.log("Error:", error); 
    }
}

main2();

async function getPostByUserId3(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Error finding user posts");
    }
    let userPosts = await response.json();
    let userPostsFiltered = userPosts.filter(post => post.id > 5).map(post => post.title);
    return userPostsFiltered;
}

async function main3() {
    try {
        let userPosts = await getPostByUserId3(1);
        console.log(userPosts);
    } catch (error) {
       console.log("Error:", error); 
    }
}

main3();

async function getPostsTitlesByUserId(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Error finding the user by his ID");
    }
    let userPosts = await response.json();
    let postsToShow = userPosts.filter(post => post.id > 5 && post.id <= 8).map(post => post.title);
    return postsToShow;
}

async function main4() {
    try {
        let posts = await getPostsTitlesByUserId(1);
        posts.forEach(post => {
            console.log("Title:", post);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

main4();

async function getPostIdSumByUserId(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Error finding user posts");
    }
    let userPosts = await response.json();
    let sum = userPosts.reduce((accumulator, post) => {
        return accumulator + post.id;
    }, 0);
    return sum;
}

async function main5() {
    try {
        let sum = await getPostIdSumByUserId(1);
        console.log("Total ID:", sum);
    } catch (error) {
        console.log("Error:", error);
    }
}

main5();

async function getPostsWithIdGreaterThan5(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Error finding the user");
    }
    let userPosts = await response.json();
    let postsMajorTo5Id = userPosts.filter(post => post.id > 5);
    return postsMajorTo5Id;
}

async function main6() {
    try {
        let postsMajorTo5IdAmount = await getPostsWithIdGreaterThan5(1);
        console.log("Posts found:", postsMajorTo5IdAmount.length);
    } catch (error) {
        console.log("Error", error);
    }
}

main6();


async function getVariousDataByUserId(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
        throw new Error("Error finding the user by ID");
    }
    let userPosts = await response.json();
    let result = {
        totalPosts: userPosts.length,
        postsWithIdGreaterThan5: userPosts.filter(post => post.id > 5).length,
        idSum: userPosts.reduce((accumulator, post) => {
        return accumulator + post.id;
    }, 0)  // el 0 es para indicar que accumulator inicia en 0
    }
    return result;
}

async function main7() {
    try {
        let data = await getVariousDataByUserId(1);
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

main7();
