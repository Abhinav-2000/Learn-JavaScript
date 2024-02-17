const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((nums) => (nums + 10))

const newNums = myNums
    .map((nums) => (nums + 100))
    .map((nums) => nums + 1)            // we can use nested map or we can use filter methods too

console.log(newNums);

