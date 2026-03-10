const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //this is outdated way.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is called string interpolation, (modern way)


const gameName = new String('hitesh-hc-com') //another way of declaration of string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0, 4)
console.log(newString);//hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);//   hitesh    
console.log(newStringOne.trim());//hitesh

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//'%20' will be replaced by '-'

console.log(url.includes('sundar'))//false it is not available there

console.log(gameName.split('-'));//based on '-' the string will split, Output: [ 'hitesh', 'hc', 'com' ]

//Note: Use always ``(backticks), it is a modern way