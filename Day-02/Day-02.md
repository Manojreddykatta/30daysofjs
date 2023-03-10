# Data Types in JavaScript
 In JavaScript there are two types of datatypes they are
 - Premitive datatypes
 - Non-Premitive datatypes (Object References)

## Premitive Data types in JS
1. Numbers - Integers . floats
2. Strings - Any data under single quote, double quote or backtick quote
3. Booleans - true or false
4. Null - empty value or no-value
5. Undefined - a declared variable without value
6. Symbol - A unique value that can be generated by a symbol constructor

## Non-Premitive Data types in JS
1. Arrays
2. Objects

Now, let us see what exactly primitive and non-primitive data types mean. Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.

Example:
``` 
let word = "String" 
```
If we try to modify the string stored in variable word, JavaScript should raise an error. Any data type under a single quote, double quote, or backtick quote is a string data type.

```
word[0] = 'Y'
```
This expression does not change the string stored in the variable word. So, we can say that strings are not modifiable or in other words immutable. Primitive data types are compared by its values. Let us compare different data values. See the example below:

```
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

```

## Non-Premitive data types
Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. Let us see by creating an array. An array is a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.

``` 
let nums = [3,5,6]
nums[1]=13

console.log(nums)
```
As you can see, an array, which is a non-primitive data type is mutable. Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

```
let nums=[1,2,3]
let numbers=[1,2,3]
console.log(numbers == nums) // false

let userOne ={
    name:'Manoj',
    role:'Devops Engineer'
    country='India'
}
let userTwo ={
    name:'Manoj',
    role:'Devops Engineer'
    country='India'
}

console.log(userOne == userTwo) // false
```
Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

```
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
```
## Numbers
Numbers are integers and decimal values which can do all the arithmetic operations. Let's see some examples of Numbers.
## Declaring Number Data Types
```
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```
## Math Object :

In Javascript Math Object provides a lot of methods to work with numbers

```
const PI = Math.PI;
console.log(PI);
```
