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


//Arrays : Arrays in JavaScript are a fundamental data structure used to store multiple values in a single variable

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1993, 2000, 2003);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); // Give number of elements in an array
console.log(friends[friends.length - 1]); // last element.

friends[2] = 'Jay';
console.log(friends);

//Only primitive values are immutable in const and array is not a primitive data type. so we can mutate it.

const firstName = 'Somnath';
const somnath = [firstName, 'Mondal', 2025 - 2000, 'professional', friends];

console.log(somnath);
console.log(somnath.length);

//Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1993, 2000, 2004];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//----------------------------------------------------

//Basic Array operations (Methods)

//Adding elements ( PUSH(end) , UNSHIFT(start))

const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Somnath'); //Push is a method(function) that adds the element in the end of an array

console.log(friends);
console.log(newLength); //returns the length of an arary

//Push returns the length of the NEW array.

friends.unshift('John');
console.log(friends);

// Unshift adds the element to the start of an array and also returns the length of the new array similar to push.

//-----------------------------------------------

//Removing elements (POP (last) , SHIFT (first))

const popped = friends.pop();
console.log(friends);
console.log(popped);

//Pop removes the last element of an array and returns the element which is removed.

const shift = friends.shift();
console.log(friends);
console.log(shift);

//Shift removed the first element in the array and returns the removed element.

console.log(friends.indexOf('Steven'));
//IndexOf returns the index of the mentioned element.

console.log(friends.indexOf('Bob'));
//Returns -1 if mentioned element is not there.

// includes method.(ES6) : uses strict equality

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes(23));

console.log(friends);

if (friends.includes('Peter')) {
  console.log('You have a friend :)');
}


//Objects : Objects in JavaScript are a fundamental data structure used to store collections of related data and functionality. They are made up of key-value pairs, where each key (also called a property name) is a string, and the value can be any data type, including other objects or functions.

const somnath = {
  firstName: 'Somnath',
  lastName: 'Mondal',
  job: 'software engineer',
  age: 25,
  friends: ['Michael', 'Steven', 'Peter'],
};

console.log(somnath);

//This way of writing {} is called Object literal syntax

console.log(somnath.firstName);
console.log(somnath['firstName']); //Both are correct.

const nameKey = 'Name';
console.log(somnath['first' + nameKey]);
console.log(somnath['last' + nameKey]);

We can put any expression in square bracket.

const interestedIn = prompt(
  'What do you want to know about Somnath? Choose between firstName, lastName, age, job and friends.'
);

if (somnath[interestedIn]) {
  console.log(somnath[interestedIn]);
} else {
  console.log('Wrong request ');
}

somnath.location = 'Dhanbad';
somnath['maritalStatus'] = 'Unmarried';

console.log(somnath);

CHALLENGE---**********

console.log(
  `${somnath.firstName} has ${
    somnath.friends.length
  } friends and his best friend is called ${
    somnath.friends[somnath.friends.length - 1]
  }.`
);



//Object keys are always strings . only exception is Symbol.

const somnath = {
  firstName: 'Somnath',
  lastName: 'Mondal',
  job: 'software engineer',
  birthYear: 2000,
  friends: ['Michael', 'Steven', 'Peter'],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2000 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(somnath.calcAge());
console.log(somnath.age);
console.log(somnath.age);
console.log(somnath.age);

console.log(somnath);
// console.log(somnath['calcAge'](2000));

//'this' keyword is basically eqaual to the object in which the method is called

//It is equal to the object calling the method.

//CHALLENGE

// console.log(
//   `${somnath.firstName} is a ${somnath.age} years old ${
//     somnath.job
//   }, and he has ${
//     somnath.hasDriversLicense === true ? 'a' : 'no'
//   } driver's license.`
// );

console.log(somnath.getSummary());

//NOTE: Arrays are also special kinds of objects. That's why we can use methods on them


//CHALLENGE

CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


 Write your code below. Good luck! 🙂 

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi
    }
    
}

 const markBmi = mark.calcBMI();
 console.log(markBmi)


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
     calcBMI : function(){
        this.bmi = this.mass/(this.height * this.height);
                return this.bmi

    }
    
}

 const johnBmi = john.calcBMI();
 console.log(johnBmi)
 
 
 if(  johnBmi >markBmi){
     console.log(`${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName} ${mark.bmi}  !`)
 }
 else{
          console.log(`${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName} ${john.bmi}  !`)

 }


//for-loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Rep number: ${rep}`);
}


const somnathArray = [
  'Somnath',
  'Mondal',
  2025 - 2000,
  'engineer',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = [];

for (let i = 0; i < somnathArray.length; i++) {
  console.log(somnathArray[i], typeof somnathArray[i]);

  // types[i] = typeof somnathArray[i];
  types.push(typeof somnathArray[i]);
}

console.log(types);

const years = [1991, 2007, 2000, 2025];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//continue vs break

console.log('---ONLY STRINGS---');
for (let i = 0; i < somnathArray.length; i++) {
  if (typeof somnathArray[i] != 'string') continue;
  console.log(somnathArray[i], typeof somnathArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < somnathArray.length; i++) {
  if (typeof somnathArray[i] === 'number') break;
  console.log(somnathArray[i], typeof somnathArray[i]);
}

//break will completely terminate the whole loop and not only the current iteration.

//continue will terminate only the current iteration and move on to the next one.


//Looping backwards.

const somnathArray = [
  'Somnath',
  'Mondal',
  2025 - 2000,
  'engineer',
  ['Michael', 'Peter', 'Steven'],
  true,
];

for (let i = somnathArray.length - 1; i >= 0; i--) {
  console.log(somnathArray[i]);
}

//Loop inside loop

for (let i = 0; i <= 3; i++) {
  console.log(`This is the OUTER LOOP ${i}😍`);
  for (let j = 0; j <= 3; j++) {
    console.log(`This is an inner loop ${j}😊`);
  }
}


//The while loop

let rep = 0;
while (rep <= 10) {
  console.log(`REP ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log(`Loop is about to end`);
  }
}
  */
