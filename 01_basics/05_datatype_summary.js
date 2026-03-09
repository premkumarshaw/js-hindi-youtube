// JavaScript is a dynamically typed language.
// Variable type is decided at runtime
// You don’t need to declare the type


//  Primitive Datatypes
//  7 types : [String, Number, Boolearn, null, undefined, Symbol, BigInt] : They all are call by value

// null means Empty not 0

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false // type: boolean
const outsideTemp = null //empty variable, Type = object
let userEmail;//undefined 

const id = Symbol('123') //definition of Symbol
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n 





// Reference (Non primitive Datatypes)
// Array, Objects, Functions (These all belong to object datatype.)

const heros = ["Thor", "Hulk", "Spiderman"];

let myObj = {
    //key value pairs
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myFunction);//type: Function
console.log(typeof heros);//Array: type: object



// https://262.ecma-international.org/5.1/#sec-11.4.3


/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
