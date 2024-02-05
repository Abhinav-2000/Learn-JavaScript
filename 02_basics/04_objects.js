// const tinderUser = new Object();

const tinderUser = {}
tinderUser.email = "abhinav69967@gmail.com"
tinderUser.name = "abhinav"
tinderUser.id = "abc123"

//console.log(tinderUser);

const regularUser = {
    email : "abhianv69968@gmail.com",
    fullName : {
        userName : {
            firstName : "abhinav",
            lastName : "aditya"
        }
    }
}

console.log(regularUser.fullName.userName.firstName);


const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}
const obj3 = { 5 : "e", 6 : "f"}

//const obj4 = {obj1,obj2}
//const obj4 = Object.assign({},obj1,obj2)

const obj4 = {...obj1,...obj2}
console.log(obj4);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/* ************************************************************* */

const course = {
    courseName : "C in Depth",
    courseFee : 999,
    courseInstructor : "Abhinav Aditya"
}

console.log(course.courseInstructor);   // better to use the below method

const {courseName : cName, courseFee : cFee} = course       // syntax => const {} = course  // put properties in curly braces to access them directly
console.log(cName);
console.log(cFee);