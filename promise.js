// Creating a Promis
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve({ id: '1', name: 'gituser' })
        reject(new Error('Error in fetching the user....'))
    }, 2000)
})
//Consuming a Promise
p.then(result => console.log(result))
    .catch(err => console.log(err.message));