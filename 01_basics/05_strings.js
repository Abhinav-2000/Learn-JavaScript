let name = "Abhinav"
let age = 22

// console.log(name + " Age: " + age); // outdated method (not a good practice now a days)


//string interpolation
// console.log(`Hello my name is ${name} and my age is ${age}.`);          //modern method (good practice)
console.log(`Hi there, This is ${name} and I am ${age} years old`);     


const gameName = new String("ravan")
console.log(gameName)
// console.log(gameName.__proto__);    //displays all prototypes on console 

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('v'))
console.log(gameName.charAt(2));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1,3)
console.log(anotherString);

const testString = "    Abhinav      "
console.log(testString.trim())

const url = "www.abhinav/coding%20mac.com"
console.log(url.replace('%20','-'))

console.log(url.includes("abhinav"))

const characterName = "ravan-asur"
console.log(characterName.split('-'))       // output => ['ravan', 'asur']