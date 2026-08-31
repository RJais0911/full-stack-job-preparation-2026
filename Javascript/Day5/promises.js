// What is a Promise?
// A promise is like a real-life promise.

// “I promise I will send your file.”
// Pending → waiting
// Fulfilled → file sent
// Rejected → failed to send

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

//using a promise
myPromise
.then(result=>{    
    console.log(result);   //success
})

.catch(error=>{
    console.log(error);  //error
});



//promise chanining:-Using multiple .then() calls one after another.
function step1() {
  return new Promise(res => setTimeout(() => res("Step 1 done"), 1000));
}

function step2(msg) {
  console.log(msg);
  return new Promise(res => setTimeout(() => res("Step 2 done"), 1000));
}

step1()
  .then(step2)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));


  //Helps avoid callback hell.


//ex-> order pizza

let orderPizza= new Promise((resolve,reject)=>{
    let success=false;
    if(success){
    resolve("Pizza Ordered");
    }
    else{
        reject("Pizza cancelled");
    }
});

orderPizza
.then(result=>{
    console.log(result);
    return "Pizza is prepared";
})
.then(result=>{
    console.log(result);
    return "Pizza is delievered";
})
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
});




// let executePromise= new Promise((resolve,reject)=>{
//     let success =true;
//     if (success){
//         resolve("Execute Promise");
    
//     }else{
//         reject("Promise fail");
//     }
// });

//     executePromise
//     .then(result=>{
//         console.log("Step 1");
//     })
//     .then(result=>{
//         console.log("Step 2");
//     })
//     .then(result=>{
//         console.log("Step 3");
//     })
//     .catch(error=>{
//         console.log("Error");
//     });


    

