//Prototype in JS 
//A JS object is an entity having state and behavior(properties and method.)
//prototype is something refernce to an object. or null also.
//JS objects has a special property called prototype. 

//we can set prototype using __proto__

//jab bhi koi object create hota hai, usme object prototype se general methods/properties inherit automatically ho jate hai.


const employee={        //it is a prototype  
    calcTax(){
        console.log("Tax rate is 10%");
    },
    };

const karanArjun= {    //this is refernce of employee
    salary:90000,
    calcTax(){
        console.log("Tax rate is 20%");      
    }

};
karanArjun.__proto__ = employee;    //to set a prototype

//here output will be "Tax rat is 20%" cuz if object & prototype have same method, object's method will be used.


const Shweta= {
    salary:80000,

};
Shweta.__proto__ = employee;    //to set a prototype


const Aishani= {
    salary:60000,

};
Aishani.__proto__ = employee;    //to set a prototype



