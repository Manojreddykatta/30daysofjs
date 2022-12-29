// string.length
let string = "javaScript";
console.log(string.length);

// string.toUpperCase

console.log(string.toUpperCase());

// string.toLowerCase
console.log(string.toLowerCase());

// substring()
console.log(string.substring(4,10));
 
// split()
 let slowgun = "   2nd  day of javaScript   ";
 console.log(slowgun.split(''));
 console.log(slowgun.split(' '));
 console.log(slowgun.split(', '));
 let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
 console.log(countries.split(','));

//trim
console.log(slowgun.trim());

//includesO
console.log(slowgun.includes('of'));

//replace()
console.log(slowgun.replace('javaScript','python'));
// charAt()
 console.log(slowgun.charAt(5));

let logic = slowgun.length - 3;
console.log(logic);
console.log(slowgun.charCodeAt(logic));

// indexOf
console.log(slowgun.indexOf('S'));
console.log(slowgun.indexOf('c'));

// lastIndexOf
let stri = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(stri.lastIndexOf('love'))       // 67
console.log(stri.lastIndexOf('you'))        // 63
console.log(stri.lastIndexOf('JavaScript')) // 38

//concat()
let designation = "develper";
console.log(designation.concat("javascript"));

// startswith()
console.log(stri.startsWith("I"));

// endsWith()
console.log(stri.endsWith("love."));

// search()
console.log(stri.search("not"));

// repeat()
console.log(stri.repeat(10));

// match()
