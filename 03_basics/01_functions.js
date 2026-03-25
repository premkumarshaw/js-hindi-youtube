
//function definition
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName //this is function reference
//sayMyName() //function execution


/*
function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
    this function is not returning any values
}
*/


function addTwoNumbers(number1, number2){ //number 1 and number2 are parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //3 and 5 are arguments //function call

// console.log("Result: ", result); //showing the value of result



function loginUserMessage(username = "sam"){ //passing default values
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`//string interpollation
}

console.log(loginUserMessage("hitesh")) //hitesh just logged in
console.log(loginUserMessage())//sam just logged in



function calculateCartPrice(val1, val2, ...num1){ //"..." this is rest Operator and it is also called spread operator //we call it rest or spread operator according to the usecase
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


//passing objects to function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
//we can also directly pass the object
handleObject({
    username: "sam",
    price: 399
})


// passing arrays to function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //400

//we can also directly pass the array
console.log(returnSecondValue([200, 400, 500, 1000]));