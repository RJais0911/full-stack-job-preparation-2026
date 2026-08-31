function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data1");
            resolve("success");
        },4000);
        
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data2");
            resolve("success");
        },4000);
        
    });
}
console.log("Fetching data1....... ");
let p1=asyncFunc1();

p1.then((res)=>{
    console.log(res);
    console.log("Fetching data2....... ");
let p2=asyncFunc2();

p2.then((res)=>{
    console.log(res);
});
})


//another example
function getData(dataID){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataID);
        resolve("success");
        
        },2000);
 
});
}
getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
})