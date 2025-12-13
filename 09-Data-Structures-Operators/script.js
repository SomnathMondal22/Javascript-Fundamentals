'use strict';

const hours = {
  mon: {
    open: 12,
    close: 22,
  },
  tue: {
    open: 11,
    close: 23,
  },
  wed: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri'];
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  hours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  orderDelivery: function ({ time, address, mainIndex = 1, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

//Property names
const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(hours)) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property values :

const values = Object.values(hours);
console.log(values);

for (const value of values) {
  console.log(value);
}

//Entire object

const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

///////////////Looping over objects ///////////////// :

//With optional chaining

for (const day of Object.keys(open))
  console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.thu?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for of loop practice ..
// for (const [i, el] of days.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays

const users = [{ name: 'Somnath', email: 'S@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderDelivery({
  time: '22:30',
  address: 'Dhanbad',
  mainIndex: 2,
  starterIndex: 2,
});
//Destructure Objects::::::::::::::::

// Destructuring is a way to break complex data structure into smaller data structure.

const { name, openingHours, categories } = restaurant; //created 3 new variables
console.log(name, openingHours, categories);

//For dealing with third party data, we can change the name of the variables.

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

//If values are not available, when data is not hard coded( default values)

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables:

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects :

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
//////////////////////////////////////////////////////////////////

//Destructuring arrays::::::::::::::::::::::::::::

// Destructuring is a way to break complex data structure into smaller data structure.

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

//If we want to take the first and the third : leave a blank space

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables::::::::::::::::

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//using destructuring::::::::::::::::

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive two return values from a function
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [6, 7]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values:

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

////////////////////////////////////////////

//Spread operator : Expanding an array into all its elements.

const arr1 = [7, 8, 9];

const badNewArray = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr1]; //using spread operator
console.log(newArray);

console.log(...newArray);
// Whenever we want to log the elements of an array individually, we use spread operator ...

const newMenu = [...restaurant.mainMenu, 'Paneer chilli'];
console.log(newMenu); //Not modifying the original array.
console.log(restaurant.mainMenu);

//To copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//To join two arrays

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

//spread operators works on all iterables .
//ex. of iterables are arrays, strings , sets , maps but not objects.

const str = 'Somnath';
const letters = [...str, '', 's.'];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

// console.log(ingredients);

// restaurant.orderPasta = [...ingredients]; //adding a property in restraunt object.
// console.log(restaurant);

//Since ES2018, the spread operator also works on objects.

const newRestaurant = { foundingYear: 2000, ...restaurant, founder: 'Somu' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
(restaurantCopy.name = 'Restaurante Hotel'), console.log(restaurantCopy.name);
console.log(restaurant.name); // we did make a copy of the original object

///////////////////////////////////////////////////////////

//Rest pattern and rest parameters : Exaclty the opposite of spread opearator : to collect multiple elements and condense them into an array.

//1) Destructuring

const arr2 = [1, 2, ...[3, 4]]; //Spread because of on right hand side of assignment operator.
console.log(arr2);

const [first, second, ...others] = [1, 2, 3, 4, 5]; //Rest because of on left hand side of the operator.
console.log(first, second, others);

const [pizza, , resotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, resotto, otherFood);

//Objects :

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2) Functions :

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const newArr = [23, 4, 5];
add(...newArr);
console.log(...newArr); // spreading the variables .

/////////////////////////////////////////////////

//Short-circuiting in OR operator.
console.log('------OR OPERATOR------');
console.log(3 || 'Somnath');
//The result of the OR operator doesnt always have to be boolean. They can use and return any data type, short-circuiting.
// short-circuiting in case of OR operator means that if the first value is a truthy value, it will immediately return the first value and it will not look into the other values.

console.log(false || null || 'a' || []);
console.log(null || undefined);

const guests = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests);

//Short-circuiting in OR operator.
console.log();

console.log('------AND OPERATOR------');

console.log(0 && 'Somnath'); //AND operator short-circuits when the first value is falsy and immediately returns that falsy value without moving on to the next value.

console.log(7 && 'Somu');
console.log('hello' && 23 && null & 'Somu');

//Practical example :
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
///////////////////////////////////////////

//Nullish coalescing operator ( ?? ) : Intrododuced in ES2020

restaurant.numGuest = 0;

const guests1 = restaurant.numGuest || 10;
console.log(guests1);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
//Nullish coalescing operator works on the idea of nullish values( null , undefined) instead of falsy values( 0 , '')

///////////////////////////////////////

//Logical assignment operators :

