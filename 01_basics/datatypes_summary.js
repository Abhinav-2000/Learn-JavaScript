// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol   (call by value)
//           BigInt

let score = 300
let scoreValue = 30.3

const isLoggedIn = false
const outsideTemp = null

let emailId = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Non primitve or Refernce 

// Arrays, Objects, Funcitons

const heroes = ["shaktiman", "naagraj"]

let myObj = {
    name : "Abhinav",
    age : 22,
}

const myFunction = function(){
    console.log("Namaste Duniya");
}


/************************************************************************************************/

//Stack(Primitive) Heap(Non Primitive)

let myName = "Abhinav"
let myNickName = myName

myNickName = "shyam"
console.log(myName)
console.log(myNickName)


let userOne = {
    name : "Abhinav",
    age : 22,
}

let userTwo = userOne;
userTwo.name = "Shyam"

console.log(userOne.name);