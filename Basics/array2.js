const marvel_hero = ["ironman","loki","spiderman"]
const dc_hero = ["superman","flash","wonderwomen"]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

const allHero = marvel_hero.concat(dc_hero)
console.log(allHero);

const all_new_hero = [...marvel_hero,...dc_hero]
console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[8,9,[1,2]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Melon"))
console.log(Array.from("Melon")) 
console.log(Array.from({name: "Melon"})) // interesting topic

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
