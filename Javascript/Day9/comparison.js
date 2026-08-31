function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log("data",dataID);
        if(getNextData){
            getNextData();
        }
        },2000);
 
};
getData(1);


//callback hell 
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});

function getData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(id);
        }, 2000);
    });
}

//promise chaining
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

//async await function
async function getAlldata() {
    await getData(1);
    await getData(2);
    await getData(3);
}
getAlldata();;
//unnecessary call to get out of this we have 
// IIFE (Immediately Invoked function expression)
// it is a function that is called immediately as soon it is defined.
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
})();

