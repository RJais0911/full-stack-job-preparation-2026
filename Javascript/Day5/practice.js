function functionOne(flag){
    return new Promise((resolve,reject)=>{
        if(flag){
            resolve("resolved by functionOne");
        }else{
            reject("rejected by functionOne");
        }
    });
}

function functionTwo(flag){
    return new Promise((resolve,reject)=>{
        if(flag){
            resolve("resolved by functionTwo");
        }else{
            reject("rejected by functionTwo");
        }
    });
}

function functionThree(flag){
    return new Promise((resolve,reject)=>{
        if(flag){
            resolve("Resolve by functionThree");
        }else{
            reject("Rejected by functionThree");
        }
    });
}

//5.) parallel execution (Promise.all)

//case-5.1 All arguments are true

Promise.all([
    functionOne(true),
    functionTwo(true),
    functionThree(true),
])

.then(result=>{
    console.log("5.1 Parallel Success",result);
})
.catch(error=>{
    console.log("5.1 Parallel error",error);
});

// Output:-
// 5.1 Parallel Success: [
//   "resolved by functionOne",
//   "resolved by functionTwo",
//   "resolved by functionThree"
// ]


//case:-5.2 2nd function argument is false.

Promise.all([
    functionOne(true),
    functionTwo(false),
    functionThree(true)
])
.then(result=>{
    console.log("5.2 Parallel Success : ",result);
})
.catch(error=>{
    console.log("5.2 Parallel Error : ",error);
});


// Output:- 5.2 Parallel Error: rejected by functionTwo

// Note:-Promise.all fails fast if any promise rejects




// 6.) Sequential Execution (Promise chaining)
// 6.1 All arguments are true
functionOne(true)
.then(result1=>{
    console.log("6.1 Step 1 : ",result1);
    return functionTwo(true);
})
.then(result2=>{
    console.log("6.1 Step 2 : ",result2);
    return functionThree(true);
})
.then(result3=>{
    console.log("6.1 Step 3 : ",result3);
   
})
.catch(error=>{
    console.log("6.1 Error : ", error);
});


// Output:-
// 6.1 Step 1: resolved by functionOne
// 6.1 Step 2: resolved by functionTwo
// 6.1 Step 3: resolved by functionThree



// Case2:- 2nd argument is false
functionOne(true)
.then(result1=>{
    console.log("6.2 Step 1 : ",result1);
    return functionTwo(false);
})
.then(result2=>{
    console.log("6.2 Step 2 : ",result2);
    return functionThree(true);

})
.then(result3=>{
    console.log("6.2 Step 3 : ",result3);

})
.catch(error=>{
    console.log("6.2 Error : ",error);
});

// Output:-
// 6.2 Step 1: resolved by functionOne
// 6.2 Error: rejected by functionTwo


// 7.) Sequential Execution (Async / Await)
// Case1:- All arguments are true

async function  case7_1(){
    try{
        const res1=await functionOne(true);
        console.log("7.1 Step : 1", res1);

        const res2=await functionTwo(true);
        console.log("7.1 Step : 2", res2);
        const res3=await functionThree(true);
        console.log("7.1 Step : 3", res3);
    }catch(error){
        console.log("7.1 Error",error);
    }
}


case7_1();

// Output:-
// 7.1 Step 1: resolved by functionOne
// 7.1 Step 2: resolved by functionTwo
// 7.1 Step 3: resolved by functionThree

//case2:-2nd function argument is false

async function  case7_2(){
    try{
        const res1=await functionOne(true);
        console.log("7.1 Step : 1", res1);

        const res2=await functionTw0(false);
        console.log("7.1 Step : 2", res2);
        const res3=await functionThree(true);
        console.log("7.1 Step : 3", res3);
    }catch(error){
        console.log("7.1 Error",error);
    }
}

case7_2();

// Output:-
// 7.2 Step 1: resolved by functionOne
// 7.2 Error: rejected by functionTwo
