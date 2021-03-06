
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

// getCustomer(1)
//   .then(customer => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies()
//         .then(movies => {
//           console.log('Top movies: ', movies);
//           sendEmail(customer.email, movies)
//             .then(() => console.log('Email sent...'))
//         })
//     }
//   });

//Async await syntax
async function processCustomerOpeation() {
  try {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log('Top movies: ', movies);
      await sendEmail();
      console.log('Email sent...')
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
}

processCustomerOpeation();





function getCustomer(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: false,
        email: 'email'
      })
    }, 4000)
  })
  // setTimeout(() => {
  //   callback({
  //     id: 1,
  //     name: 'Mosh Hamedani',
  //     isGold: true,
  //     email: 'email'
  //   });
  // }, 4000);
}

function getTopMovies() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000)
  })
  // setTimeout(() => {
  //   callback(['movie1', 'movie2']);
  // }, 4000);
}

function sendEmail(email, movies) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  })
  // setTimeout(() => {
  //   callback();
  // }, 4000);
}