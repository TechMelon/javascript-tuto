// Data type divided into two parts

//  1. Primitive

//  it has 7 types: 
// String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// symbol is used to give a uniqueness to a value
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof anotherId);

const bigNumber = 3456543576654356754n



// 2.Reference (Non primitive)

// Array, Objects, Functions


// array
const heros = ["shaktiman", "naagraj", "doga"];
// object
let myObj = {
    name: "hitesh",
    age: 22,
}
// function
const myFunction = function(){
    console.log("Hello world");
}