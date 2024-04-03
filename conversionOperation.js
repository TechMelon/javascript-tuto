let score = "Melon"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN-(Not a number)
// true => 1 , false => 0
// undefined => NaN
// null => 0

let isLoggedIn = "Melon"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true , 0 => false
// "" => false
// "Melon" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);


// ******************************OPERATIONS******************************

let value = 4
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 to the power 3
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " melon"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

//WRONG WAY
console.log(3+2-4%6);

console.log(+true);
console.log(+"");

let num1,num2,num3
// num1 + num2 + num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);