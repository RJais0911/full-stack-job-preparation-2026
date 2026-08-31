//String in JS
let str="Javascript is fun";

// toLocaleLowerCase()Converts string to lowercase based on locale.
console.log(str.toLocaleLowerCase("tr-TR"));


// toLocaleUpperCase()Converts string to uppercase based on locale.

console.log(str.toLocaleUpperCase());

// toLowerCase()Converts string to lowercase (non-locale specific).

console.log(str.toLowerCase());

// toUpperCase()Converts string to uppercase.
console.log(str.toUpperCase());


// toString()Returns string representation.
let s = new String("Hello");
console.log(s.toString());


// valueOf()Returns primitive string value.
console.log(s.valueOf());

// trim()Removes spaces from both ends.
console.log(str.trim());

// trimStart()Removes spaces from start only.
console.log(str.trimStart());

// trimEnd()Removes spaces from end only.

console.log(str.trimEnd());

// substring(start, end)Extracts part of string (end excluded).
console.log(str.substring(2, 7));


// slice(start, end)Similar to substring but supports negatives.
console.log(str.slice(2, 7));
console.log(str.slice(-10));


// split(separator)Splits string into array.
let text = "apple,banana,mango";
console.log(text.split(","));


// startsWith()Checks if string starts with given value.
console.log(str.trim().startsWith("Java"));
// Returns true

// endsWith()Checks if string ends with given value.
console.log(str.trim().endsWith("fun"));


// repeat(count)Repeats string.
console.log("Hi ".repeat(3));


// replace()Replaces first occurrence only.
console.log(str.trim().replace("JavaScript", "JS"));


// replaceAll()Replaces all occurrences.
let sentence = "JS is great. JS is powerful.";
console.log(sentence.replaceAll("JS", "JavaScript"));


// search()Searches pattern and returns index.
console.log(str.search("is"));

// includes()Checks if string contains value.

console.log(str.includes("Javascript"));

// indexOf()Returns first index of value.
console.log(str.indexOf("ava"));

// charAt(index)Returns character at position.
console.log(str.charAt(2));


// charCodeAt(index)Returns UTF-16 code.
console.log(str.charCodeAt(2));

// codePointAt(index)Returns Unicode code point (handles emojis).
console.log("❤️".codePointAt(0));

// concat()Joins strings.
let a = "Hello";
let b = "World";
console.log(a.concat(" ", b));





function capitalize(name) {
  if (!name) return "";   
  return name[0].toUpperCase() + name.slice(1);
}
console.log(capitalize("suraj"));




