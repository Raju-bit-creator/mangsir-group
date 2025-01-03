let cartItems = [
  {
    name: "rohan",
    products: [
      { title: "labtop", price: 1000 },
      { title: "mobile", price: 500 },
      { title: "airpod", price: 100 },
    ],
  },
  {
    name: "roshan",
    products: [
      { title: "jeans", price: 100 },
      { title: "tshirt", price: 500 },
      { title: "sweater", price: 100 },
    ],
  },
  {
    name: "sajan",
    products: [
      { title: "book", price: 100 },
      { title: "fan", price: 500 },
      { title: "table", price: 100 },
    ],
  },
];

cartItems.map((prod) => {
  let totalExpenditure = prod.products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  console.log(`${prod.name} spends ${totalExpenditure}`);
});

let fruits = [
  {
    name: "orange",
    scitnetificName: "xyz",
    prices: [
      { country: "nepal", price: 20 },
      { country: "india", price: 10 },
      { country: "usa", price: 5 },
      { country: "australia", price: 6 },
    ],
  },
  {
    name: "apple",
    scitnetificName: "xyz",
    prices: [
      { country: "nepal", price: 20 },
      { country: "india", price: 10 },
      { country: "usa", price: 5 },
      { country: "australia", price: 6 },
    ],
  },
];
fruits[1].prices.map((e) => {
  console.log(`${e.country} price of apple ${e.price}`);
});
///
