// array

//Declaration of arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add element at the starting
// myArr.shift() //removes the first element

// console.log(myArr.includes(9));//false //type: boolean
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr); //array converted in strings


// slice, splice

console.log("A ", myArr); //named as A

const myn1 = myArr.slice(1, 3)//returns a section of array //3rd will not be included

console.log(myn1); //[ 1, 2 ]
console.log("B ", myArr); //named as B


const myn2 = myArr.splice(1, 3)//
console.log("C ", myArr);//[ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]