// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");
// console.log("N");
// console.log("A");
// console.log("V");

function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("V"); 
}

// sayMyName()          // sayMyName => reference && () => execution

function addTwoNum(num1,num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNum(3,5);
console.log("Result : ", result);


function loginUserMessage(userName) {
    if(!userName)
    {
        console.log("Please enter a username");
        return
    }

    return `${userName} just logged in.`
}

console.log(loginUserMessage("Abhinav"))


function calculateCartPrice(...num1)
{
    return num1;
}

console.log(calculateCartPrice(200,500,400,300));

const user = {
    userName : "Abhinav",
    price : 2499
}

function objectHandling(anyobject)
{
    console.log(`UserName is ${anyobject.userName} ans price is ${anyobject.price}`);
}

// objectHandling(user);

objectHandling({
    userName : "Ramesh",
    price : 2499
})


const myArr = [100,200,300,400]

function returnSecondValue(arr)
{
    return arr[1]
}

console.log(returnSecondValue(myArr));