
const score = 400
console.log(score);//400

const balance = new Number(100) //specially defining an object which has a type called number
console.log(balance);//[Number: 100]

console.log(balance.toString().length);//length: 3 //now this is became a string

console.log(balance.toFixed(1));//100.0
console.log(balance.toFixed(2));//100.00 //it will fix the precision upto two digits after decimal

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));//124
console.log(otherNumber.toPrecision(4));//123.9


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 //It will represent the number in the specific format. 'en-IN' is an indian format.



// // +++++++++++++ Maths +++++++++++++++++++++++++++++
// maths liabrary comes in JavaScript bydefault. 

// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-4));//absolute value: 4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));//8

console.log(Math.random());//value always lies between 0 and 1 in decimal//0.6274142495319033
console.log((Math.random()*10) + 1);//isse value kabhi 0 nhi aayegi// 4.617400240599844
console.log(Math.floor(Math.random()*10) + 1); //7 //all the digis after decimal will be removed because of floor

const min = 10
const max = 20
//we need values between min and max (10 and 20)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)