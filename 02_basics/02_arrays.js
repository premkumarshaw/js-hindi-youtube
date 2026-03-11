const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);//flash//1st index of 3rd element(dc_heroes)


// const allHeros = marvel_heros.concat(dc_heros)//combines two or more arrays
// console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const all_new_heros = [...marvel_heros, ...dc_heros]//it is called spread operator

// console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)//returns a new array with all subarray elements concatinated into it, upto specified depth. [depth here is infinity]

// console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] //all values are spread out.



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//value will be converted in array //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"}))//gives an empty array // interesting //we have to define that we want array from key or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ] //it will make an array of given set of elements.