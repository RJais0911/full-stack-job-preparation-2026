// 1. concat()

// Purpose: Merge arrays
// Does NOT modify original array

const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);

console.log(result); // [1,2,3,4]
console.log(a);      // [1,2]


// Return type: Array

// 🔹 2. every()

// Checks if ALL elements satisfy condition

const numbers = [2, 4, 6];

const isEven = numbers.every(num => num % 2 === 0);

console.log(isEven); // true


// Return type: Boolean

//  3. filter()

// Returns elements that satisfy condition

const nums1 = [10, 20, 30, 15];

const result1 = nums.filter(n => n > 20);

console.log(result1); // [30]


// Return type: Array

// 4. flat()

// Flattens nested arrays

const arr2 = [1, [2, [3, 4]]];

console.log(arr2.flat(2)); // [1,2,3,4]


// Return type: Array

//  5. flatMap()

// map() + flat(1)

const arr3 = [1, 2, 3];

const result3 = arr3.flatMap(x => [x, x * 2]);

console.log(result3); // [1,2,2,4,3,6]
// Return type: Array

//  6. forEach()

// Executes function on each element
//  Does NOT return anything

const arr4 = [1, 2, 3];

arr4.forEach(num => {
  console.log(num * 2);
});
// Return type: undefined

//  7. indexOf()

// Finds first index of value

const arr5 = [10, 20, 30];

console.log(arr5.indexOf(20)); // 1
// Return type: Number

// 8. lastIndexOf()

// Finds last occurrence index

const arr6 = [1, 2, 1, 3];

console.log(arr6.lastIndexOf(1)); // 2
// Return type: Number

//  9. map()
// Transforms each element

const nums4 = [1, 2, 3];

const square = nums4.map(n => n * n);

console.log(square); // [1,4,9]
// Return type: Array

//  10. reduce()

// Reduces array to single value

const nums5 = [1, 2, 3, 4];

const sum = nums5.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

// Return type: Any (Number, Object, String, etc.)

//  11. reverse()
//  Mutates original array
const arr7 = [1, 2, 3];

arr7.reverse();

console.log(arr7); // [3,2,1]
// Return type: Array

// 12. slice()
// Extracts part of array (non-mutating)

const arr8 = [10, 20, 30, 40];
console.log(arr8.slice(1, 3)); // [20,30]
// Return type: Array

//13. some()

// Checks if ANY element satisfies condition

const nums7 = [1, 3, 5];

const hasEven = nums7.some(n => n % 2 === 0);

console.log(hasEven); // false
// Return type: Boolean

// 14. sort()
//  Mutates original array

const nums8 = [10, 5, 20];

nums8.sort((a, b) => a - b);

console.log(nums8); // [5,10,20]
// Return type: Array

// 15. splice()
// Add / remove elements
// Mutates array

const arr9 = [1, 2, 3];

arr9.splice(1, 1, 99);

console.log(arr9); // [1,99,3]
// Return type: Array (removed elements)

// 16. entries()
// Returns key-value pairs iterator

const arr10 = ['a', 'b'];

for (const [index, value] of arr10.entries()) {
  console.log(index, value);
}
// Return type: Array Iterator

// 17. fill()

// Fills array with static value
// Mutates array

const arr11 = [1, 2, 3];

arr11.fill(0);

console.log(arr11); // [0,0,0]
// Return type: Array

// 18. find()

// Finds first matching element

const arr12 = [5, 12, 8];

const result5 = arr12.find(n => n > 10);

console.log(result5); // 12
// Return type: Element or undefined

// 19. findIndex()
// Find index of matching element

const arr13 = [5, 12, 8];

console.log(arr13.findIndex(n => n > 10)); // 1
// Return type: Number

// 20. findLast()
// Finds last matching element

const arr14 = [1, 4, 6, 4];
console.log(arr14.findLast(n => n === 4)); // 4
// Return type: Element or undefined

// 21. findLastIndex()
const arr15 = [1, 4, 6, 4];
console.log(arr15.findLastIndex(n => n === 4)); // 3
// Return type: Number

// 22. includes()
// Checks existence of element

const arr16 = [1, 2, 3];
console.log(arr16.includes(2)); // true
// Return type: Boolean

//  23. join()

// Converts array to string

const arr17 = ['A', 'B', 'C'];

console.log(arr17.join('-')); // A-B-C
// Return type: String

// 24. keys()

// Returns index iterator

const arr18 = ['x', 'y'];

for (const key of arr18.keys()) {
  console.log(key);
}
// Return type: Array Iterator

// 25. values()
// Returns value iterator

const arr19 = ['x', 'y'];

for (const value of arr19.values()) {
  console.log(value);
}
// Return type: Array Iterator