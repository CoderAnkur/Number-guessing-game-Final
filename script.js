'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent='Correct Number✌'


// document.querySelector('.number').textContent=12;
// document.querySelector('.score').textContent=18;

// document.querySelector('.guess').value=34;

// console.log(document.querySelector('.guess').value)

let secretNumber = Math.ceil(Math.random() * 20);


let score = 20;
let highscore = 0;

let displayMessage=function(message){
  document.querySelector('.message').textContent =message
}


document.querySelector('.check').addEventListener('click', function () {
  // console.log('AJ Styles')
  const guess = Number(document.querySelector('.guess').value)


  // when there is no input 
  if (!guess) {
    displayMessage('⛔No Number!')

    // when player wins 
  } else if (guess === secretNumber) {
    displayMessage('Correct Number✌')

    document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #8360c3, #2ebf91)';

    document.querySelector('.number').style.width = '25rem'
    document.querySelector('.number').textContent = secretNumber


    // document.querySelector('.highscore').textContent=score

    // let highscore=document.querySelector('.highscore').value;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }



    // When the guess is wrong  
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     displayMessage('You Lost the Game😳')
      document.querySelector('.score').textContent = 0;
    }
  }
  // When the guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High📈'
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game😳'
  //       document.querySelector('.score').textContent = 0;
  //     }



  //     // When the guess is too low 
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low📉'
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game😣'
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
})


document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.ceil(Math.random() * 20)
  document.querySelector('.score').textContent = 20;


  document.querySelector('.number').textContent = '?';

 displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background = 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)'

  document.querySelector('.number').style.width = '15rem'


})