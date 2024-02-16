const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello Namaste"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`) 
}

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")

// console.log(map);

for (const [key,value] of map) {                // key o/p : array   [key] o/p : individual element
    // console.log(key, ":-", value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

// for (const key of myObject) {           // objects are not iteratable
//     console.log(key);
// }