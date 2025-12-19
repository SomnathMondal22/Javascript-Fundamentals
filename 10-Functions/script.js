'use strict';

//Default parameters >>>>>>>>>>>>>>>>>

const bookings = [];

const createBooking = function (
  flightNum,
  numPasssengers = 1,
  price = 199 * numPasssengers
) {
  const booking = {
    flightNum,
    numPasssengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH124');
createBooking('LH124', 9, 899);
createBooking('LH124', 2);
createBooking('LH124', undefined, 6);
////////////////////////////////////////////////////////////////

// How passing arguments works :  value vs reference.

const flight = 'KH121';
const somnath = {
  name: 'Somnath Mondal',
  passport: 2142453434,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr.' + passenger.name;

  // if (passenger.passport === 2142453434) {
  //   alert(`Checked In`);
  // } else {
  //   alert(`Wrong passport`);
  // }
};

checkIn(flight, somnath);

console.log(flight);
console.log(somnath);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
  console.log(person.passport);
};

newPassport(somnath);
checkIn(flight, somnath);

//Javascript has only passing by value and does not have passing by reference.
////////////////////////////////////////////////////////////////

/* First-Class functions vs Higher-Order functions

## First-Class functions  :
- Javascript treats functions as first class citizens. 
- This means that functions are simply values.
- Functions are just another type of object.

We can store functions in variables and properties.
Example:
*/
const add = (a, b) => a + b;

const counter = {
  value: 25,
  inc: function () {
    this.value++;
  },
};

/* We can also pass functions as arguments to other functions : */

// const greet = () => console.log('Hey! Somnath :)');
// btnClose.addEventListener('click', greet);

//we can also return functions from another functions.

//We can call methods from functions
// counter.inc.bind(someOtherObject);
////////////////////////////////////////

/* Higher Order Functions

- A function that receives another function as an argument that returns a new function or both .

- This is only possible because of first class functions*/

//1. Function that receives another function.

const greet1 = () => console.log('Hey! Somnath :)');
// btnClose.addEventListener('click', greet);

//Here addEventListener is a higher order function and greet is a callback function .
// Callback function : A function that is passed in is called a callback function because the callback function will be called later by the higher order function.

//2. Function that returns new function.

function count() {
  // count is higher order function
  let counter = 0;
  return function () {
    counter++;
  };
}

////////////////////////////////////////////////////////
/* Functions accepting callback functions */

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher order function.
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses Callbacks all the time.
const high5 = function () {
  console.log('🎉');
};
document.body.addEventListener('click', high5);

['Aby', 'Gaby', 'Toby'].forEach(high5);

//Advantages of callback functions :

//1. It makes it easy to split up our code into resusable and interconnected parts.

//2. callback fn allows to create abstraction.

//////////////////////////////////////////////////////////////
