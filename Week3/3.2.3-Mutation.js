let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
console.log("before mutation x = " + x +
", "
// reassign x, y, and z to FALSY values

// print x, y, and z

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
a = NaN;
b = false;
c = 0;

// using BRACKET NOTATION, assign a value to b
b[0] = 1;
// using DOT NOTATION, assign a PROPERTY to c
c.good ="Time";
console.log('\n c after 1st mutation')
// using DOT NOTATION, assign a METHOD to c

// using BRACKET NOTATION, call the method in c
console.log(c["greet"]());
c.greet())
// print a, b, and c
