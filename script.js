'use strict';

let attempt = 5;
let scoring = 0;
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
//document.querySelector('.number').textContent = secretnumber;

// this will happen when event happened
document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  //IF NUMBER IS NOT ENTER
  if (!x) {
    document.querySelector('.message').textContent = 'NO NUMBER ';
  }
  //IF IT GUESS CORRECT
  if (x == secretnumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER!!!!!🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '15rem';

    scoring = attempt * 2;
    document.querySelector('.highscore').textContent = scoring;
    if (scoring > highscore) {
      highscore = scoring;
      document.querySelector('.Highscore').textContent = highscore;
    }
  }

  //IF GREATHER THAN SECRET NUMBER
  else if (x > secretnumber) {
    if (attempt > 0) {
      document.querySelector('.message').textContent = 'HIGH';
      attempt--;
      document.querySelector('.score').textContent = attempt;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST😔';
      document.querySelector('body').style.backgroundColor =
        'rgb(240, 100, 100)';
    }

    //IF LESS THAN SECRET NUMBER
  } else if (x < secretnumber) {
    if (attempt > 0) {
      document.querySelector('.message').textContent = 'LOW';
      attempt--;
      document.querySelector('.score').textContent = attempt;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST😔';
      document.querySelector('body').style.backgroundColor = 'rgb(202, 65, 65)';
      document.querySelector('header').style.backgroundColor =
        'rgb(202, 65, 65)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoring = 0;
  attempt = 5; // Assuming 'attempt' is a variable that tracks the number of attempts
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Make Your Guess';
  document.querySelector('.score').textContent = attempt; // Update text content for attempt count
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = scoring;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#fff';
  document.querySelector('.number').style.width = '15rem';
});

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
btnsOpenModal.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const checker = function (e) {
  if (e.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
};
document.addEventListener('keydown', checker);
