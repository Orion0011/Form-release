'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const enterOne=document.querySelector('.enter-one')
const enterTwo=document.querySelector('.enter-two')
const nameOne=document.querySelector('.name--0')
const nameTwo=document.querySelector('.name--1')
const player1=document.querySelector('.playerone')
const player2=document.querySelector('.playertwo')
const names=document.querySelector('.names')

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//first line of code
const start = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  nameOne.textContent="Player 1"
  nameTwo.textContent="Player 2"
  names.classList.remove('bro')

};
start();

enterOne.addEventListener('click', function(){
if (nameOne.textContent!== "") {
 
  nameOne.textContent=player1.value 
}else{
  alert('Player 1 please enter a valid name')
}

})


enterTwo.addEventListener('click', function(){
  
    if (nameTwo.textContent === "") {
      alert('Player 2 please enter a valid name')
  } else {
    
    nameTwo.textContent=player2.value  
  }
  
})
  



const switchPlayer = function () {
 document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (player1.value && player2.value !== ''){  
  
  names.classList.add('bro')
 
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player

      switchPlayer();

    }
  }
}

else {
  alert('enter names')
}

});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 50) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

        if (activePlayer===0) {
          alert(`The winner is ${nameOne.textContent}`);
        } else {
          alert(`The winner is ${nameTwo.textContent}`);
        }

      } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', start);


