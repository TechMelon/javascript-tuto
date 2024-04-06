const name = "Melon"
const repoCount =  10

console.log(name+ repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Melonie-tech')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   Melon    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://melon.com/melon%20tech"

console.log(url.replace('%20', 'the'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
