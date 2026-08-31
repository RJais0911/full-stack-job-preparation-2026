function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 3000);
    });
}

async function getWeatherData() {
    await api();  // waits 3 seconds
    await api();  // waits another 3 seconds
}

getWeatherData();

//another question 
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data : ",dataId);
            // resolve("success");
            reject("error");
        },3000);
    });
}
async function getAlldata(){
    await getData(1);
    await getData(2);
    await getData(3);
}
getAlldata();  



//unnecessary call to get out of this we have 
// IIFE (Immediately Invoked function expression)
// it is a function that is called immediately as soon it is defined.
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();

