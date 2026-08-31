const user = {
  name: "Ruchi",
  age: 22,
  city: "Delhi",

  // Method
  introduce: function () {
    console.log(`Hi, my name is ${this.name} and I live in ${this.city}`);
  }
};

// Object.freeze()
// Prevents modification

const account = {
  balance: 5000
};

Object.freeze(account);
account.balance = 10000; // Will NOT change
console.log(account.balance);



// Object.keys()
console.log(Object.keys(user));
// ["name", "age", "city", "introduce"]



// Object.values()
console.log(Object.values(user));

// Object.entries()
console.log(Object.entries(user));


// Object.assign()

// ✅ Copies properties from one object to another

const target = { a: 1 };
const source = { b: 2 };

const result = Object.assign(target, source);
console.log(result);


// Object.create()
// Creates object using prototype

const parent = {
  greet() {
    console.log("Hello from parent");
  }
};

const child = Object.create(parent);
child.name = "Child Object";
child.greet();



// Object.hasOwn() (Modern)
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "salary")); // false


// Object.is()
// Strict comparison

console.log(Object.is(10, 10));     // true
console.log(Object.is(NaN, NaN));   // true

// hasOwnProperty()
console.log(user.hasOwnProperty("age")); // true



//we having an object and we want to access with different methods. how we can do

const user1 = {
  name: "Ruchi",
  age: 22,
  city: "Delhi"
}
console.log(Object.keys(user1));
// console.log(user.age());

//hume is object pr loop run krke keys print krwani hai

for (let key in user1) {
  console.log(key);
}






  





