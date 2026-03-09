let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); //typecasting or type conversion
console.log(typeof valueInNumber); //it is converted in Number but it is (NaN) Not a Number

console.log(valueInNumber); //NaN

//Notes-----------
//If the below values are converted in Number, what will come
//"33" => 33
//"33abc" => NaN
// true => 1;  and false => 0
//"hitesh" => NaN (not a number)

console.log("\n");//It will print a next line

let isLoggedIn = 1 //number

let booleanIsLoggedIn = Boolean(isLoggedIn) //typecasting in Boolean datatype

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// if they are converted in Bollean
//1 => true
//0 => false
//"" (empty string) => false
//"hitesh" = true


console.log("\n");
let someNumber = 33 //number

let stringNumber = String(someNumber) //string

console.log(stringNumber); //33
console.log(typeof stringNumber); //type = string

/**************Operations************* */
console.log("\n");
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);//2^2
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " prem"
let str3 = str1 + str2 //concatination

console.log(str3); //hello prem

//Important (Tricky Conversions)
console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

console.log(+true) //1

let gameCounter = 100
gameCounter++; //postfix: 101
++gameCounter; //prefix: 102
console.log(gameCounter);//102

