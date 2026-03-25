//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two() //function calling 

}

// one() //function call


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); //it will be executed
    }

    // console.log(website); //error
}

// console.log(username); //error



// ++++++++++++++++++ interesting ++++++++++++++++++

//function call before function definition
console.log(addone(5)) //it will be executed normally

function addone(num){
    return num + 1
}



// addTwo(5) //But this will give an error, beacuse function definition is changed here.

//in javaScript variables are very strong, it can hold anything. 
const addTwo = function(num){//we have declared a function and at the same time we are holding the function in the variable, this is called HOISTING.
    return num + 2
}