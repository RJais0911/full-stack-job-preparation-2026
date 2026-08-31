function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("success");
            if(getNextData){
            getNextData();
            }
        },5000);
    });
}

let Promise= getData(123);

//for using promises
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
        // reject("error");
    })
}
let promise=getPromise();
promise.then(()=>{
    console.log("Promise fullfilled");
})
promise.catch(()=>{
    console.log("Promise rejected");
});



//using promises in asyncfunction
function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data1");
            resolve("success");
        },4000);
        
    });
}
console.log("Fetching data1....... ");
let p1=asyncFunc();

p1.then((res)=>{
    console.log(res);
})