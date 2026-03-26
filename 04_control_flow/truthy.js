const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//-----Checking Array via condition
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//checking objects via condition
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10   //5 will be assigned
// val1 = null ?? 10    //10 will be assigned
// val1 = undefined ?? 15   //15 will be assigned
val1 = null ?? 10 ?? 20   //10 will be assigned

console.log(val1);


// Nullish Coalescing Operator and Ternary Operator both are different


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")