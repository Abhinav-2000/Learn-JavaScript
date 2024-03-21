// user is a object literal
const user = {
    username : "abhinav",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function(){
        console.log('Got user details from data base');
        console.log(`Username : ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    //return this;
}

const userOne = new User("SingAbhinav",44,true)         // new keyword provide new instance of constructor
const userTwo = new User("SingAbhinav2",4,false)

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);
