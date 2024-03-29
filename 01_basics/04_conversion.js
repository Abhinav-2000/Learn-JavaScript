// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)        //true
// console.log("02" < 1)       //false
// in above cases js performs lexicographical comparison during comparison operator so 2 > 1 => true && 0 > 1 => false


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

null == null; // true
null == undefined; // true

*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//strict check

console.log("2" == 2); //true
console.log("2" === 2); //false
