const accountId = 1223
let accountEmail = "abhinav69967@gmail.com"
var password = "abhinav0099"
accountCity = "Patna"
let accountState;

// accountId = 2 //Not Allowed

accountEmail = "abhinav69968@gmail.com"
password = "abhinav1122"
accountCity = "Patiala"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,password,accountCity,accountState])
