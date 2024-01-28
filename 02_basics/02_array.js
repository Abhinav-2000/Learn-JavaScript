const marvel_heroes = ["Thor", "IronMan", "Hulk"]
const dc_heroes = ["Batman", "SuperMan", "Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// spread operator(...)

const allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes);
 
const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const anotherArray2 = anotherArray.flat(Infinity)
console.log(anotherArray2);


console.log(Array.isArray("Abhinav"));
console.log(Array.from("Abhinav"));

console.log(Array.from({name : "Abhinav"}));    //interesting (batana prega key or value me se kiska array banana h)

let x = 100;
let y = 200;
let z = 300;

console.log(Array.of(x,y,z));