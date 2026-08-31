//Loops in JS
// for(let i=0;i<5;i++){
//     console.log("Relinns");
// }

//calculate sum from 1to5
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum+=i;
// }
// console.log(sum);

// console.log("-------");

//while loop:-
// while(Conition){
//     //do something
// }

let j=1;
while(j<=5){
    console.log("Relinns");
    j++;
}

//calculate sum from 1to5
let sum =0;
let k=1;
while(k<=6){
    k++;
    sum+=k;
}
console.log("Sum=",sum);
console.log("-------");

//do-while loop:-
// do{
//     //do something
// }while(condition);

// let m=0;
// do{
//     console.log("ruchi");
//     m++;
// }while(m<5);


//for-of loop:- to iterate over iterable objects like arrays, strings, etc.
let str="Relinns Technologies";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("Size=",size);


//for-in loop:- to iterate over the properties of an object.
let student={
    name:"Ruchi",
    age:21,
    cgpa:9.1,
    isPassed:true   
};
for(let i in student){
    console.log("key=",i,":","values=",student[i]);
}
