let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());     // Mon Jan 22 2024
console.log(myDate.toLocaleString());   // 1/22/2024, 7:05:27 PM

// let myCreatedDate = new Date(2024, 0, 22)
// let myCreatedDate = new Date(2024,0,22,5,30,2)      // 1/22/2024, 5:30:02 AM

let myCreatedDate = new Date("2024/01/25")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))        // in case we want to compare in seconds


let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());            // indexing starts from 0 i.e. 0 => Jan, 1 => Feb
console.log(newDate.getFullYear());


console.log(`Hey everyone !! Current date is ${newDate.toDateString()}`);
