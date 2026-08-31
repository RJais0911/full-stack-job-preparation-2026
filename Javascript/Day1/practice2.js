//q1:-prompt the user to enter their full name. Genreate a 
// username for them based on the input.
// Start username with @, followed bt their full name and ending with the fullname length.

let userName=prompt("Enter your full name:");
let userNameGen=`@${userName}${userName.length}`;
console.log("Generated Username:",userNameGen);
