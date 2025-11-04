'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio';


// A function is a reusable piece of code that performs some task.

function logger() {
  console.log('I am a function');
}

logger(); //calling,invoking,running the function.
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice); //Return juice is returned and stored in appleJuice .
console.log(fruitProcessor(4, 6));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function declaration: They can be called before defining it.(due to hoisting)

function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(2000);
console.log(age1);

// Function expression.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2000);
console.log(age2);


//Arrow function(Added in ES6)

const calcAge3 = (birthYear) => 2040 - birthYear;

console.log(calcAge3(2000));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2000, 'Somnath'));
console.log(yearsUntilRetirement(1994, 'Bob'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges produce ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 10));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(2000, 'Somu'));
console.log(yearsUntilRetirement(1950, 'Bob'));
*/

//Arrays : Arrays in JavaScript are a fundamental data structure used to store multiple values in a single variable

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1993, 2000, 2003);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); // Give number of elements in an array
console.log(friends[friends.length - 1]); // last element.
