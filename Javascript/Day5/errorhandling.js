
function getData() {
  return new Promise((resolve, reject) => {
    let success=true;
    if(success){
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  }
  else{
    reject("Data lost");
  }

});

} 

//try-catch works with await.
//it is cleaner than .catch()
async function fetchData() {
  try {
    let result = await getData();
    return result;
  } catch (error) {
    throw error;
  }
}

fetchData();


// Error Handling with .then().catch()
fetchData()
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));


