//Stack and Heap memory in javascript

//Premitive datatypes use Stack
//Non Premitive datatypes use Heap

let myYouTubeName = "hiteshdotcom"

let anotherName = myYouTubeName
anotherName = "chaiAurCode"

console.log(myYouTubeName);//hiteshdotcom
console.log(anotherName); //chaiAurCode


//Non Premitive uses heap.
let userOne = {
    email: "uesr@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
//both are referencing the same location in the heap, if we change through one then it will affect the another one.

userTwo.email = "hitesh@google.com"

console.log(userOne.email) //hitesh@google.com
console.log(userTwo.email) //hitesh@google.com