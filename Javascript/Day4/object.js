const student={
    fullName:"Ruchi",
    marks:92.4,    //states
    printMarks:function(){      //methods
        console.log("marks = ",this.marks); //this-> student.marks
    }
};


//creating an object
const user={
    name:"Ruchi",
    age:22,
    city:"Kanpur",
    introduce:function(){
        console.log(`Hi, my name is ${this.name}. I am ${this.age} y/o, and i live in ${this.city} city.`);
    }
    
};

//dot notation:- used when property is known
console.log(user.name); //ruchi
console.log(user.age);  //22
user.introduce();       //uses this keyword



//bracket notation:-used when property name is dynamic

const key="city";
console.log(user[key]);   //Kanpur

user["age"]=23;
console.log(user.age);  //23   here the value of age gets changed.

user.introduce(); //here the age will updated with a new value.


//this keyword:- refers to current object

const emp={
    name: "Madhav",
    role: "Developer",
    getDetails:function(){
        return (`${this.name} is a ${this.role}.`);
    }
};
console.log(emp.getDetails());



//object constructor:-used to create multiple similar objects

//Useful when:
// Creating many objects
// Reusability
// Memory efficiency

function Person(name,age){
    this.name=name;
    this.age=age;
}

const p1=new Person("Ruchi",22);
const p2=new Person("Riya",24);


console.log(p1,p2);



