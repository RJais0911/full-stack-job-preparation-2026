// Day 1: Introduction to JavaScript, Variables, and Data Types, operators and conditional statements.



// console.log("Welcome,");
// console.log("Good Morning!");
// console.log("Have a great day ahead!");


// Name="Ruchi";
// console.log(Name);

// let name="Ruchi";
// name="Alice";
// console.log(name);



// const greeting="Welcome to JavaScript.";
// greeting="Hello!"; // This will cause an error because 'greeting' is a constant.
// console.log("Hello, "+name+"!"+" "+greeting);





// //Operators and Conditional Statements
// // Arithmetic Operators
// let a=10;
// let b=3;    
// console.log("Addition: ", a+b); //13
// console.log("Subtraction: ", a-b); //7
// console.log("Multiplication: ", a*b); //30
// console.log("Division: ", a/b); //3.3333
// console.log("Modulus: ", a%b); //1
// console.log("Exponentiation: ", a**b); //1000
// console.log("Increment: ", ++a); //11
// console.log("Increment: ", a++); //11
// console.log("Decrement: ", --b); //2

// //Assignment Operators
// let c=5;
// c +=3;
// console.log("c=",c); //8

// c-=2;
// console.log("c=",c); //6

// c*=4;
// console.log("c=",c); //24   

// c/=6;
// console.log("c=",c); //4

// c%=3;
// console.log("c=",c); //1

// c**=4;
// console.log("c=",c); //1

// //Comparison Operators 
// let x=7;
// let y=10;
// console.log(x==y); //false
// console.log(x!=y); //true
// console.log(x>y); //false
// console.log(x<y); //true
// console.log(x>=y); //false
// console.log(x<=y); //true
// console.log(x===y); //false
// console.log(x!==y); //true


// //logical Operators
// let p=true;
// let q=false;
// console.log(p && q); //false  AND
// console.log(p || q); //true   OR
// console.log(!p); //false      NOT
// console.log(!q); //true


// //Conditional Statements
// //if statement
// let age=18;
// if(age>=18){
//     console.log("You are eligible to vote.");
// }

// //if-else statement

// let marks=75;   
// if(marks>=40){
//     console.log("You have passed the exam.");
// }
// else{
//     console.log("You have failed the exam.");
// }   

// let number=10;
// if(number%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// //else-if ladder
// let score=85;
// if(score>=90){
//     console.log("Grade A");
// }       
// else if(score>=80){
//     console.log("Grade B");
// }   
// else if(score>=70){
//     console.log("Grade C");
// }           
// else{
//     console.log("Grade D");
// }
// //ternary operator
// let time=10;
// let greeting=time<12 ? "Good Morning!" : "Good Afternoon!";
// console.log(greeting);

// //switch statement
// let day=3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;      
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;  
//     case 4:
//         console.log("Thursday");
//         break;  
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;  
//     default:
//         console.log("Invalid day");
// }



// q1.
// Create variables for: name, age, city, isStudent  and print them.

// let name="Ruchi";
// let age=21;
// let city="Delhi";
// let isStudent=true;
// console.log("Name: "+name);
// console.log("Age: "+age);
// console.log("City: "+city);
// console.log("Is Student: "+isStudent);


//Q2 Create two numbers and print: Sum Difference Product Division Remainder

// let num1=10;
// let num2=3;
// console.log("Sum: "+(num1+num2));
// console.log("Difference: "+(num1-num2));
// console.log("Product: "+(num1*num2));
// console.log("Division: "+(num1/num2));
// console.log("Remainder: "+(num1%num2));

//Q3 Check whether a number is: positive negative zero

// let num=prompt("Enter a number:");
// if(num>0){
//     console.log(num+" is positive.");
// }
// else if(num<0){
//     console.log(num+" is negative.");
// }
// else{
//     console.log(num+" is zero.");
// }

//Q4 Check whether a people is eligible to vote or not. (age>=18)

// let age= prompt("Enter your age:");
// if(age>=18){
//     console.log("You are eligible to vote.");
// }
// else{
//     console.log("You are not eligible to vote.");
// }


//Q5 Check whether a number is even or odd.

// let number=prompt("Enter a number:");
// if(number%2==0){
//     console.log(number+" is even.");
// }
// else{
//     console.log(number+" is odd.");
// }   

// console.log(10 == "10"); //true
// console.log(10 === "10"); //false
// console.log(0 == false); //true
// console.log(0 === false); //false

// let x = "10";
// let y = 5;

// console.log(x + y);
// console.log(x - y);


// console.log(Boolean(""));  //false
// console.log(Boolean(" ")); //true
// console.log(Boolean(0));   //false
// console.log(Boolean(1));   //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(NaN)); //false



//Q6 Write a program to find the largest of three numbers.

// let num1=prompt("Enter first number:");
// let num2=prompt("Enter second number:");
// let num3=prompt("Enter third number:"); 
// if(num1>num2 && num1>num3){
//     console.log(num1+" is the largest number.");
// }
// else if(num2>num1 && num2>num3){
//     console.log(num2+" is the largest number.");
// }
// else{
//     console.log(num3+" is the largest number.");
// }

// Q7 Write a code which can give grades to students according to their marks:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// let num =prompt("Enter your marks:");
// if(num>=90 && num<=100){
//     console.log("Grade A");
// }
// else if(num>=80 && num<90){
//     console.log("Grade B");
// }
// else if(num>=79 && num<80){
//     console.log("Grade C");
// }
// else if(num>=60 && num<70){
//     console.log("Grade D");
// }
// else if(num<60){
//     console.log("Grade F");
// }
// else{
//     console.log("Invalid marks");
// }




//q8:- get user to input a number using prompt ("Enter a number:"). Check if the number is a multiple of 5 or not.

// alert("Hello!"); //display an alert box with a message

// let num=prompt("Enter a number:"); //get user input and store it in variable num
// if(num%5==0){
//     console.log(num+"is a multiple of 5.");
// }
// else{
//     console.log(num+"is not a multiple of 5.");
// }


//Q9 Write a program that checks whether a number is divisible by both 3 and 5.
// let num=prompt("Enter a number:");
// if(num%3==0 && num%5==0){
//     console.log(num+" is divisible by both 3 and 5.");  
// }
// else{
//     console.log(num+" is not divisible by both 3 and 5.");
// }



// //practice question
// //Create a constant object called 'Product' with properties: name (string), rating (number), offer (number), and price (number). 
// // Assign appropriate values to each property.
// const Product={
//     name: "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// //Create a constant object called 'profile' with properties: name (string), posts (number), followers (number), following (number), and verified (boolean). 
// // Assign appropriate values to each property.
// const profile={
//     name: "Riya",
//     posts: 120,
//     followers: 3000,
//     following: 180,
//     verified: true
// };
// console.log(typeof profile.followers);
// console.log(typeof profile.verified);


// Objects in JavaScript

// const Student ={
//     name: "Ruchi",
//     age: 21,
//     cgpa: 9.1,
//     isEnrolled: true
// };
// console.log(Student.name);
// console.log(Student.age);
// console.log(Student["cgpa"]);

// //suppose if we want to assign a new value to age in objects we can do
// Student.age=22;
// console.log(Student.age); //or
// Student["age"]=23;
// console.log(Student.age);

// // But if we try to reassign the entire object, it will cause an error
// // Student ={
// //     name: "Alice",
// //     age: 20
// // }; // This will cause an error because 'Student' is a constant.
// console.log(Student);

// //in conclusion, we can modify the properties of a constant object, but we cannot reassign the entire object to a new value.





