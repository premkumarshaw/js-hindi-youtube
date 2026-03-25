// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semi colon is important to add here


//arrow function
( (name) => {
    //Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')