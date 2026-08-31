// function attachEventListener(){
//     let count=0;
//      document.getElementById("clickMe")
//         .addEventListener("click", function xyz() {
//             console.log("Button Clicked");
//             count++;
//             console.log(`Button clicked ${count} times`);
//         });
// }
//  attachEventListener();   



// console.log("Start");
// document.getElementById("clickMe")
// .addEventListener("click", function cb(){
//     console.log("Button Clicked");
// })
// console.log("End");
    


// console.log("Start");
// setTimeout(function cbT(){
//     console.log("Inside Timeout");
// },5000);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(function cbF(response){
//     console.log("Inside Fetch");
// });
// console.log("End");



// const radius = [3,1,2,4];
// const area= function(radius){
//     return Math.PI* radius*radius;
// };
// const circumference=function(radius){
//     return 2*(Math.PI*radius);
// }
// const diameter=function(radius){
//     return 2*(radius);
// }

// const calculate = function(radius, logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(calculate(radius, area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
    

// //fetch() with async/await
// const API_URL= "https://api.github.com/users/Rjais0911";

// // using async/await
// async function handlePromise(){
//     const data= await fetch(API_URL);
//     const jsonValue= await data.json();
//     console.log(jsonValue); 
// }
// handlePromise();
   

// error handling with async/await
const API_URL= "https://api.invalid/users/Rja1";

// async function handlePromise(){
//     try{
//         const response= await fetch(API_URL);
//         const jsonValue= await response.json();
//         console.log(jsonValue);
//     }
//     catch(error){
//         console.log("Error fetching data:", error);
//     }
// }
// handlePromise();

// another tradition method of error handling with promises
async function handlePromise(){
    const response =await fetch(API_URL);
    const jsonValue= await response.json();
    console.log(jsonvalue);
}
handlePromise().catch(()=>console.log("Error fetching data"));

