//arithmetic,  comparision && logical,
let realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddNumber = []
let evenNumber = []
for (let index = 0; index < realNumbers.length; index++) {
    const element = realNumbers[index];
    if (element % 2 == 0) {
        evenNumber.push(element)
    } else {
        oddNumber.push(element)
    }

}
console.log("this is even numbers array", evenNumber);
console.log("this is odd numbers array", oddNumber);

let a = "five"
let b = "five"
if (a > b) {
    console.log("they are equal");

} else {
    console.log("they are not equal");

}

let rain = true
let sun = false
let wind = false
if (rain || sun) {
    console.log("take umbrella");

} else {
    console.log("no need to take umbrella");

}
//not correct format of array
let number = [1, 2, 3, "four"]
// array is collection of similar data type
// correct
let names = ["rames", "suresh", "ram", "shyam"]
let fruits = [
    {   id:1,
        title: "mango",
        price: 100,
        description: "this product is form mango tree"
    },
    {   id:2,
        title: "apple",
        price: 100,
        description: "this product is form mustang"
    },
    {   id:3,
        title: "cherry",
        price: 100,
        description: "this product is form nepal"
    }
]
console.log(fruits);
