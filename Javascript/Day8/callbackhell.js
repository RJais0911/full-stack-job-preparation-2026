function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log("data",dataID);
        if(getNextData){
            getNextData();
        }
        },2000);
 
};
//callback hell
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});


//another example


function sum(a,b){
  console.log(a+b);
}
function sub(a,b){
  console.log(b-a);
}
function mul(a,b){
  console.log(a*b);
}
function div(a,b){
  console.log(b/a);
}

//above normal function


//callback function
function calc1(a,b,callback){
    setTimeout(()=>{
        console.log("a =",a ,"b = ",b);
        if(callback){
            callback(a,b);
        }
    },2000);
}

//callbackhell 
calc1(1,2,(a,b)=>{
    console.log("Sub :",b-a);
    console.log("=============================");
    calc1(2,4,(a,b)=>{
        console.log("Sum : ",a+b);
         console.log("=============================");
        calc1(4,5,(a,b)=>{
            console.log("Mul :",a*b); 
            console.log("=============================");
            
            calc1(4,8,(a,b)=>{
                console.log("Div :",b/a);
                 console.log("=============================")
            })
        })
    })
});
