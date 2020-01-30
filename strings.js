let firstName = 'Erika';
let city = 'Osaka';

// For string interpolation you must use backticks `` which is called template literal
// in creating a string.
console.log(`My name is ${firstName} and I love ${city}.`);

// Joining two or mote strings together to create a string is known as String Concatenation
console.log(firstName + city);

// Use \ to make sure JS doesnt interpret a quote as the end of a string
let quote = 'Peace is it\'s own reward';
let author = 'Mahatma Gandhi'

// Use \n to add a new line
console.log(quote + '\n' +author);

let fullQuote = '\"Peace is it\'s own reward\" \n\Mahatma Gandhi'
console.log(fullQuote);
