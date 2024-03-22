// let myName = "Abhinav     "
// let myChannel = "AbhinavCodes   "

// Here I want to inject a trueLength method
//console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhinav = function(){
    console.log("Abhinav is present in all object");
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.abhinav();
// myHeros.abhinav();

// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let string = "Abhinav    "

String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`);
}

console.log(string.trueLength());
"shyam  ".trueLength()