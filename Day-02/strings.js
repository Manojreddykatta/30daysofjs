//strings in the javaScript are declared with double quotes and single quotes

let firstName = "manoj";
let lastName = 'reddy';
let age = 25
let country = "India"




console.log("the username is "+ firstName + " and the age of the user is " + age );

console.log('I hope everyone is enjoying \nthe 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5\t7')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
console.log("\"This is how js escape char double quote work\"")

//Template literal

let a = 18;
let b = 6 ;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
console.log(`${a} is greater than ${b}: ${a > b}`);

console.log(`My firstname is ${firstName} and lastname is ${lastName}, and I am ${age} years old. I am a resident of ${country}`);

console.log(firstName.length);
console.log(lastName.length);
console.log(country.length);

// let firstLetter = firstName[4];
// console.log(firstLetter);

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t


// toUppercase() Method

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

// substr()

let sample="decemberSprint";
console.log(sample.substr(8,6));

console.log(sample.substring(8,14));

// substring() method
let continet ="southAfrica";
console.log(continet.substring(5,11));
console.log(continet.substring(0,5));

// split()

let quote="code never lies 3000";
console.log(quote.split());
console.log(quote.split(' ')); //split space as base

let quote2="javascript$python$java$react$node";
console.log(quote2.split('$')); //splits $ as a base


