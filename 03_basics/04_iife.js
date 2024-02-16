// Immediately Invoked Function Expressions (IIFE)

// named iife
(function db(){
    console.log(`DB Connected`)
})();                               // for immediate invoke : ()()


// this will throw error if above function in not terminated by ;
(() => {                                // unnamed iife without parameter
    console.log(`DB2 Connected`)
})();                               

// unnamed iife with parameters
((name) => {
    console.log(`${name}'s DB Connected`)
})('Abhinav')