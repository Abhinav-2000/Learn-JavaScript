const coding = ["Javascript", "HTML", "CSS", "Python", "CPP"]

// coding.forEach(function (item) {            // callback function use hota hai so name nhi padega
//     console.log(item);
// })


// using arrow funciton
// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe);    // just pass the reference no need to execute it


// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        languageName : "JavaScript",
        FileName : ".js"
    },
    {
        languageName : "C++",
        FileName : ".cpp"
    },
    {
        languageName : "Python",
        FileName : ".py"
    }
]

myCoding.forEach((item) => {
    // console.log(item.languageName);
    // console.log(item.FileName);
    console.log(`Language name is ${item.languageName} and its file type is ${item.FileName}`);
})