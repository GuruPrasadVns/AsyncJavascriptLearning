# Asynchronous Javascript Learning

## This repository can be used to learn the concept of asynchronous javascript.

### Synchronous vs Asynchronous Code

#### synchronous code or Blocking code example

##### console.log('Before');

##### console.log('After');

#### In this code snippet second line will execute only when first line will finish their execution until then the second line of code is blocked. That's why this code is called synchronous or blocking code.

#### Asynchronous code or Non-blocking code example

##### console.log('Before...');

##### setTimeout(() => {

##### console.log('Connection to Database....')

##### }, 2000);

##### console.log('After...');

#### setTimeout is an example of non blocking function.This function scheduled a task to be performed in future in this case after two seconds.

#### Synchronous code does not mean concurrent or multithreaded. In this program we have only single thread.

### Patterns For Dealing With Asynchronous Code

#### There are three patterns to deal with the asynchronous code:

##### Callbacks

##### Promises

##### Async await

##### Following is the code example in which we require one of these pattern

###### console.log('Before');

###### const user = getUser();

###### console.log(user);

###### console.log('After');

###### function getUser() {

###### setTimeout(() => {

###### console.log('Fetching user from database');

###### return { id: 1, name: 'Sample User' };

###### }, 2000);

###### }

### Callbacks

#### callback is a function which is called when the result of asynchronous operation is ready.

##### console.log('Before');

##### const user = getUser(user => {

##### console.log('User', user);

##### const userName = user.name;

##### const repos = getRepositories(userName, repos => {

##### console.log('User fetched repos...', repos);

##### })

##### });

##### console.log('After');

##### function getUser(callback) {

##### setTimeout(() => {

##### console.log('Fetching user from database');

##### callback({ id: 1, name: 'Sample User' });

##### }, 2000);

##### }

##### function getRepositories(username, callback) {

##### setTimeout(() => {

##### console.log('Fetching repo from github....');

##### callback(["java", "javascipt", "node"]);

##### }, 3000)

##### }

### Callbacks Hell OR Christmas Tree problem

#### We used to get deeply nested structure in callback sequence which is not easy to understand. This is called Callback hell or christmas tree problem

##### console.log('Before....');

##### fetchUser(2, user => {

##### console.log('Fetched User...', user);

##### fetchUserRepository(user.gitUserName, repos => {

##### console.log(`Fetched repos for user ${user.gitUserName}....${repos}`)

##### fetchRepoDetails(repos, commits => {

##### console.log(`Total commits for user...${user.gitUserName} with the list of repos ${repos} is ...${commits}`)

##### })

##### })

##### });

##### console.log('After....');

##### function fetchUser(id, callback) {

##### setTimeout(() => {

##### console.log('Fetching user information from database....')

##### callback({ id: id, gitUserName: 'sampleUser' });

##### }, 5000)

##### }

##### function fetchUserRepository(username, callback) {

##### setTimeout(() => {

##### console.log(`Fetching repositories from github for user ${username}....`)

##### callback(["java repo", "javascript repo", "node repo"]);

##### }, 6000)

##### }

##### function fetchRepoDetails(repos, callback) {

##### setTimeout(() => {

##### console.log(`Fetching total commits for repos ${repos}....`)

##### callback([8, 9, 10]);

##### }, 5000)

##### }

### Named Function to rescue callback hell

#### Need to learn

### Promise

#### Promise is a javascript object which holds the eventual result of an asynchronous operation. So, when a asynchronous operation completes it either results to an value or an error. Promise is basically a promise to give you the result of an asynchronous operation.

#### The promise object is either in one of the following state : Pending,Fulfilled,Rejected.

#### Initially Promise object is in Pending state before the asynchronous operation kick in. After that if asynchrnous operation completes successfully it will be in fulfilled state and if something bad happen and asynchronous operation execution it is in rejected state.

#### const p = new Promise((resolve,reject)=>{

#### // Kick off some async operation...

### // if success return reslove or return reject

#### resolve(1)

#### reject(new Error('message'))

#### })

#### p.then(result => console.log('Result',result));

#### Example

##### const p = new Promise((resolve, reject) => {

##### setTimeout(() => {

##### //resolve({ id: '1', name: 'gituser' })

##### reject(new Error('Error in fetching the user....'))

##### }, 2000)

##### })

##### p.then(result => console.log(result))

##### .catch(err => console.log(err.message));

## Replacing Callbacks with Promise

## Creating Settled Promise

### Sometimes you need to create a promise that is already resolved. This is very useful in writing unit test case.

#### const p = Promise.resolve({id: 1, name: 'user'})

#### p.then(result => console.log(result));

## Similarly we can create Promise which are already rejected.

#### const p = Promise.reject(new Error('message for rejection...'))

#### p.catch(error => console.log(error.message));

## Running Parallel Promise

### refer promise-api.js

### Important thing to note if any of the promise rejected then the final promise status is also rejected.

### If you want to do anything as soon as one of the promise is resolved then we use method Promise.race

## Async And Await

### Async and await helps you write asynchronous code in a synchronous manner.