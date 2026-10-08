async function getUsersPostSummary(userIds) {
    let responses = await Promise.all(userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)));
    if (!responses.every(response => response.ok)) {
        throw new Error("Error finding users");
    }
    let postsByUser = await Promise.all(responses.map(response => response.json()));
    let summaries = userIds.map((userId, index) => {
        let userSummarie = postsByUser[index];
        return {
            userId: userId,
            totalPosts: userSummarie.length,
            idSum: userSummarie.reduce((accumulator, post) => {
                return accumulator + post.id;
            }, 0),
        };
    });
    return summaries;
}

async function main() {
    try {
        let summaries = await getUsersPostSummary([1, 3, 7]);
        console.log(summaries);
    } catch (error) {
        console.log("Error:", error);
    }
}

main();

async function getUsersPostsSummary2(userIds) {
    let responses = await Promise.all(userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)));
    if (!responses.every(response => response.ok)) {
        throw new Error("One or more users could not be found");
    }
    let postsByUser = await Promise.all(responses.map(response => response.json()));
    let summaries = userIds.map((userId, i) => {
        let userPosts = postsByUser[i];
        return {
            userId: userId,
            totalPosts: userPosts.length,
            idSum: userPosts.reduce((accumulator, post) =>{
                return accumulator + post.id;
            }, 0),
        };
    });
    return summaries;
}

async function main2() {
    try {
        let summaries = await getUsersPostsSummary2([1, 3, 999]);
        console.log(summaries);
    } catch (error) {
        console.log("Error:", error);
    }
}

main2();

async function getUsersPostsSummary3(userIds) {
    let responses = await Promise.all(userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)));
    if (!responses.every(response => response.ok)) {
        throw new Error("Error one or more users could not be found");
    }
    let postsByUser = await Promise.all(responses.map(response => response.json()));
    let summaries = userIds.map((userId, i) => {
        let userPosts = postsByUser[i];
        let totalPosts = userPosts.length;
        let idSum = userPosts.reduce((accumulator, post) => {
            return accumulator + post.id;
        }, 0);
        return {
            userId: userId,
            totalPosts: totalPosts,
            idSum: idSum,
            averagePostId: idSum / totalPosts,
        };
    });
    return summaries;
}

async function main3() {
    try {
        let summaries = await getUsersPostsSummary3([1, 3, 7]);
        console.log(summaries);
    } catch (error) {
        console.log("Error:", error);
    }
}

main3();


async function getUserPostsSummary4(userIds) {
    let responses = await Promise.all(userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)));
    if (!responses.every(response => response.ok)) {
        throw new Error("Error finding one or more users");
    }
    let postsByUser = await Promise.all(responses.map(response => response.json()));
    let summaries = userIds.map((userId, i) => {
        let userPosts = postsByUser[i];
        let totalPosts = userPosts.length;
        let idSum = userPosts.reduce((accumulator, post) => {
            return accumulator + post.id;
        }, 0);
        return {
            userId: userId,
            totalPosts: totalPosts,
            idSum: idSum,
            averagePostId: idSum / totalPosts,
            maxPostId: userPosts.reduce((accumulator, post) => {
                if (accumulator < post.id) {
                    accumulator = post.id;
                }
                return accumulator;
            }, 0),
        }
    });
    return summaries;
}

async function main4() {
    try {
        let summaries = await getUserPostsSummary4([1, 3, 7]);
        console.log(summaries);
    } catch (error) {
        console.log("Error:", error);
    }
}

main4();


async function getUserPostsSummary5(userIds) {
    let responses = await Promise.all(userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)));
    if (!responses.every(response => response.ok)) {
        throw new Error("Error finding one or more users");
    }
    let postsByUser = await Promise.all(responses.map(response => response.json()));
    let summaries = userIds.map((userId , i) => {
        let userPosts = postsByUser[i];
        let totalPosts = userPosts.length;
        let idSum = userPosts.reduce((accumulator, post) => {
            return accumulator + post.id;
        }, 0);
        return {
            userId: userId,
            totalPosts: totalPosts,
            idSum: idSum,
            averagePostId: idSum / totalPosts,
            maxPostId: userPosts.reduce((accumulator, post) => {
                if (accumulator < post.id) {
                    accumulator = post.id;
                };
                return accumulator;
            }, 0),
            minPostId: userPosts.reduce((accumulator, post) => {
                if (accumulator > post.id) {
                    accumulator = post.id;
                };
                return accumulator;
            }, userPosts[0].id),
        }
    })
    return summaries;
}

async function main5() {
    try {
        let summaries = await getUserPostsSummary5([1, 3, 7]);
        console.log(summaries);
    } catch (error) {
        console.log("Error:", error);
    }
}

main5();



























