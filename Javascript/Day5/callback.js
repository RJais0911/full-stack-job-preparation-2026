//setTimeout():-It runs a function after a given time (only once).
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);


//setInterval:-It runs a function again and again after a fixed time.
//print numbers in every second.
let count = 1;
let intervalId = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(intervalId); // stops interval
  }
}, 1000);



//callback:-A callback is a function passed inside another function,
// and it runs after some work is done.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Ruchi", sayBye); //sayBye-> callback function.


// In this code, sayBye is passed as a callback to greet, 
// which allows greet to execute additional logic after greeting the user.






//callback Hell:-When callbacks are nested inside callbacks,
//  the code becomes:hard to read and hard to debug

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);



