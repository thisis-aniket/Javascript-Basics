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
// const counter = {
//     count : 1,
//     next : function() {
//         return ++(this.count)
//     },
//     key: this.location,
//     prev : () => {
//         return --(this.count)
//     }
// }

// console.log(counter)
// console.log(counter.next())
// console.log(counter)
// console.log(counter.next())
// console.log(counter)
// Output will NaN arrow function will not this keyword but just this keyword return window
// console.log(counter.prev())

// console.log(counter.key)

// Map and Filter ES6
// Map function is same as the forEach but forEach don't return anything
let marks = [1, 2, 3, 4, 5, 6];
// const newArr = marks.map((e, index) => {
//   return index;
// });
// console.log(newArr);

// console.log(
//   ranks.map((e, index) => {
//     return e * 100;
//   })
// );

// console.log(
//   ranks.forEach((e, index) => {
//     return e * 100;
//   })
// );

// let newarr = ranks.map((e, index) => {
//     if(e%2===0)
//         return e

// })
// console.log(newarr);

// Filter
// let newfilterarr = marks.filter((e, index) => {
//     console.log(e, index)
//     if(e%2===0)
//         return e
// })
// console.log(newfilterarr)

//Promises in JS
let concert = false;
let attendConcert = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (concert) {
      resolve("Bob attented concert...");
    } else {
      reject("Bob Failed to attend concert...");
    }
  }, 2000);
});

// console.log(attendConcert)
attendConcert
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// attendConcert.catch((err) => console.log(err));
