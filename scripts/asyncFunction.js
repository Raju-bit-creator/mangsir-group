// promise (resolve , reject)
// , callbacks

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("internal server error");
//     resolve({
//       data: {
//         name: "jhon",
//         email: "jhon@gmail.com",
//       },
//     });
//   }, 3000);
// });

// promise.then((data) => {
//   console.log(data);
// })
// .catch((error)=>{
// console.log(error);

// })

// console.log(promise);
let Success = false;

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Success) {
      resolve({
        data: {
          name: "jhon",
          email: "jhon@gmail.com",
        },
      });
    } else {
      reject("Internal server error");
    }
  }, 3000);
});

promise
  .then((data) => {
    console.log("Success:", data); // if the promise resolves
  })
  .catch((error) => {
    console.error("Error:", error); // if the promise rejects
  });

console.log(promise);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log("fetch data", data))
  .catch((error) => console.log("fetching error", error));

const firstPromise = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} , first promise resolved`);
    }, 2000);
  });
};
const secondPromise = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} ,and  second promise resolved`);
    }, 2000);
  });
};

firstPromise("hello world")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

secondPromise("hello mangsir group")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
