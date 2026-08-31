//Class in javascript

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName=brand; //brand -> args of this particular function.
//     }
//     //this.brand->class se banne wali sare objects ki property hai
    

// }

// let Fortuner= new ToyotaCar();   //to make object by any class.
// Fortuner.setBrand("Fortuner");
// let Lexus= new ToyotaCar();   //to make object by any class.
// Lexus.setBrand("Lexus");


//Constructor in JS
// It is a special method. which automatically involked by new. 
// Generally works to intialize objects.

class ToyotaCar{

    constructor(brand,mileage){
        console.log("Creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    
}

let Fortuner= new ToyotaCar("Fortuner",10);   //constructor
console.log(Fortuner);
let Lexus= new ToyotaCar("Lexus",12);    //constructor
console.log(Lexus);




//Inheritance in JS:- passing down properties & methods from parent class to child class.



class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}    

let obj= new Child();


console.log("-----------------------------");


class Person{
    constructor(){
        this.species="Homo-Sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do nothing.")
    }
}


class Engineer extends Person{
    work(){
        console.log("Solve problems, build something.");
    }
}
class Doctor extends Person{
    work(){
        console.log("Treats patient.");
    }
}

let  ruchiObj= new Engineer();
console.log(ruchiObj);
let  shreyaObj= new Doctor();
console.log(shreyaObj);

let vasuObj= new Person();
console.log(vasuObj);



//super keyword:- It is used to call the constructor of its parent class to access the parent's prop. and methods.

class Person1{
    constructor(){
        console.log("enter parent constructor")
        this.species="Homo-Sapiens";
    }
    eat(){
        console.log("eat");
    }
   
}
class Engineer1 extends Person1{
    constructor(branch){
        console.log("enter child constructor")
        super(); //TO INVOKE PARENT CLASS CONSTRUCTOR
        this.branch=branch;
        console.log("exit child constructor")
    }
    work(){
        console.log("Solve problems, build something.");
    }
}

let  enggObj= new Engineer1("Software Engineer");
console.log(enggObj);





// The code demonstrates ES6 class-based inheritance where Engineer2 extends Person2,
// invokes the parent constructor using super(), and accesses a parent method using super.eat().

class Person2{
    constructor(name){
        this.species="Homo-Sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
   
}
class Engineer2 extends Person2{
    constructor(name){
        super(name); //TO INVOKE PARENT CLASS CONSTRUCTOR   
    }
    work(){
        super.eat();
        console.log("Solve problems, build something.");
    }
}

let  engObj= new Engineer2("Ruchi");
console.log(engObj);




//Error Handling:- (try-catch)

let a=5;
let b=10;
console.log("a = ",a);
console.log("b = ",b);
console.log("sum = ",a+b);

try{
    console.log("a+b = ",a+c); //error
} catch(err){
    console.log(err);
}
console.log("sum = ",a+b);
console.log("sum = ",a+b);
console.log("sum = ",a+b);
console.log("sum = ",a+b);
console.log("sum = ",a+b);
console.log("sum = ",a+b);
console.log("sum = ",a+b);




















