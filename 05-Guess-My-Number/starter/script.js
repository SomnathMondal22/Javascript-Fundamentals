'use strict';

/*The DOM ( Document Object Model ) is a complete representation of the HTML document.

 DOM/DOM methods is not a part of Javascript but rather that of Web API's. Web API's are like libraries that browsers implement and that we can implement in our Javascript code. API = Application Programming Interface. Like DOM API there are also different kinds of API's eg. timers, Fetch API.

document.querySelector('.message').textContent;
document.querySelector('.message').textContent = 'Correct number🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;


console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

//******/ ADD EVENT LISTENER  ********

//In addEventListener we first have to pass the type of the event, eg. mouse events('click','mouseover') , keyboard events( 'keyup' , 'keypress')etc. So here , click is the first argument that is passed here.

// Now we need to tell the event listener what to do. So we  specify the reaction to the click event.We do that by defining a function and that fn. will contain exactly the code that should be executed whenver the click event happens on the check button.

//addEventListener method is a special kind of function because in the 2nd argument it expects a event handler function value as an argument.

//Remember that a function is just a value. So we can pass it as a value as an argument to another function just like any other value like a string or number.

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔No number!';
//   }
// });

//This function is the event handler. It will only be called automatically as soon as the event happens ie. we click it. So we dont have to call it.
// -----------------------------------------------

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //WRONG INPUT
  if (guess > 20 || !guess) {
    displayMessage('❗Invalid guess');

    //WHEN PLAYER WINS..
  } else if (guess === secretNumber) {
    displayMessage('You guessed it correctly..🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //WHEN GUESS IS WRONG..
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High..' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again button functionality ( resets to original)

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
