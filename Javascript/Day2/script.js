//Arrays in JS :- in case of array we can store multiple values in a single variable using an array
let marks=[34,23,24,25];;
console.log(marks);

// console.log(marks.length); //length is used to find the size of the array

let heroes=["shakib","sachin","dravid","virat","rahul"];
console.log(heroes);
console.log(heroes.length); //length is used to find the size of the array

for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
// console.log("**********Using for..of loop**********");

for(let hero of heroes){
    console.log(hero);
}

// console.log("**********Using forEach loop**********");
heroes.forEach(function(hero){
    console.log(hero.toUpperCase());
});

let fruits=["apple","banana","grapes","mango","orange"];

console.log(fruits);
fruits.push("kiwi"); //push is used to add an element at the end of the array
console.log(fruits);
let deletedfruit=fruits.pop(); //pop is used to delete the last element of the array
console.log(fruits);
console.log(`The deleted fruit is ${deletedfruit}`);

let str=fruits.toString(); //toString is used to convert the array into string
console.log(str);


let veg=["carrot","potato","onion","cabbage"];

veg.unshift("beetroot"); //unshift is used to add an element at the beginning of the array
veg.shift(); //shift is used to delete the first element of the array
console.log(veg);
let allitems=fruits.concat(veg); //concat is used to merge two arrays
console.log(allitems);

let sliceditems=veg.slice(0,3);
console.log(`The sliced items are ${sliceditems}`); //slice is used to extract a part of the array

let spliceditems=veg.splice(1,2,"capsicum","spinach"); //splice is used to add or remove elements from the array
console.log(`The spliced items are ${veg}`);


let arr=[1,2,3,4,5,6,7];
console.log(arr);
arr.splice(2,2,101,102);
console.log(arr);

//i want arr=[11,12,121,13,14,15]
//Add element
let arr1=[11,12,13,14,15];
arr1.splice(2,0,121); // arr1=[11,12,121,13,14,15]

//Delete element
arr1.splice(4,2);

//replace element
arr1.splice(3,1,131);
console.log(arr1);