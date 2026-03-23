// Most Important lecture 
// singleton : it is made by the use of constructor

// Object.create : this is basically constructor method

// object literals

const mySym = Symbol("key1") //declaration of symbol

//this is an object
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //accessing a symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//there are two ways to access the objects
// console.log(JsUser.email) //first way
// console.log(JsUser["email"]) // second way

// console.log(JsUser["full name"])
console.log(JsUser.mySym) //it is string,its not used as symbol
console.log(JsUser[mySym]) //now it is used as symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //after using this the value will not be changed
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){ //declaration of function
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //accessing the properties of objects by using "this"
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());