let score = "33";

//console.log(score);
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(valueInNumber)
//console.log(typeof valueInNumber);


// let score = "33abc"
// let valueInNumber = Number(score) //JS will not give error. output -> NaN(Not a Number)
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// boolean => 0/1

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn)

 // 1 => true, 0 => false
 // " " => false
 // "abhinav" => true


 let someNumber = 33
 let stringNumber = String(someNumber)

 //console.log(stringNumber)
 //console.log(typeof stringNumber)


 /*************************** Operations ************************/

 let str1 = "hello"
 let str2 = " Abhinav"

 let str3 = str1 + str2
 console.log(str3)

 console.log("1" + 2)       // 12
 console.log(1 + "2")       // 12
 console.log("1" + 2 + 2)   // 122
 console.log(1 + 2 + "2")   // 32

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCount = 100
gameCount++
console.log(gameCount)
