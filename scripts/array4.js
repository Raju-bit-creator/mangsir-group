// let number = [1, 2, 3, 4, 5, 6, 7];
// const filterNumber = number.filter((num) => num < 5);
// console.log("this is fileter number", filterNumber);

// let number = [2, 3, 4, 5, 6, 7];
// const findNumber = number.find((num) => num > 5);
// console.log("this is find number", findNumber);

const sentence = "i/am/a/software/developer";
let words = sentence.split("/");
console.log("this is words", words);
console.log("there is total number of word", words.length);

let num = [1, 2, 3, 4];
// let newNum = num.push(5);
// console.log(num);

let removeNum = num.pop();
console.log(num);
//assignment to explore shift unshift method in array, index of  includes splice
let num1 = [1, 2, 5, 6];
let num2 = [...num1, 3, 4, 7]; // this is spread operator
console.log(num2);

// quck review about parse and stringify

const jsonString = '{ "name": "jhon", "age":20, "city":"kathmandu"}';
const data = JSON.parse(jsonString);
console.log(data);
console.log(data.city);
let stringData = JSON.stringify(data);
console.log(stringData);
//sakar's array
let users = [
  {
    name: "Nikhil",
    products: [
      { title: "Notebook", price: 100 },
      { title: "Pen", price: 5000 },
      { title: "Bag", price: 1500 },
    ],
  },
  {
    name: "Anjali",
    products: [
      { title: "Shoes", price: 400 },
      { title: "Dress", price: 1200 },
    ],
  },
];

users.forEach((user) => {
  user.products.forEach((product) => {
    if (product.price > 3000) {
      console.log(
        `${user.name} owned ${product.title} which is higher expansive than 3000 is ${product.price}`
      );
    }
  });
});
