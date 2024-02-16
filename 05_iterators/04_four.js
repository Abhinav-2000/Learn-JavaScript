const myObject = {
    'js' : "javascript",
    'cpp' : "C++",
    'Rb' : "Ruby"
}

// to iterate in objects we use forin loop

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}