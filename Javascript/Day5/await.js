// async / await is an easier way to use promises.
// It makes asynchronous code look simple and readable, like normal code.

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}
//using .then()->  (old way)
// getData()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });


// Using async / await (simple & clean)

async function fetchData() {
  let result = await getData();
  console.log(result);
}
fetchData();  


// what happens here in this code:-
// fetchData() starts
// await getData() → waits till promise is finished
// Promise resolves → value stored in result
// console.log(result) runs

// No blocking, still asynchronous!








