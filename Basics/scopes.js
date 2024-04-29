// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER:",a);
}
console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Melon"
    function two(params) {
        const website = "agnicase.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
// child function can access the parent function.


if (true) {
    const username = "Melon"
    if (username === "Melon") {
        const website = " agnicase.com"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// **********************Interesting************************

console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){
    return num + 2
}