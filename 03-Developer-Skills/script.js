// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude1 = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

calcTempAmplitude1([3, 4, 6]);

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([12, 34, 64, 5, 33, 123, 43]);
const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 6]);
console.log(amplitude);

// PROBLEM 2:
//Function should now receive 2 arrays of temps.

//1)Understanding the problem
//- With 2 arrays , should we implement functionality twice ? NO, just merge two arrays.

//2) Breaking up in sub-problems
//-How to merge two arrays. > Use concat method

const measurekelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius'),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) identify the bug.

console.log(measurekelvin());

//--------------------------------
/* Coding Challenge #1


Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]



1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? Answer: index + 1

2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with ºC
- Strings needs to contain day (index + 1)
- Add ... between elements and start and end of string
- Log string to console
*/

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const temp = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]}ºC in ${i + 1} days 3`;
  }
  return str;
};

const temperature = temp(data1);
console.log(temperature);

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that  daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const totalHrs = function (data) {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i];
  }
  return sum;
};

const totalHoursWorked = totalHrs(data);
console.log(`Total hours worked = ${totalHoursWorked} hours.`);

const averageHours = totalHoursWorked / data.length;
console.log(`Average hours worked = ${averageHours.toFixed(2)} hours.`);

const bestDay = function (data) {
  let best = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > best) best = data[i];
  }
  return best;
};

console.log(`Best day worked = ${bestDay(data)}`);

const daysWorked = function (data) {
  let workingDays = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== 0) {
      workingDays += 1;
    } else {
      continue;
    }
  }
  return workingDays;
};

const totalWorkingDays = daysWorked(data);
console.log(`Total days worked = ${totalWorkingDays}`);

if (totalHoursWorked >= 35) {
  console.log(`The week was full time.`);
} else {
  console.log(`The Week was part-time.`);
}
