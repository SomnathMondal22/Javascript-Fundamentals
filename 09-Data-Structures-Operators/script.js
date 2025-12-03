'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

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
