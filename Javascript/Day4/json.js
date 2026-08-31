//JSON (JavaScript Object Notation) is a lightweight data interchange
//  format used to send and receive data between client and server.

//It looks like a JavaScript object but is pure text (string).

// {
//   "name": "Ruchi",
//   "role": "DevOps Intern",
//   "active": true
// }

// Why Conversion is Required?
// Servers send data as text
// JavaScript works with objects

// So we convert:
// Text → Object → JSON.parse()
// Object → Text → JSON.stringify()

// Object → JSON (Stringify)is used to convert JavaScript objects into text for storage or transmission.
  const user = {
  name: "Ruchi",
  age: 22,
  isStudent: true
};
const jsonString = JSON.stringify(user);
console.log(jsonString);

//output :- {"name":"Ruchi","age":22,"isStudent":true}  

// Use Cases:-
// Sending data via API (POST request)
// Storing data in localStorage
// Logging structured data




// JSON → Object (Parse)converts a JSON-formatted string into a JavaScript object so we can access and manipulate the data.
const jsonData = '{"name":"Ruchi","age":22,"isStudent":true}';

const userObj = JSON.parse(jsonData);

console.log(userObj.name);

// output:-Ruchi


// Used in:
// API responses
// LocalStorage
// Network communication




//spread operator:-Spread operator breaks a collection into individual elements.

// The spread operator (...) is used to expand (spread out) elements of an array,
// object, or string into individual values.


// Copy Object
const original = { x: 1, y: 2 };
const copy = { ...original };

console.log(copy);

// Copy an array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]


// Merge Objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };
console.log(merged);


let a = [1, 2];
let b = [3, 4];
let merged1 = [...a, ...b];
console.log(merged1); // [1, 2, 3, 4]



// Add elements while copying

let nums = [2, 3, 4];
let newNums = [1, ...nums, 5];

console.log(newNums); // [1, 2, 3, 4, 5]

//Update Property
const updateddata = {
  ...data,
  role: "SDE"
};
console.log(updateddata);