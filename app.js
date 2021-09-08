// ES6 Features

// const arr = [1, 2, 3, 4];

//Destructuring
// const [one, two, three, four, five] = arr
// console.log(four)
// console.log(five)

// Object Destructuring
// const obj = {
//     firstName: "Aniket",
//     email: "aniketlandge@gmail.com",
//     age: 20,
//     lastname : "Landge"
// }

// let {dum, Name, age, email, lastname=""} = obj
// console.log(lastname)

// Arrow function
// let add = function(x, y){
//     return x+y;
// }
//prints whole function
// console.log(add)

// prints result
// console.log(add(10,12))

// Arrow function
// let add = (x, y) => {
//   console.log(x);
//   return x + y;
// };
// console.log(add(1, 2));


//Some more features
const counter = {
    count : 1,
    next : function() {
        return ++(this.count)
    },
    key: this.location,
    prev : () => {
        return --(this.count)
    }
}

console.log(counter)
console.log(counter.next())
console.log(counter)
console.log(counter.next())
console.log(counter)
// Output will NaN arrow function will not this keyword but just this keyword return window
console.log(counter.prev())

// console.log(counter.key)