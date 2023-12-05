// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });


// Create a new promise
const myPromise = new Promise((resolve, reject) => {
  // After 1 second, call Math.random()
  setTimeout(() => {
      const randomValue = Math.random();
      
      // If the result of Math.random() is > 0.5, call resolve()
      if (randomValue > 0.5) {
          resolve();
          console.log(`Your number is: ${randomValue} \u{1F44D}`)
      } else {
          // If the result of Math.random() is <= 0.5, call reject()
          reject();
          console.log(`Your number is: ${randomValue} \u{1F44D}`)
      }
  }, 1000);
});

// Handle the promise resolution
myPromise
  .then(() => {
      // If the promise is resolved, log 'success'
      console.log('Success!');
      console.log('Complete! \u{1F60A}');
  })
  .catch(() => {
      // If the promise is rejected, log 'fail'
      console.log('Fail!');
      console.log('Complete! \u{1F643}');
  })
//  .finally(() => {
//       //In either case, log 'complete'
//      console.log('Complete :)');
//  });
