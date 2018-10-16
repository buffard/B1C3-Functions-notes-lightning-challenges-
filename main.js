// TABLE OF CONTENTS
// NOTES: 4- 42, LIGHTNING CHALLENGE: 44, NOTES: 62- 70, LIGHTNING CHALLENGE: 72-103, NOTES:105-120 LIGHTNING CHALLENGE: 122- END

// define f to hold a function value
const f = function (a) {
  console.log(a + 2);
}

// declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// a less verbose function value
let h = a => a % 3;

console.log (h(30))

//the two functions below do the same thing
 function sayMyName(name) {
   return `My name is ${name}`;
 }

 const sayMyNameFatArrow = (name) => `My name is ${name}`;

//  points to the first function
 console.log(sayMyName("samuel"))
//  points to our fat arrow array
 console.log(sayMyNameFatArrow('samuel'))

//  more than one line so you need to put in curly brackets and give a return
 const sayMyNameFatArrow2 = () => {
   let string = `My name is `;
   return string + `Jenna`;
 }

 console.log (sayMyNameFatArrow2())

// if you only had one argument you wouldn't need the back ticks but good practice and you need if you want to pass multiple arguements
 const sayMyNameUpperCase = (name, lastname, middle) => `${name} ${lastname} ${middle}`.toUpperCase();

 console.log(sayMyNameUpperCase("kekoa", "solis", "sam"))
// // ==========================================
// //  *LIGHTNING EXERCISE*
// // 1.Write a function that takes a string of a dog breed as an argument (like ‘border collie’)
// // 2.Have the function return “my favorite dog breed is” plus the passed in string. If no argument is passed to the function, return “I like cats”.
// // 3.Execute the function in a way that captures the returned value in a variable.
// // 4.Console.log the string “When it comes to pets,” plus the returned value of the function.

const dog = (breed) => { 
if (breed === undefined) {
  return "I like cats"
} else {  
 return `My favorite dog breed is ${breed}`}
}
// if you leave the arguement inside dog blank it will return i like cats
console.log("When it comes to pets,", dog("oshie"))
// below is an alternate way to write the code above 
// console.log(`When it comes to pets, ${dog("beagle")}`)
// // ====================================================

const getMyFullName = (first, last) => `${first} ${last}`

console.log(getMyFullName("Samuel", "Webber"))

// const sayMyFullName = () => getMyFullName ("Jase", "Hackman") 
// console.log(sayMyFullName())

const sayMyFullName = (first, last, action) => action (first, last)
console.log(sayMyFullName("Jenna", "Solis", getMyFullName))
// ========================================
// *LIGHTNING EXERCISE*
// 1.Create a function that creates an object with three properties: name, age, profession. Have the function take an array as an argument. In the body of the function, loop over the array to set the values of the object’s properties. log the result to the console as a table.
// 2.Create a second function that takes three arguments: name, age, profession. Have the function place the three arguments into an array and pass that array to the first function by calling it.

const personalObjectMaker = (array) => {
  let personalObj = {}
  const properties = ["name", "age", "profession"]
  properties.forEach((property, index) => {
    personalObj[property] = array[index]
  })
  return console.table(personalObj)
}

const personalInfo = (name, age, profession) => {
  const personalArray = [name, age, profession]
  personalObjectMaker(personalArray)
}

personalInfo("kekoa", 3, "kid")

// below is my attempt
// let myarray = []

// const person = (name, age, profession) => {
//   for (let i = 0; i < myarray.length; i++) {
//     myarray[i].name = name

//   }
// }
// console.log(person("Sam", "old", "student"))

// ===================================

const add = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}

const performAction = (a, b, action) => {
  return action(a, b)
}

const test = performAction(5, 8, add)
const test2 = performAction(5, 8, subtract)
console.log(test)
console.log(test2)
// ==============================
// *LIGHTNING CHALLENGE*
// 1. Create a function that logs the result of adding two numbers
// 2. Create a second function called calculate that takes three arguments: two numbers and a function
// 3. Execute the second function and make it output 5


const add = (a, b) => {
  console.log(a + b)
  return a + b
}

const calculate = (num1, num2, action) => {
 return add(num1, num2)
}
const test = calculate(2, 3, add)
console.log(test)