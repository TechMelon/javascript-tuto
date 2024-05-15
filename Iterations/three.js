// For of

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}



const greetings = "Hello World!"
for (const greets of greetings) {
    console.log(`Each char is ${greets}`);
}




// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "US")
map.set('FR', "France")
console.log(map);



for (const [key, value] of map) {
    console.log(key, ':-', value);
}



const myObject = {
    game1: 'chess',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
// Not itratble