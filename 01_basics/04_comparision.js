// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// these are confusing conversions, avoid these.
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// ===      --> Strict check

console.log("2" == 2); //true: beacuse conversion
console.log("2" === 2); //false: because datatype will also get checked here.

/*In java Script, comparision and equality check both are two different things, they work differently.*/