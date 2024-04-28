function sayMYName(params) {
    console.log("M");
    console.log("e");
    console.log("l");
    console.log("o");
    console.log("n");
}
sayMYName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,7)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(4, 6)
console.log("result:",result);

function loginUserMessage(username = "saktiman"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Melon"));


function calculateCartPrice(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice(100,200,300,2000));

const user = {
    username:"Melon",
    price: 999
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"saktiman",
    price:999
})

const myNewArray = [100,200,300,400]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));