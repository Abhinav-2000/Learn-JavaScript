var c = 300

if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;
}

//console.log(a);
//console.log(b);
console.log(c);


let a = 300

if(true)
{
    let a = 10
    console.log("Inner a : ", a);
}

console.log(a);


// scope level and mini hoisting

function one(){
    const username = "Abhinav"

    function two(){
        const website = "Youtube"
        console.log(username);      // child func can access the parents property
    }
    // console.log(website)     //can't access website

    two()
}

one()




if(true)
{
    const username = "Abhinav"
    if(username === "Abhinav"){
        const website = " Youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username)


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++ */

addOne(5)
function addOne(num)
{
    return num + 1;
}



const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5))          // cannot use this above func declaration as we did in func addOne