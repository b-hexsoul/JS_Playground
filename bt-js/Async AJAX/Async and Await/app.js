// Async and Await - "ES7" or ES2016 - might need to compile down using Webpack or Babel

// With Async, we add "async function" in front, which returns a promise
// async function myFunct() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   // fake error
//   const error = true;
//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// // because myFunct returns a promise then we can use .then();
// myFunct()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Fetch with Async and Await

async function getUsers() {
  // Await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Only proceed once the promise above is resolved
  const data = await response.json();

  // Only proceed once the promise above is resolved
  return data;
}

getUsers().then((users) => console.log(users));
