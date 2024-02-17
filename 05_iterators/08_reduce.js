const myNums = [1,2,3]

const total = myNums.reduce(function(acc,curr){
    console.log(`accumulator value is ${acc} and current value is ${curr}`);
    return acc + curr
},0)

// const total = myNums.reduce((acc,curr) => (acc+curr),0)      // with the help of arrow function
console.log(total); 


const shoppingCart = [
    {
        itemName : "Python course",
        price : 2999
    },
    {
        itemName : "JS course",
        price : 3999
    },
    {
        itemName : "CSS course",
        price : 499
    },
    {
        itemName : "HTML course",
        price : 999
    }
]

const cartValue = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(cartValue);