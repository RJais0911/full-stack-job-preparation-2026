function myFunction(msg){ //here msg is a parameter
    console.log(msg);
}

myFunction("Hello from myFunction"); // here "Hello from myFunction" is an argument




// function sum(a,b){
//     console.log("The sum is:",a+b);
// }
// sum(5,10);


function sum(x,y){ //here x and y are parameters and local variables
    s=x+y;
    return s;
}

let val=sum(7,12);
console.log("The sum is:",val);


//Arrow Function
function multiply(a,b){
    const result=(x,y)=> x*y;
    console.log(result(a,b));
}
multiply(4,5);

//we can also define arrow function like this
const divide=(a,b)=> a/b;
console.log("The division is:",divide(20,4));

//we can also use arrow function to print a message

const greet=()=> {
    console.log("Hello, Welcome to Relinns Technologies!");
}
greet();


//practice question
//create a function that returns the number of vowels in a given string

function countVowels(str){
    const vowels=['a','a','i','i','i','A','E','I','O','U'];
    let count=0;
    for(const i of str){
        if(vowels.includes(i)){
            count++;
        }
    }
    console.log(`The vowels present in a string: ${count}`);

}
countVowels("Relinns Technologies");








//forEach with functions :- Syntax= array.forEach(callback, thisArg);

const numbers=[1,2,3,4,5];
numbers.forEach(function printVal(val){ // printval is a parameter representing each element of the array //val is 1,2,3,4,5 one by one
    console.log(val);

})


//forEach with arrow function
const arr=[10,20,30,40,50]; //arr is an array
arr.forEach((val)=>{ //val is a parameter representing each element of the array
    console.log(val);
});

//print square of a number
let nums=[2,4,8,9,10];
// nums.forEach((num)=>{
//     console.log(num*num);
// });

// or
let calcSquare=(num)=>{
    console.log(num*num);
}
nums.forEach(calcSquare);



const obj = {
  name: "Ruchi",
  arr: [1, 2, 3],

  show() {
    this.arr.forEach(function () {
      console.log(this.name);
    });
  }
};
obj.show(); 
//  by default the output will be undefined because 'this' inside the regular function does not refer to the obj object


//but now while using thisArg inside normal function, it works.

const obj1 = {
  name: "Ruchi",
  arr: [1, 2, 3],

  show() {
    this.arr.forEach(function () {
      console.log(this.name);
    },
);
  }
};
obj1.show(); 

// forEach accepts a second argument (thisArg) that explicitly binds this for the callback, which is why the normal function works here.
// Normal functions inside forEach can access this ONLY if thisArg is passed.




// Normal functions create their own this, while arrow functions inherit this from the surrounding scope,
// making arrow functions safer inside forEach when using object context.

const obj2 = {
  name: "Mother",
  arr: [1, 2, 3],

  show() {
    this.arr.forEach(() => {  
      console.log(this.name);
    
    });
  }
};

obj2.show(); // output gives Ruchi 3 times because inside the arrow function it refers to the obj1 object



const vowels = ['a', 'a', 'i', 'i', 'i', 'A', 'E', 'I', 'O', 'U'];

function repeatingVowel(arr) {
  const count = {};
  let maximumVowel = '';
  let maxCount = 0;

  for (let char of arr) {
    let v = char.toLowerCase(); //or we can do toUpperCase also

    count[v] = (count[v] || 0) + 1;

    if (count[v] > maxCount) {
      maxCount = count[v];
      maximumVowel = v;
    }
  }  

  return {
    vowel: maximumVowel,
    count: maxCount
  };
}

console.log(repeatingVowel(vowels));


//map methods in array

let nums1=[10,20,40];
let newArr=nums1.map((val=>{
  return val**2;
}));
console.log(newArr);

//filter methods in array

let mixed=[2,14,7,9,15,22,23,35,49];
let evenEle=mixed.filter((val)=>{
  return val%2===0;
});
console.log(evenEle);

//reduce methods in array

let value=[1,2,3,4];
const output=value.reduce((res,curr)=>{
  // return res+curr;
  return res >curr? res:curr;

});
console.log(output);

//filter out og the marks of students that scored above 90.

let marks=[37,88,93,94,97,76,56,82];

let filteredMarks=marks.filter((val)=>{
  return val>90;
});
console.log(filteredMarks);


//take number n input from user. create an array from 1 to n.
//use the reduce tto find the sum.
//use the reduce to find the product.

let r=prompt("Enter a number: ");

let rr=[];
for(let i=1;i<=r;i++){
  rr[i-1]=i;
}
console.log(rr);

let sum1=rr.reduce((res,curr)=>{
  return res+curr;
})
console.log(sum1);


let product=rr.reduce((res,curr)=>{
  return res*curr;
})
console.log(product);



//function prototype methods

//function.prototrpe.call():-Calls a function immediately/n'
//  and lets you manually set the value of this, passing arguments one by one.

function greeting(city, country) {
  console.log(`Hello, my name is ${this.name}. I live in ${city}, ${country}`);
}

const user = { name: "Ruchi" };

greeting.call(user, "Pune", "India");


// function.prototype.apply():-Similar to call(), but arguments are passed as an array.

function biodata(age, city){
  console.log(`Hello, my name is ${this.name}. I am ${age} y/o.I am from ${city}.`);
}
const user1={name:"Riya"};
const data=biodata.apply(user1,[20,"Mohalli"]);



//function.prototype.bind():-Returns a new function with a fixed this value.
// It does NOT execute immediately.

function locality(state,city){
  console.log(`Hello Myself ${this.name}. I am from  ${state} in ${city} city.`)
}
const user2={name:"Madhav"};

const boundlocality=locality.bind(user2,"Uttar-Pradesh","Kanpur");

boundlocality();



//function.prototype.toString():-Returns the source code of the function as a string.


function add(a, b) {
  return a + b;
}

console.log(add.toString());


console.log("--------------------The End--------------------------");