const rest1 = {
  name: 'Unicorn',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Taj',
  owner: 'Tata',
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

///////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app !

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2');
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2. //use rest syntax for remaining .
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = ['Thiago', 'Cutinho', 'Perisic', ...players1];
console.log(players1Final);

//5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6.

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

//7.

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 1 is more likely to win`);

//////////////////////////////////////////////

// The for-of loop : Looping over arrays-

const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuu) console.log(item);

for (const [i, el] of menuu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menuu.entries()]);
//////////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, odds] of Object.entries(game.odds)) {
  const gameStr = team === 'x' ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${gameStr} : ${odds}`);
}
////////////////////////////////////////////////////////////////

/* SETS ( Data structure introduced in ES6) : 

 A set is a collection of unique values.
 */

const orderSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
]);

console.log(orderSet);
console.log(new Set('Somnathmondal'));

console.log(orderSet.size);
console.log(orderSet.has('Bread'));
console.log(orderSet.has('Pizza'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

console.log(orderSet[2]); //undefined because in sets there is no indexing.

for (const order of orderSet) console.log(order);
//looping is possible just like any other iterable.

// Example :

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//////////////////////////////////////////

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion); //unique

const unique = new Set([...mexicanFoods, ...italianFoods]);
console.log(unique);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian:', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican:', uniqueMexicanFoods);

const uniqueItaliaAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItaliaAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

/////////////////////////////////////////////////////////

/* MAPS ( Data structure introduced in ES2016) :

In JavaScript, Map is a built-in data structure that stores key–value pairs, similar to objects — but more powerful and flexible.

A Map is a collection where:

Keys can be any data type (object, array, number, boolean, function, etc.)

The order of items is preserved (insertion order)

It has built-in methods that make working with key-value pairs easier than normal objects
*/

const rest = new Map();
rest.set('name', 'Taj Hotel');
rest.set(1, 'Delhi, India');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest);

console.log(rest.get(true));
console.log(rest.get('name'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

let ar = [1, 2];
rest.set(ar, 'Test');
console.log(rest);
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.size);
console.log(rest.get(ar));

const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Javascript'],
  [3, 'React'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

//Convert Object to Map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`The answer of ${key}: ${value}`);
}

const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
// console.log(...question);
console.log([...question.keys()]);
console.log([...question.values()]);

////////////////////////////////////////////////////////////////

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
const removeData = gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(
  `"An event happened, on average, every ${90 / gameEvents.size} minutes"`
);

//4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} HALF ${min}: ${event}`);
}

///////////////////////////////////////////////////////////

// Working with Strings.

const airline = 'TAP Akasa Airlines';
const plane = 'A232';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('A232'[0]);

console.log(airline.length);
console.log('A232'.length);

//Let's talk about methods.

console.log(airline.indexOf('s'));
console.log(airline.lastIndexOf('s'));
console.log(airline.indexOf('Airlines'));

console.log(airline.slice(4)); // from 4 extraction will start.

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(-2, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat :(`);
  } else {
    console.log(`You got lucky :) `);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Somnath'));
console.log(typeof new String('Somnath'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name

const passenger = 'SOmnAth';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Using function

const correctName = function (name) {
  const lowercaseName = name.toLowerCase();
  const correctName = lowercaseName[0].toUpperCase() + lowercaseName.slice(1);
  console.log(correctName);
};

correctName('sOMu');
correctName('arjUN');

//Comparing emails :

const email = 'hello@gmail.com';
const loginEmail = '   Hello@gmail.Com \n';

const lowerEmail = loginEmail.toLowerCase();

// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//Replacing

const priceIND = '₹10.000';
const priceRUS = priceIND.replace('₹', '₽').replace('.', ',');
console.log(priceRUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

console.log(announcement.replaceAll('door', 'gate'));

//Booleans

const planes = 'Airbus A235neo';
console.log(planes.includes('A23'));

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log(`Part of the new Airbus family`);
}

//practice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`);
  } else {
    console.log(`Welcome onboard`);
  }
};

checkBaggage('I have a laptop, some food an a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//Split and join.

console.log('every+nice+string'.split('+'));
console.log('Somnath Mondal'.split(' '));

const [firstName, lastName] = 'Somnath Mondal'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join('-');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' '); // This will return an array in which we can loop
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  // console.log(namesUpper);
  console.log(namesUpper.join(' '));
};

capitalizeName(`somnath and batman`);
capitalizeName(`somu and oggy`);

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskedCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskedCreditCard(432423423));
console.log(maskedCreditCard(4324234287932743));

//repeat

const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

//////////////////////////////////////////////////////////Coding Challenge #4

/*Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n'); //returns an array

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

//String Methods Practice:

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // console.log(type, from, to, time);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)}(${time.replace(
    ':',
    'h'
  )})`.padStart(43);
  console.log(output);
}
