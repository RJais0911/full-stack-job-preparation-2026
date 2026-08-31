const data = {
  user: {
    profile: {
      email: "test@gmail.com"
    }
  }
};

console.log(data.user?.profile?.email); // test@gmail.com
console.log(data.user?.address?.city);  // undefined


//chaining with arrays
const users = [];
console.log(users?.[0]?.name); // undefined


//with function
const obj = {
  sayHello() {
    console.log("Hello!");
  }
};

obj.sayHello?.();   // Hello!
obj.sayBye?.();     // undefined (no error)
