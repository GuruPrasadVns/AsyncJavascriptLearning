// Synchronous code or blocking code example

// console.log('Before...');
// console.log('After...');

// Asynchronous code or non blocking code example

// console.log('Before...');
// setTimeout(() => {
//     console.log('Connection to Database....')
// }, 2000);

// console.log('After...');

// Asynchronous code in which some pattern is required

// console.log('Before');
// const user = getUser();
// console.log(user);
// console.log('After');
// function getUser() {
//     setTimeout(() => {
//         console.log('Fetching user from database');
//         return { id: 1, name: 'Sample User' };
//     }, 2000);
// }

// Callback example to solve the previous problem

// console.log('Before....');
// fetchUser(2, user => {
//     console.log('Fetched User...', user);
//     fetchUserRepository(user.gitUserName, repos => {
//         console.log(`Fetched repos for user ${user.gitUserName}....${repos}`)
//         fetchRepoDetails(repos, commits => {
//             console.log(`Total commits for user...${user.gitUserName} with the list of repos ${repos} is ...${commits}`)
//         })
//     })
// });
// console.log('After....');

// function fetchUser(id, callback) {
//     setTimeout(() => {
//         console.log('Fetching user information from database....')
//         callback({ id: id, gitUserName: 'sampleUser' });
//     }, 5000)
// }

// function fetchUserRepository(username, callback) {
//     setTimeout(() => {
//         console.log(`Fetching repositories from github for user ${username}....`)
//         callback(["java repo", "javascript repo", "node repo"]);
//     }, 6000)
// }

// function fetchRepoDetails(repos, callback) {
//     setTimeout(() => {
//         console.log(`Fetching total commits for repos ${repos}....`)
//         callback([8, 9, 10]);
//     }, 5000)
// }

// Named function to rescue from the call backs Hell

console.log('Before....');
fetchUser(2, user => {
    console.log('Fetched User...', user);
    fetchUserRepository(user.gitUserName, repos => {
        console.log(`Fetched repos for user ${user.gitUserName}....${repos}`)
        const username = user.gitUserName;
        fetchRepoDetails(repos, (username, commits) => {
            console.log(`Total commits for user...${username} with the list of repos ${repos} is ...${commits}`)
        })
    })
});
console.log('After....');

function fetchUser(id, callback) {
    setTimeout(() => {
        console.log('Fetching user information from database....')
        callback({ id: id, gitUserName: 'sampleUser' });
    }, 2000)
}

function fetchUserRepository(username, callback) {
    setTimeout(() => {
        console.log(`Fetching repositories from github for user ${username}....`)
        callback(["java repo", "javascript repo", "node repo"]);
    }, 1000)
}

function fetchRepoDetails(repos, callback) {
    setTimeout(() => {
        console.log(`Fetching total commits for repos ${repos}....`)
        callback([8, 9, 10]);
    }, 2000)
}