// if
const isUserLoggedIn = true
const temperature = 40
if (temperature === 43){
    console.log("Less than 40");
}
else{
    console.log("greater than 40");
}
console.log("Executed");
// <, >, <=, >=, ==, !=, ===


const score = 200
if (score>100) {
    let power = "fly"
    console.log(`User power:${power}`);
}
// console.log(`User power:${power}`);


const balance = 1000
// if (balance>500) console.log("test"), console.log("test2");
// THis is not a good practice.
if (balance < 500) {
    console.log("Less tha 500");
}else if (balance < 750){
    console.log("Less than 750");
}else if(balance < 900){
    console.log("Less than 900");
}else{
    console.log("Less than 1200");
}


const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}


const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}