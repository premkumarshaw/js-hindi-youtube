// Dates
/*
let myDate = new Date() //created a date object
console.log(myDate.toString());//Wed Mar 11 2026 10:31:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Wed Mar 11 2026
console.log(myDate.toISOString());//2026-03-11T10:32:31.360Z
console.log(myDate.toLocaleString());//3/11/2026, 10:32:31 AM
console.log(typeof myDate);//object
*/

/*
//ways of declaration of dates

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toDateString());//Mon Jan 23 2023 : Month starts from 0 in JavaScript

console.log(myCreatedDate1.toLocaleString());//1/23/2023, 12:00:00 AM

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());//1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14")//yyyy/mm/dd
console.log(myCreatedDate3.toLocaleString());//1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2023") //mm/dd/yyyy
console.log(myCreatedDate4.toLocaleString());//1/14/2023, 12:00:00 AM
*/

/*
let myCreatedDate5 = new Date("01-14-2023") //mm/dd/yyyy
let myTimeStamp = Date.now() //it will give current date
// console.log(myTimeStamp);
// console.log(myCreatedDate5.getTime());
console.log(Math.floor(Date.now()/1000)); //conversion from mili seconds to seconds
*/

let newDate = new Date()
console.log(newDate); //It will not give precise information
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` //string interpollation

//we can define what we want.
newDate.toLocaleString('default', {
    weekday: "long",
    
})

