async function getUsersByIds(ids) {
    let responses = await Promise.all(
        ids.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
    );

    if (!responses.every(response => response.ok)) {
        throw new Error("Error finding users");
    }

    let users = await Promise.all(
        responses.map(response => response.json())
    );

    return users;
}

async function main() {
    let users = await getUsersByIds([1,3,7]);

    users.forEach(user => {
        console.log(user.name);
    });
}

main();

async function getUsersById2(ids) {
    let responses = await Promise.all(ids.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`)));
    if (!responses.every(response => response.ok)) {
        throw new Error("Error finding users");
    }
    let users = await Promise.all(responses.map(response => response.json()));
    return users;
}

async function main2() {
    let users = await getUsersById2([1,3,7]);
    users.forEach(user => {
        console.log(user.name); 
    });
} 

main2();

async function getPostsById(ids) {
    try {
        let responses = await Promise.all(ids.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)));
        if (!responses.every(response => response.ok)) {
            throw new Error("Error finding posts");
        }
        let posts = (await Promise.all(responses.map(response => response.json())));
        let postsToReturn = posts.map(post => ({
            title: post.title,
            body: post.body
        }));
        return postsToReturn;
    } catch (error) {
        console.log("Error:", error);
    }
}

async function main3() {
    let posts = await getPostsById([1, 2, 3]);

    posts.forEach(post => {
        console.log("Post:", post);
    });
}

main3();

async function getPostsById2(ids) {
    try {
        let responses = await Promise.all(ids.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)));
        if (!responses.every(response => response.ok)) {
            throw new Error("Error finding posts");
        }
        let posts = (await Promise.all(responses.map(response => response.json())));
        return posts;
    } catch (error) {
        console.log("Error:", error);
    }
}

function formatPosts(posts) {
    let postsFormatted = posts.map(post => ({
            title: post.title,
            body: post.body
        }));
    return postsFormatted;
}

async function main4() {
    let posts = await getPostsById2([1, 2, 3]);

    let postsToShow = await formatPosts(posts);
    postsToShow.forEach(post => {
        console.log("Post:", post);
    });
}

main4();

async function getPostsById3(ids) {
    let responses = await Promise.all(ids.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)));
    if (!responses.every(response => response.ok)) {
        throw new Error("Error finding posts");
    }
    let posts = (await Promise.all(responses.map(response => response.json())));
    return posts;
}

function formatPosts2(posts) {
    let postsFormatted = posts.map(post => ({
            title: post.title,
            body: post.body
        }));
    return postsFormatted;
}

async function main5() {
    try {
        let posts = await getPostsById3([1, 2, 999]);

        let postsToShow = formatPosts2(posts);
        postsToShow.forEach(post => {
            console.log("Post:", post);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

main5();