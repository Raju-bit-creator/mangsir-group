//set item in local storage

localStorage.setItem("name", "jhon");
localStorage.setItem("token", "134tfdwkljvsdkjfsdakfdsafsdafdafdfsadf");
localStorage.setItem("user", JSON.stringify({ naem: "jhon" }));
localStorage.setItem("toke", JSON.stringify({ token: "token" }));

//get item in local storage

let token = localStorage.getItem("token");
let token1 = JSON.parse(localStorage.getItem("token"));
