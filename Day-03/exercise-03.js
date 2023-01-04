// //Day-03 Level-01
// //3.1.1
// // Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = prompt("Enter your Name :");
// let lastName = "Reddy";
// let age = 25;
// let city = "Hyderabad";
// let isMarried = false;
// let year = 2023 ;

// console.log(typeof firstName , typeof lastName, typeof city, typeof age, typeof isMarried, typeof year);

// // 3.1.2
// // Check if type of '10' is equal to 10
// let a = '10'
// console.log( (typeof a === 10));

// // 3.1.3
// // Check if parseInt('9.8') is equal to 10
// console.log(parseInt('9.8')==10);

// // 3.1.4
// // Boolean value is either true or false.
// // Write three JavaScript statement which provide truthy value.
// console.log(3===3);
// console.log(typeof 'manoj' === typeof "Reddy");
// console.log(firstName.length === lastName.length);

// // Write three JavaScript statement which provide falsy value.
// console.log(null);
// console.log(undefined==0);
// console.log('9.8'===9.8);

// // 3.1.5
// // Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// // 4 > 3  //true
// // 4 >= 3  //true
// // 4 < 3    //false
// // 4 <= 3   //false
// // 4 == 4   //true
// // 4 === 4  //true
// // 4 != 4   //false
// // 4 !== 4  //false
// // 4 != '4' //false
// // 4 == '4' //true
// // 4 === '4'  //false
// // Find the length of python and jargon and make a falsy comparison statement.
// console.log("confirmation");
// console.log(4 > 3)
// console.log(4 >= 3)
// console.log(4 < 3)
// console.log(4 <= 3)
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');
// let c = "python" , d = "jargon" ; let e = c + d ; console.log(c.length , d.length); console.log(!e);

// // 3.1.6
// // Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// // 4 > 3 && 10 < 12  //true
// // 4 > 3 && 10 > 12  // false
// // 4 > 3 || 10 < 12  // true
// // 4 > 3 || 10 > 12  // true
// // !(4 > 3) //false
// // !(4 < 3) //true
// // !(false) //true
// // !(4 > 3 && 10 < 12)  //false
// // !(4 > 3 && 10 > 12)  // true
// // !(4 === '4')  //true
// // There is no 'on' in both dragon and python 
// console.log('3.1.6')
// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log(4 > 3 || 10 > 12);
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))
// console.log(!(4 > 3 && 10 > 12))
// console.log(!(4 === '4'))
// let statement = "There is no 'on' in both dragon and python"
// console.log(!(statement.includes('on')));

// //3.1.7
// // Use the Date object to do the following activities

// // What is the year today?
// // What is the month today as a number?
// // What is the date today?
// // What is the day today as a number?
// // What is the hours now?
// // What is the minutes now?
// // Find out the numbers of seconds elapsed from January 1, 1970 to now.
// let current = new Date();
// console.log(current.getFullYear());
// console.log(current.getMonth());
// console.log(current.getDate());
// console.log(current.getDay());
// console.log(current.getHours());
// console.log(current.getMinutes());
// console.log(Date.now());

// // 3.2.1
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt("Enter the base: ");
// let height = prompt("Enter the heigt: ");
// let area = 0.5 * parseInt(base) * parseInt(height);
// console.log(area);

//3.2.2
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let sideA = prompt("Enter the first side: ");
// let sideB = prompt("Enter the second side: ");
// let sideC = prompt("Enter the third side: ");
// let perimeter = parseInt(sideA) + parseInt(sideB)+ parseInt(sideC);
// console.log(perimeter);

// 3.2.3
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = prompt("Enter the length: ");
// let width = prompt("Enter the Width: ");
// let rectanglePerimeter = 2 * (parseInt(length)*parseInt(width));
// console.log(rectanglePerimeter);

// 3.2.4
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = prompt("Enter the radius: ");
// let areaOfCircle = (Math.PI * parseInt(radius) * parseInt(radius));
// let circumference = (2 * Math.PI * parseInt(radius))
// console.log(areaOfCircle,circumference);

// 3.2.5 
// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x = 4 ; let y ; console.log( y = (2 * x )-2);

// // 3.2.6 
// // Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let y2 = 10 , y1 =2 , x2 = 6 , x1 = 2 , m;
// m = (y2-y1)/(x2-x1) ;
// console.log(m);

// // 3.2.7
// // Compare the slope of above two questions.
// console.log(m === y);

// 3.2.8 
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = -3
// let y = (x**2) + (6 * x) + 9
// console.log(y)

// 3.2.9
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours = prompt("Enter the hours worked per day")
// let ratePerHour = 120 ;
// let pay = parseInt(hours) * ratePerHour ;
// console.log("Weekly pay is " + pay);

// 3.2.10
// If the length of your name is greater than 7 say, your name is long else say your name is short.
// if (firstName.length > 7){
//     alert("your name is long")
// }
// else{
//     alert("your name is short.")
// }

//3.2.11
// Compare your first name length and your family name length and you should get this output.
// Your first name, Asabeneh is longer than your family name, Yetayeh
// let firstName1 = 'Manoj Reddy'
// let surName = 'Katta'
// if (firstName1.length>surName.length){
//     console.log(`your first name , ${firstName1} is longer than your family name , ${surName}`)
// }

// 3.2.12
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 45
let yourAge = 25
console.log(`I am ${myAge-yourAge} years older than you` );