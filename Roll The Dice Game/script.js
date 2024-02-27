//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
//selecting dice
const diceEl = document.querySelector(".dice");

//selecting palyer scores(global)
const player0Score = document.getElementById("score--0");
const player1Score = document.getElementById("score--1");
//selecting players
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//selecting buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//selecting score
const currentPLY0SCOREEl = document.getElementById("current--0");
const currentPLY1SCOREEl = document.getElementById("current--1");

//making value to 0 here which were 42 and 24
//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

let scores;
let currentScore;
let activePlayer;
let playing;
//hiding the dice image
diceEl.classList.add("hidden");

//starting game conditions//reseting game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  currentPLY0SCOREEl.textContent = 0;
  currentPLY1SCOREEl.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
//running init() function ones to set the values
init();

//switching player condition's function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling the dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1.Generate random dice roll
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    //2.Display the dice
    diceEl.classList.remove("hidden");

    diceEl.src = `dice-${diceRandom}.png`; //displaying random dice by chaging src

    //3.check for rolled 1; if true the switch to next player
    if (diceRandom !== 1) {
      //add dice value to current score
      currentScore += diceRandom;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // btnHold.addEventListener('click',function(){

      // })
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1.add score to current active player
    scores[activePlayer] += currentScore;
    //   scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.check players score is >=100

    if (scores[activePlayer] >= 10) {
      //if true Finish the score
      playing = false;
      //removing the dice after player wins the game
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      document
        .querySelector(`player--${activePlayer}`)
        .classList.add("player--winner name");
    } else {
      //if not Switch to next player
      switchPlayer();
    }
  }
});

//changing to new player
//created init function reseted to the new values(defualt values)
btnNew.addEventListener("click", init);
