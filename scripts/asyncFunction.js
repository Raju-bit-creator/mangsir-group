// promise (resolve , reject)
// , callbacks

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("internal server error");
    resolve({
      data: {
        name: "jhon",
        email: "jhon@gmail.com",
      },
    });
  }, 3000);
});
console.log("helllo mangsir group");

promise.then((data) => {
  console.log(data);
});

console.log(promise);
