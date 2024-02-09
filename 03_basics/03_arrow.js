const user = {
    userName : "Abhinav",
    price : 999,

    welcomeMessage : function(){
        console.log(`Welcome to our course, ${this.userName}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "Shyam"
// user.welcomeMessage()

//  console.log(this)       //cempty object return

function one(){
    console.log(this);      // displays various objecs
}

one() 

function two(){
    userName : "Abhinav"
    console.log(this.userName);     // undefined => this context doen't work in functions. It is used in objects only.
}

two()

// Normal function

// const addTwo = function(num1, num2){
//    return num1 + num2
// }

// Arrow function : Syntax : () => {}

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//Implicit return
const addTwo = (num1,num2) => (num1 + num2)         // when statement is of single line
console.log(addTwo(4,5))


// in case of returning object you will have to use parenthesis example : 

const objExample = (num1, num2) => ({userName : "Abhinav"})