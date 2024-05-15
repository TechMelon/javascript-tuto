// For in.

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming = ["js", "rb", "py", "cpp", "java"]
for (const key in programming) {
    console.log(programming[key]);
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "US")
map.set('FR', "France")
console.log(map);
for (const key in map) {
    // console.log(key);
}
// Not itratable