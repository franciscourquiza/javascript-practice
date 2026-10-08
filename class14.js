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


























