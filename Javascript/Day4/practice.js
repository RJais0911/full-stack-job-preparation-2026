//clg website. Create a class User with 2 properties, name& email.
//also has a method viewData() that allows user to view website data.

let DATA="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data = ",DATA);
    }
    
}

let student1= new User("Ruchi","ruchi@email.com")
let student2= new User("Shivam","shivam1@email.com")

console.log(student1);
console.log(student2);




//new class Admin which inherits from user. Add a new method called editData
//to admin that allows it to edit website data.
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="Some new value";
    }

}

let admin1 = new Admin("Admin","admin1@college.com");
let admin2 = new Admin("Admin","admin2@college.com");

console.log(admin1);





