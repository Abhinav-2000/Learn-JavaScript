const myArr = [0,1,2,3]
const myHeroes = ["Shaktiman", "Hatim", "Vikral"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[0]);

// console.log(myArr);
// console.log(myArr2);


// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(8)    // adds 8 to start
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join();    // copies elements of myArr into newArr and converts it into string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)      //string type


// slice aur splice

console.log("A ", myArr);

const myNewArr = myArr.slice(1,3)
console.log("B ",myArr)
console.log(myNewArr);

const myNewArr2 = myArr.splice(1,3)     // splice modifies the myArr elements
console.log("C ", myArr)
console.log(myNewArr2);