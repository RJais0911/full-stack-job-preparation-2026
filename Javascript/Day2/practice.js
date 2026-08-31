//array=[85,97,44,37,76,60]
//find the avg marks from the array.

let marks=[85,97,44,37,76,60];
let sum=0;
let avg=0;
// for(let i=0;i<marks.length;i++){
for(let i of marks){
    sum+=i;
    avg=sum/marks.length;

}
//  console.log(`The avg marks of the class = ${avg}`);


//price=[250,645,300,900,50]
//all items have an offer 10% off on them. Change the array to store final price after applying offer.
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    // console.log(`The original price is ${val}`);
    let discount=val/10;
     items[i]=items[i]-discount;
    console.log(`The final price after discount is ${items[i]}`);
    i++; 
}

console.log("**********Another method**********");

let price=[250,645,300,900,50];
let finalPrice=0;

for(let j=0;j<price.length;j++){
    let dis=price[j]/10;
    finalPrice=price[j]-dis;
    console.log(`The final price after discount is ${finalPrice}`);

    
}

//create an array to store companies:-"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//a) Remove the first company from the array
//b) Remove the uber and add ola in its place
//c) Add amazon at the end of the array
//d) Print the final array and the size of the array



let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift(); //a

companies.splice(2,1,"Ola"); //b

companies.push("Amazon");//c

console.log(companies); //d
let size=companies.length;
console.log("The size of array is:" +size);




console.log("----------End of line----------");

// Approach - 1: The following task should be achieved using splice/slice methods.
//using splice() methodblusht mutates the array. Means it's change the original value array.

const fruits=["Banana", "Orange", "Apple", "Kiwi"];

const res=fruits.splice(1,2); 

console.log(fruits); 

Output:- ["Banana","Kiwi"]


//using slice() method:- It return piece of array.
// It does not mutates the array. Means it's not change original array.
const res1=fruits.slice(0,2);
console.log(res1);
Output:- ["Banana", "Orange"]

// Approach - 2: Create a function that should remove any passed input (eg: "kiwi") given by the user from the array.
function rmvFruit(arr, fruitToRemove) {
  const index = arr.indexOf(fruitToRemove);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}
rmvFruit(fruits, "Kiwi");
console.log(fruits); 

Output:-["Banana"]




// Task 1:-Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shopingSpree(arr){

return arr.reduce((total,item)=>total +item.price, 0);

}
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist));

// Task2:- Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once,
//  assuming that the we have to pay a base service price of 300 along with the item prices

function shopingSpreeWithServiceCharge(arr){

return arr.reduce((total,item)=>total +item.price, 300);

}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shopingSpreeWithServiceCharge(wishlist));


// Task 3:-Given an array of people objects, return a new array containing only the names of the people who are members of the illuminati.

function peopleWhoBelongToTheIlluminati(arr){ 

return arr.filter(people=> people.member===true);

} 

const person=[

{ name: "Angelina Jolie", member: true },

 { name: "Eric Jones", member: false },

{ name: "Paris Hilton", member: true },

{ name: "Kayne West", member: false },

{ name: "Bob Ziroll", member: true } ];

console.log(peopleWhoBelongToTheIlluminati(person)); 

Output:-

[{ name: "Angelina Jolie", member: true },

{ name: "Paris Hilton", member: true },

{ name: "Bob Ziroll", member: true } ];





let arr= [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

// task1:-Write a program to check if the above array contains 14. Returned value must be a boolean.

const contain14=arr.includes(14);

console.log(contain14); //output:- true.


// task2:-Write a program to check if every element in the array is above 80 or not. Returned value must be a boolean.

const checkAll80=arr.every(num=>num>80);

console.log(checkAll80);  //output:- false.

