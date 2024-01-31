// Singleton
// Object.create()      // single instance (Costructor)

// object literals      // multiple instances
 
const mySym = Symbol("key1")

const JSuser = {
    name : "Abhinav",
    "full Name" : "Abhinav Aditya Singh",
    age : 22,
    location : "Patna",
    Email : "abhinav69967@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday","Tuesday"],
    [mySym] : "myKey1"                      // symbol will be written in bracket otherwise it will be treated as a string
}

// console.log(JSuser.Email);
// console.log(JSuser["Email"]);       //good practice
// console.log(JSuser["full Name"]);

// console.log(JSuser[mySym]);

// Object.freeze(JSuser);  // this will freeze the object and it's value will not be changed now 

// value overwriting
JSuser.Email = "abhinav69968@gmail.com"
// console.log(JSuser["Email"]);

// console.table(JSuser);


//adding functions
JSuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JSuser.greeting());

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greetingTwo());