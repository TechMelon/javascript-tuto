// Two types of memory in js
// stack(primitive) - copy
let myYotubename = "snehabhardwaj.com"
let anothername = myYotubename
anothername = "techMelon"

console.log(anothername);
console.log(myYotubename);

// heap(non-primitive) - refrence

let userOne = {
    email:"abc@google.com",
    upi: "abc@ubl"
}

let userTwo = userOne

userTwo.email ="tech@google.com"

console.log(userOne.email);
console.log(userTwo.email);