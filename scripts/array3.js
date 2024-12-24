let cart = [
  {
    price: 100,
    qty: 3,
  },
  {
    price: 200,
    qty: 5,
  },
  {
    price: 50,
    qty: 2,
  },
  {
    price: 100,
    qty: 3,
  },
];
//calcutalte the total cost
const total = cart
  .slice(1, 2)
  .reduce((acc, curr) => acc + curr.price * curr.qty, 0);
console.log("total cart cost", total);
let totalItems = cart.slice(1, 3);

console.log(totalItems);

let courses = [
  {
    class: "php",
    completedStatus: false,
  },
  {
    class: "mern",
    completedStatus: true,
  },
  {
    class: "devops",
    completedStatus: true,
  },
  {
    class: "graphics",
    completedStatus: true,
  },
];
let compelted = [];
let incomplete = [];
for (let index = 0; index < courses.length; index++) {
  const element = courses[index];
  if (element.completedStatus) {
    compelted.push(element.class);
  } else {
    incomplete.push(element.class);
  }
}
console.log(compelted);
console.log(incomplete);

let countries = [
  {
    name: "Nepal",
    code: "NP",
  },
  {
    name: "india",
    code: "in",
  },
  {
    name: "usa",
    code: "us",
  },
  {
    name: "australia",
    code: "au",
  },
];

// function getCountryCode(countryName) {
//   let country = countries.find(
//     (c) => c.name.toLowerCase() === countryName.toLowerCase()
//   );
//   if (country) {
//     return country.code;
//   } else {
//     return "country not found in array";
//   }
// }
// console.log(getCountryCode("qatar"));

const getCountryCode = (countryName) => {
  let country = countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );
  if (country) {
    return country.code;
  } else {
    return "country not found in array";
  }
};
console.log(getCountryCode("nepal"));
