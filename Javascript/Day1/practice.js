//q1:- print all even numbers from i to 100.

for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//q2:- game to guess the game number until the user gets it right.
let gameNumber=25;
let userNum=prompt("Guess the number between 1 to 100:");

while(userNum!=gameNumber){
    userNum=prompt("Wrong guess! Try again:");
}
console.log("Congratulations! You guessed it right.");