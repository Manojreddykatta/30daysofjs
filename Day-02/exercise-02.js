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

// Level-02
// 2.2.3
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num ='10'
let numInt = parseInt(num);
console.log(typeof(num));
console.log(typeof(numInt));
// 2.2.4
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let gravity = 9.8;
console.log(parseFloat(gravity));
console.log(Math.ceil(gravity));
// 2.2.5
// Check if 'on' is found in both python and jargon
let str1 = 'python';
let str2 = 'jargon';
let test = str1.includes('on') && str2.includes('on');
console.log(test);
// 2.2.6
// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence1 = 'I hope this course is not full of jargon';
let test1 = sentence1.includes('jargon');
console.log(test1);
// 2.2.7
// Generate a random number between 0 and 100 inclusively
let random = Math.floor(Math.random() * 100);
console.log(random);

// 2.2.8
// Generate a random number between 50 and 100 inclusively.
let min = 50 ;
let max = 100;
let random2 = Math.floor(Math.random()*(100 - 50)+50);
console.log(random2);
// 2.2.9
// Generate a random number between 0 and 255 inclusively.
let random3 = Math.floor(Math.random() * 256);
console.log(random3);
// 2.2.10
// Access the 'JavaScript' string characters using a random number.
let string = 'JavaScript'
let random4 = Math.floor(Math.random() * 10);
console.log(random4);
console.log(string.charAt(random4));
// 2.2.11
// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1\t 1\t 1\t 1\t 1\t")
console.log("2\t 1\t 2\t 4\t 8\t")
console.log("3\t 1\t 3\t 9\t 27\t")
console.log("4\t 1\t 4\t 16\t 64\t")
console.log("5\t 1\t 5\t 25\t 125\t")
// 2.2.12
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str5 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str5.substr(39,55));
// Level-03
// 2.3.1
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let quote5 = 'love is the best thing in this world. Some found their love and some are still looking for their love';
let word = "love";
function occurrenceOfWord(quote5,word){
    let x = quote5.split(" ");
    let count = 0;
    for(let i = 0 ; i < x.length ; i++ ){
        if(word==x[i])
           count++;
    }
return count;
}
console.log(occurrenceOfWord(quote5,word));
// 2.3.2
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = 'You cannot because end a sentence with  because is a conjunction';
let pattern1 = /because/g
count = phrase.match(pattern1);
console.log(count.length);

//2.3.3
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx1 = /\w+/gm;
let cleansentence =sentence3.replace(/[^\w\s]|_/g, "");
let words = cleansentence.split(/\s/);
let wordFrequencies = new Map();
words.forEach(function(word) {
    if (!wordFrequencies.has(word))
        wordFrequencies.set(word, 1);
    else
        wordFrequencies.set(word, wordFrequencies.get(word)+1);
});
let maxFrequency = Math.max(...wordFrequencies.values()); // Find max frequency of any word.
let wordsMatchingMaxFrequency = Array.from(wordFrequencies.keys()).filter((word) => {
    return wordFrequencies.get(word) === maxFrequency;
});
console.log(wordsMatchingMaxFrequency);

// 2.4.4
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let summary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regEx = /\d+/g;
let income = summary.match(regEx);
let totalSalary = (parseInt(income[0])*12)+parseInt(income[1])+(parseInt(income[2])*12);
console.log(totalSalary);
