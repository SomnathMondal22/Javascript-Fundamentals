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
// const high5 = function () {
//   console.log('🎉');
// };
// document.body.addEventListener('click', high5);

// ['Aby', 'Gaby', 'Toby'].forEach(high5);

//Advantages of callback functions :

//1. It makes it easy to split up our code into resusable and interconnected parts.

//2. callback fn allows to create abstraction.

//////////////////////////////////////////////////////////////

//Functions returning function :

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey!');
greeterHey('Somnath');
greeterHey('Mr Cat');
greeterHey('Somu');
//OR (another way) :-
greet('Hello')('Somnath Mondal'); //In one line

//Same program using arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Somnath Mondal');

/////////////////////////////////////////////////////
//Call and apply method :-

const akasaAirline = {
  airline: 'Akasa Airlines',
  iatacode: 'QP',
  bookings: [],
  book(flightNum, name) {
    //new syntax of writing functions inside objects
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

akasaAirline.book(239, 'Mr. S');
akasaAirline.book(233, 'Mr Cat');
console.log(akasaAirline);

const euroWings = {
  airline: 'EuroWings',
  iatacode: 'EU',
  bookings: [],
};

const book = akasaAirline.book;

// book(23, 'Somnath Mondal');  //does not work
// //In a regular function call this keyword points to undefined.

//this keyword depends on how the function is actually called.

//How do we tell javascript explicitly or manually what the this keyword look like. There are 3 function methods to do that - call, apply and bind.

// CALL METHOD :
book.call(akasaAirline, 23, 'Somnath Mondal');
console.log(akasaAirline);

book.call(euroWings, 343, 'Batman');
console.log(euroWings);

const swiss = {
  airline: 'Swiss airlines',
  iatacode: 'SA',
  bookings: [],
};

book.call(swiss, 323, 'Mary Cooper');
console.log(swiss);

// APPLY METHOD
const flightData = [345, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//apply method is not used anymore

//Aleternate method without using apply method
book.call(swiss, ...flightData);
console.log(swiss);
///////////////////////////

//BIND METHOD
//Like the call method, bind also us to manually set the this keyword for any function call. The difference is that the bind method does not immediately call the function , instead it return a new function where the this keyword is bound.

//So its set to whatever value we pass into bind.

const bookEw = book.bind(euroWings);
const bookAa = book.bind(akasaAirline);

bookEw(32, 'User 1');
bookEw(233, 'User 2');
bookEw(32, 'User 3');
bookAa(232, 'User 4');

console.log(euroWings);
console.log(akasaAirline);

const bookEw23 = book.bind(euroWings, 23);
bookEw23('User 5'); //since the number is already preset iin the above line.
bookEw23('User 6');

//With event listeners

akasaAirline.planes = 300;
akasaAirline.buyPlane = function () {
  console.log(this); // the this keyword here is the button element because in an event handler fn the this keyword always points to the element on which the handler is attached to.
  this.planes++;
  console.log(this.planes);
};
// akasaAirline.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', akasaAirline.buyPlane.bind(akasaAirline));

//partial application means we can preset parameters

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

//Order of arguments is important. the first argument is always this keyword.you can preset any value in the argument.

//using bind gives us a new function.

//rewrite this same function returning another function.

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(50));

///////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    //Register answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

////////////////////////////////////////////////////////////////

//Immediately Invoked Function Expressions ( IIFE )

/* Sometime we need a function that is only executed once and never again, basically a function which disappears once it is called. It is called IIFE. We will need this technique later in async await. */

//IIFE
(function () {
  console.log('This will never run again!');
  const isPrivate = 23; //encapsulated data
})();

// console.log(isPrivate);
//IIFE arrow function
(() => {
  console.log('This will ALSO never run again!');
})();

// Many times we actaully need to protect our variables from being accidently overwritten by other parts of the program or with external scripts or libraries.

{
  const privateData = 24;
  var privateData1 = 12;
}

// console.log(privateData);
console.log(privateData1);
/////////////////////////////////////////////////////

// CLOSURES :

// A closure gives a function access to all the varibles of its parent function even after that parent function ahs returned . The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

//OR

//A closure makes sure that a function doesn't loose connection to varibles that existed at the function's birthplace

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// Our code is running in the global execution context. And in there, we currently only have this secureBooking function. And so we can also say that the global scope now contains secureBooking. Then when secureBooking is actually executed, a new execution context is put on top of the execution stack. Now remember, each execution context has a variable environment which contains all its local variables. In this case, it only contains the passenger count set to 0. This variable environment is also the scope of this function. And so the scope chain of this execution context looks like this. So passenger count is in the local scope. But of course, this scope also gets access to all variables of the parent scopes. And in this case, just the global scope .Anyway, in the next line of the secure cooking function, a new function is returned, and it will be stored in the booker variable. So the global context now also contains the booker variable. Now, what else happens when a secure booking function returns? That's right. Its execution context often off the stack and disappears. So the secure booking function has done its job and has now finished execution Now it's very important to note that it's only the execution context itself that is gone from the stack. The variable environment containing passenger count is still stored in memory. And in particular, this variable environment has been transferred to the heap, in this case. But more on that later.
//
//So again, the execution context is gone at this point, but the variable passenger count set to zero still lives on in the engine's memory. And this is very important to keep in mind moving forward. but most of this is actually nothing new at this point, right? All we did was analyse the call stack and to sculpt chain, as we call the secure booking function. And this is going to be very important to later understand and see the closure .So as of yet, we didn't see any closure yet. But now let's go back to our code to actually use debooker function and finally see the closure in acting.

const booker = secureBooking();
booker();
booker();
booker();

// Since the booking function has been created the securebooking function it has access to the varibale environment of the Execution context of the secureBooking function, so it has access to the passengers variables.

//////////////////////////////////////////////////////////////////////

//Closures examples :

//Closures doesnt always have to be knows by calling other function. Here are a few examples :

//Example 1 :

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2); //output= 46
  };
};
g();
f();
console.dir(f);

let h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2); //output= 1554
  };
};

//Re - assigning function

h();
f();
console.dir(f);

//Remeber closures also has priority .

//Example 2 :

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000;
//Closures even has priority over the scope chain.
boardPassengers(60, 3);

///////////////////////////////////////////////////////////

//Challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/////////////////////////////////////////////////////////////////

//Arrays methods :
