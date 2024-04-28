const accountId = 122378
let accountEmail = "sneha@google.com"
var accountPassword = "12345"
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "sheohar"
// variable can be use like this also..,but this is not a good practice.
let accountState;
// if you declare a value without defining it then it will give undefine value.
accountEmail ="smooth@google.com"
accountPassword = "212121"
accountCity = "purnea"
// accountId = 2 // not allowed
console.log(accountId);
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])