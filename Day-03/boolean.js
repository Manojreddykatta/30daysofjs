let isLightOn = true
let isRaining = false
let isHungry = false
let isNoiseComing = true
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

console.log(isNoiseComing)

// truthy values and Falsy Values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true

let mypc
console.log(mypc); //undefined

let empty = null;
console.log(empty); //null

// Operators
let firstName = 'manoj'
let country = 'India'
// arithmetic operations
let firstNum = 9;
let secondNum = 3 ;
let addition = firstNum + secondNum;
let substraction = firstNum - secondNum;
let multiplication = firstNum * secondNum;
let division = firstNum/secondNum;
let powerof = firstNum**secondNum;
let remainder = firstNum%secondNum;
console.log(addition,substraction,multiplication,division,powerof,remainder);

// area of circle
let radius = 20 // in m
let areaOfCircle = Math.PI * radius * radius;
console.log (areaOfCircle);

const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// comparison operators
console.log(3>2);
console.log(3>=2);
console.log(3<2);
console.log(3<=2);
console.log(3==2);
console.log(3!=2);
console.log(3=='3');
console.log(3 === '3');
console.log(3 !== '3');
console.log(0 == false);
console.log(0 == " ");
console.log(0 === " ");
console.log(1==true);
console.log(1===true);
console.log(undefined==null);
console.log(undefined===null);
console.log(NaN==NaN);
console.log(NaN===NaN);
console.log(typeof NaN)


console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

//always use === unless you have a good reason to use ==

// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check1 = 4 > 3 && 10 < 5         // true && false -> false
const check2 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check3 = 4 > 3 || 10 > 5         // true  || true -> true
const check4 = 4 > 3 || 10 < 5         // true  || false -> true
const check5 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check6 = 4 > 3                     // true
let check7 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff = !isLightOn           // false
let isMarried2 = !false                // true