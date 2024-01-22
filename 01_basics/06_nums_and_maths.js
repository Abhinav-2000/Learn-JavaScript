const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 112.833
console.log(otherNumber.toPrecision(4));

const anotherNUmber = 10000000000
console.log(anotherNUmber.toLocaleString('en-IN'));


/* ++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++ */

console.log(Math)
console.log(Math.abs(-124))
console.log(Math.round(4.67))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))


console.log(Math.random())
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)