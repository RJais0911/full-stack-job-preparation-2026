function sum(a,b){
  console.log(a+b);
}

function calc(a,b,callback){
    callback(a,b);
}
calc(1,2,(a,b)=>{
  console.log("Sum :",a+b);
});


const hello=()=>{
  console.log("Hello");
}
setTimeout(hello,3000);