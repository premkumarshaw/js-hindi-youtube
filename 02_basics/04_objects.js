// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //combining but there is a problem, it will be shown as object inside an object

// const obj3 = Object.assign({}, obj1, obj2, obj4) //combining two objects //obj1, obj2 and obj3 are sources and {} is target.

const obj3 = {...obj1, ...obj2} //combining two objects using spread operator
// console.log(obj3);


//objects under arrays
const users = [
    {//object 1
        id: 1,
        email: "h@gmail.com"
    },
    {//object 2
        id: 1,
        email: "h@gmail.com"
    },
    {//object 3
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //accessing the first value, which is an object

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //all keys of object, tinderUser

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //do you have this property isLoggedIn : True



//Destructuring of Objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //intructor is an alias
//extracting values from course objects

// console.log(courseInstructor);
console.log(instructor); //printing by alias


//Talking about APIs (Application Programming Interface)

// values we got from backend in json structure

// this is json-----------
//josn is a javaScipt object notation
//in json structure both keys and values are in string format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//Sometimes we get APIs in arrays format
[
    {},
    {},
    {}
]

