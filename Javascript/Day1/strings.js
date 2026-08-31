//String is JS  immutable(unchangeable) sequence of characters used to represent text.
let str="Relinns Technologies";
console.log("String:",str);
console.log(str.length);
console.log(str[10]);


//template literals (template strings)
let obj={
    item:"Laptop",
    price:45000
};
console.log(`The price of ${obj.item} is ${obj.price} INR.`);

//String Methods
//always retruns a new string without modifying the original string.
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("Tech"));
console.log(str.slice(0,7));//returns part of the string from start index to end index-1
console.log(str.replace("Relinns","Relinns Pvt Ltd"));//replaces first occurrence of a specified value with another value
console.log(str.includes("Tech"));  
console.log(str.split(" ")); //split in the form of array
console.log(str.charAt(5));
console.log(str.startsWith("R"));
console.log(str.endsWith("ies"));
console.log(str.trim()); //remove whitespace from both ends
console.log(str.concat(" - Quality Training"));
console.log("-------");