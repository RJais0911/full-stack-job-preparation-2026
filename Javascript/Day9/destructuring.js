// Allows you to extract properties from an object and store them in variables in one line

const user = {
  name: "Ruchi",
  age: 22
};

const { name, age } = user;

console.log(name); // Ruchi
console.log(age);  // 22


//renaming variables 

const { name: userName, age: userAge } = user;

console.log(userName); // Ruchi
console.log(userAge);  // 22

//default value
const user1 = {
  name1: "Ruchi"
};

const { name1, age1 = 20 } = user1;

console.log(age); // 20


//nested destructuring
const user2 = {
  name: "Ruchi",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const {
  address: { city, pin }
} = user2;

console.log(city, pin); // Delhi 110001


// Destructuring in Function Parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet(user2);
