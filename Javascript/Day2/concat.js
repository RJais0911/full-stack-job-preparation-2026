// Purpose: Merge arrays
// Does NOT modify original arrays but it return new array.

const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);

console.log(result); // [1,2,3,4]
console.log(a);      // [1,2]
// Return type: Array

const c=['x','y'];
const d=['z'];

const res= c.concat(d);
console.log(res);

//Concatenating array-like objects with Symbol.isConcatSpreadable
//concat does not treat all array-like objects as arrays by default — only if Symbol.isConcatSpreadable is set to a truthy value (e.g., true).

const obj1={0:'a',1:'b', c: 'c',length:2};
const obj2={0:'x',1:'y',2:'z',length:3, [Symbol.isConcatSpreadable]:true};

const res1=(['Q'].concat(obj1,obj2));
console.log(res1); 
