// bracket and dot notation
const key = "1";

const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};
// what will the following lines print?
console.log(obj[key]); //1
console.log(obj.key); // The key is a 'key'
console.log(obj["key"]); //1

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object

const something ={
  veggies: "broccoli ,spinach, squash",
  meat: false,
  snacks: 3,
  numbers: [31, 22, 13],
  collection: [
    { love: "Yourself", hate: "No one", like: "what you do", work: "Hard" },
    { green: "tree", red: "apple", blue: "Baju", yellow: "Jacket" },
    { 1: "one", 3: "three", 5: "five", 7: "seven", 11: "eleven" },
    { small: "hut", medium: "condo", large: "house" }
  ]
};



// access a value in in "collection" property
console.log("Always love", something.collection[0].love);


// Nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
// add a favorite key and values to newObj
// fill in your favorite movie and color below
obj["favorites"] = {
  movie: "",
  number: 0,
  color: ""
};
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
// use a template literal to print a sentence about your favorite movie and color

// access the values "b", 4, and 6 from obj.list