//Day-03 Level-01
//3.1.1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Manoj";
let lastName = "Reddy";
let age = 25;
let city = "Hyderabad";
let isMarried = false;
let year = 2023 ;

console.log(typeof firstName , typeof lastName, typeof city, typeof age, typeof isMarried, typeof year);

// 3.1.2
// Check if type of '10' is equal to 10
let a = '10'
console.log( (typeof a === 10));

// 3.1.3
// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')==10);

// 3.1.4
// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(3===3);
console.log(typeof 'manoj' === typeof "Reddy");
console.log(firstName.length === lastName.length);

// Write three JavaScript statement which provide falsy value.
console.log(null);
console.log(undefined==0);
console.log('9.8'===9.8);

// 3.1.5
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3  //true
// 4 >= 3  //true
// 4 < 3    //false
// 4 <= 3   //false
// 4 == 4   //true
// 4 === 4  //true
// 4 != 4   //false
// 4 !== 4  //false
// 4 != '4' //false
// 4 == '4' //true
// 4 === '4'  //false
// Find the length of python and jargon and make a falsy comparison statement.
console.log("confirmation");
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let c = "python" , d = "jargon" ; let e = c + d ; console.log(c.length , d.length); console.log(!e);

// 3.1.6
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12  //true
// 4 > 3 && 10 > 12  // false
// 4 > 3 || 10 < 12  // true
// 4 > 3 || 10 > 12  // true
// !(4 > 3) //false
// !(4 < 3) //true
// !(false) //true
// !(4 > 3 && 10 < 12)  //false
// !(4 > 3 && 10 > 12)  // true
// !(4 === '4')  //true
// There is no 'on' in both dragon and python 
console.log('3.1.6')
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
let statement = "There is no 'on' in both dragon and python"
console.log(!(statement.includes('on')));

//3.1.7
// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let current = new Date();
console.log(current.getFullYear());
console.log(current.getMonth());
console.log(current.getDate());
console.log(current.getDay());
console.log(current.getHours());
console.log(current.getMinutes());
console.log(Date.now());

// 3.2.1
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter the base: ");
let height = prompt("Enter the heigt: ");
let area = 0.5 * parseInt(base) * parseInt(height);
console.log(area);