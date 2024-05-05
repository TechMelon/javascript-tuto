// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti h iss liye humlog IIFE use karte h.

(function pani(){
    // named IIFE
    console.log(`DataBase CONNECTED`);
})();

( (name) => {
    // simple IIFE
    console.log(`DataBase CONNECTED TWO ${name}`);
} )('Melon')