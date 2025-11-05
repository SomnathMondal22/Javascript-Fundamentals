let js = 'amazing';
console.log(40 + 35);

console.log('Somnath Mondal');

let firstName = 'Somnath';
console.log(firstName);

//firstName => This is camelCase notation
// JavaScript variable names can only start with letter,$, _

let myFirstJob = 'programmer'; //proper way of naming variable

/*Data Types:
1) Primitive data type: Number, string, boolean, undefined, null, BigInt, Symbol

Undefined is a value taken by a variable that is not yet defined(empty value)

Null: Also mean empty value

Symbol: Value that is unique and cannot be changed

BigInt: Large integers that the Number type can hold

 JS has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
*/

console.log(true);
console.log(typeof true);

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!'; // Dynamic typing
console.log(typeof javascriptIsFun);

let newVariable;
console.log(newVariable);
console.log(typeof newVariable);

let nullValue = null;
console.log(nullValue);

console.log(typeof null); //Returns object(bug)

// ***** let, const and var *****

// let and const were introduced in ES6 whereas var is the old way of declaring variables.

let age = 30;
age = 31; //Reassigning , mutating

//We use const to declare variables which are not going to change in the future.
// value in a const cannot be changed.

const birthYear = 2000;
birthYear = 2001; //Not allowed as it is const

// We have to initialize the const varibale.

// const newConstValue;  //Not allowed

//var works pretty much same as let

var job = 'programmer';
job = 'teacher';

lastName = 'Mondal'; //Not recommended
console.log(lastName);

// **** Operators **********
const now = 2025;
const ageSomnath = now - 2000;
const ageSarah = now - 2019;

console.log(ageSomnath, ageSarah);

// const firstName = 'Somnath';
// const lastName = 'Mondal';

// console.log(firstName + ' ' + lastName);

let x = 10 + 5; // x=15
x += 10; // x= x+10 =>25
x *= 4; // x=100
x++; //x= x+1
x--; //x= x-1
x--; //x= x-1

console.log(x);

//Comparision operators >,<,>=,<=

console.log(ageSarah > ageSomnath); //returns boolean

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2000);

//Operation is performed according to the operator precedence.

console.log(25 - 10 - 5);

let a, b;

a = b = 20 - 10 - 5;
console.log(a, b);

const averageAge = ageSarah + ageSomnath / 3;
console.log(averageAge);
// const averageAge1 = (ageSarah + ageSomnath) / 3;
// console.log(averageAge1);

const firstName1 = 'Somnath';
const lastName1 = 'Mondal';
const job = 'programmer';
const birthYear2 = 2000;
const year = 2025;

const somnath = `I'm ${firstName1} ${lastName1}, a ${
  year - birthYear2
} years old ${job}. `; //This is a template literal ``. We use a ${} sign and inside we enter the variable or expression.

console.log(somnath);

console.log(`Just a regular string...`);

console.log(`This is a 
multi-line 
string`);

//if-else control structure.

const age3 = 15;
const isOldEnough = age3 >= 18;

if (isOldEnough) {
  console.log(`Eligible to drive :)`);
} else {
  const yearsLeft = 18 - age3;
  console.log(`Too young to drive. Another ${yearsLeft} years left.`);
}

const birthYear1 = 2000;

let century;
if (birthYear1 <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//Type conversion and type coercion

/* JavaScript is a dynamically typed language, meaning variables can hold values of any type, and their types can change during runtime. This flexibility is achieved through type conversion and type coercion. **------

1) Type conversion(explicit conversion): This occurs when you manually convert a value from one type to another using built-in methods or operators.*/

const inputYear = '2000';
console.log(Number(inputYear), inputYear);
console.log(typeof Number(inputYear));
console.log(inputYear + 18);
console.log(Number('Somnath'));

console.log(String(23), 23);

console.log(Boolean(true));

// 2) Type coercion(implicit conversion): This occurs when the javascript tries to perform on mismatched type.

console.log('I m ' + 23 + ' years old');
console.log('23' - '13' - 3);
console.log('23' * '2'); //46

// - converts strings to number whereas + converts numbers to string.

let n = '1' + 1;
n = n - 1;
console.log(n);

//5 falsy values : 0 ,null , ''. undefined, NaN
//all these values will return false when we try to convert them to boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('')); //falsy
console.log(Boolean(' ')); //truthy: not empty string
console.log(Boolean({})); // truthy
console.log(Boolean('Somnath')); //truthy

//CONVERSION TO BOOLEAN IS ALWAYS IMPLICIT ie javascript automatically converts it.

//Use of boolean

const money = 10;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is not defined');
}

//Equality operators:

//1) Strict equality operator (===): Does not perform type coercion,
const age1 = 18;
if (age1 === 18) console.log('You just became an adult'); //

//2) Loose equality operator(==): Performs type coercion.

const newAge = '18';
if (newAge == 18) console.log('You just became an adult'); //

const favourite = Number(prompt(`What's your favourite number ?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 22 is a great number');
} else if (favourite === 7) {
  console.log('Well! Thala for a reason!');
} else {
  console.log('You have a unique choice');
}

if (favourite !== 23) {
  console.log('Why not 23 !!');
}
/* 
Boolan logic: AND,OR,NOT

AND: True when all are true.
OR: true even one is true
NOT: Reverses the true/false value
*/
//Logical operator

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive..');
}

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (shouldDrive && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive..');
}

const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure.');
    console.log('Go to coding meetup');
    break;

  case 'tuesday':
    console.log('Prepare theory videos');
    break;

  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;

  case 'friday':
    console.log('Record videos');
    break;

  case 'saturday':
  case 'sunday':
    console.log('Enjoy weekend');
    break;

  default:
    console.log('Not a week day');
}

//Using logical operators

if (day === 'monday') {
  console.log('Plan course structure.');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy weekend');
} else {
  console.log('Not a week day');
}

// Statement vs expression

//A expression is a piece of code that produces a value.

3 + 4;
1974;
true && false && !false;

//A statement performs an action but does not necessarily produce a value.

if (23 > 10) {
  const str = '23 is bigger'; // statement
}

const me = 'Somnath';
console.log(`I'm ${2025 - 2000} years old. My name is ${me}. `);

/********The conditional ( ternary )operator; ********

            condition ? expressionIfTrue : expressionIfFalse;
*/

const age2 = 23;

age2 >= 23
  ? console.log(`I like to drink `)
  : console.log(`You should drink milk`);

const drink = age >= 18 ? 'drink' : 'dont drink';

console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'redbool' : 'Water'}`);
