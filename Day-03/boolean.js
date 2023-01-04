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
console.log('Ampersand Operators');
console.log(9>5 && 9>2);
console.log(12<244 && 34==35 );
console.log(1>45 && 14<=14);
// || pipe or operator, example
console.log('pipe Operators');
console.log(4 > 3 || 10 > 5 );
console.log(4 > 3 || 10 < 5 );
console.log(4 < 3 || 10 < 5 );

//! Negation examples
console.log(4>3);
console.log(!(4>3));

let isPowerOn = true;
console.log(!isPowerOn);
