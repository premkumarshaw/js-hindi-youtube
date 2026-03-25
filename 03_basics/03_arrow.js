const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//to refer the current context, we have to use this keyword

        console.log(this); //It will print the current context(variables)
        //output
        /*
        {
        username: 'hitesh',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]
        }*/
    }

}

// user.welcomeMessage() //hitesh, Welcome to website

// user.username = "sam" //here we have changed the context(current variables)
// user.welcomeMessage()//sam, Welcome to website


// console.log(this); //it will refer an empty environment, {}





// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //we can not use "this" keyword in function 
// }

// chai()



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }



const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai() //function call


// --------Function declaration using Arrow Functions

// const addTwo = (num1, num2) => {
//     return num1 + num2       //it is called a s explicit return
// }


//it is called as Implicit return //another way to define arrow functions
// const addTwo = (num1, num2) =>  num1 + num2


//it is also an another way to define arrow function
// const addTwo = (num1, num2) => ( num1 + num2 )




//if we want to return an object
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))
