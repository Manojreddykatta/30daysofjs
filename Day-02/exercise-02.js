// 2.1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";
// 2.2
// Print the string on the browser console using console.log()
console.log(challenge);
// 2.3
//Print the length of the string on the browser console using console.log()
console.log(challenge.length);
// 2.4
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
// 2.5
//Change all the string characters to lowercase using toLowerCase() method
console.log(challenge.toLowerCase());
// 2.6
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,2));
// 2.7
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3,8));
// 2.8
// Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));
// 2.9
//Split the string into an array using split() method
console.log(challenge.split(","));
// 2.10
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));
// 2.11
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let organizations = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
console.log(organizations.split(","));
// 2.12
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript","Python"));
// 2.13
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
// 2.14
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"));
// 2.15
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));
// 2.16
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));
// 2.17
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));
// 2.18
console.log(sentence.lastIndexOf("because"));
// 2.19
console.log(sentence.search("because"));
// 2.20
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());
// 2.21
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));
// 2.22
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("pt"));
// 2.23
// Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/
console.log(challenge.match(pattern));
// 2.24
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let half = '30 days of  '
console.log(half.concat("JavaScript"));
// 2.25
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));


// Level-02
// 2.2.1
// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote = '\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
console.log(quote);

// Level-02
// 2.2.2
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let quote1 = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead\'"
console.log(quote1);