let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMsg(message) {
  let msg = (document.querySelector(".message").textContent = message);
}

//adding click event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displayMsg("No number!");
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct answer";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "80px";
    document.querySelector(".number").textContent = secretNumber;

    if (highScore <= score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//adding reset event
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  document.querySelector(".message").textContent = "Start guessing!";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

//When guess is too high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lose the game";
//     document.querySelector(".score").textContent = 0;
//   }

//   //When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too Low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lose the game";
//     document.querySelector(".score").textContent = 0;
//   }
// }
