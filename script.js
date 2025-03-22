let youScore = 0;
let ankitScore = 0;

const youScoreDisplay = document.getElementById("you-score");
const ankitScoreDisplay = document.getElementById("ankit-score");
const resultDisplay = document.getElementById("result");
const popup = document.getElementById("end-game-popup");
const winnerMessage = document.getElementById("winner-message");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");
const gameOverSound = document.getElementById("game-over-sound");

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
  choice.addEventListener("click", (event) => {
    playGame(event.target.id);
  });
});

function playGame(playerChoice) {
  const ankitChoice = getAnkitChoice();
  const winner = getWinner(playerChoice, ankitChoice);

  if (winner === "YOU") {
    youScore++;
    winSound.play();
    resultDisplay.innerHTML = `YOU win! ${playerChoice} beats ${ankitChoice}`;
  } else if (winner === "Ankit") {
    ankitScore++;
    loseSound.play();
    resultDisplay.innerHTML = `Ankit wins! ${ankitChoice} beats ${playerChoice}`;
  } else {
    resultDisplay.innerHTML = `It's a draw! Both chose ${playerChoice}`;
  }

  updateScores();
  checkGameOver();
}

function getAnkitChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(playerChoice, ankitChoice) {
  if (playerChoice === ankitChoice) return "Draw";
  
  if (
    (playerChoice === "rock" && ankitChoice === "scissors") ||
    (playerChoice === "scissors" && ankitChoice === "paper") ||
    (playerChoice === "paper" && ankitChoice === "rock")
  ) {
    return "YOU";
  } else {
    return "Ankit";
  }
}

function updateScores() {
  youScoreDisplay.innerText = youScore;
  ankitScoreDisplay.innerText = ankitScore;
}

function checkGameOver() {
  if (youScore === 10 || ankitScore === 10) {
    setTimeout(() => {
      showEndGamePopup();
    }, 500);
  }
}

function showEndGamePopup() {
  popup.style.display = "block";
  gameOverSound.play(); // Play game-over sound

  if (youScore === 10) {
    winnerMessage.innerHTML = `🎉 Congratulations! YOU win! 🎉<br>Subscribe to <a href="https://www.youtube.com/@ankit512" target="_blank">Ankit512</a>`;
  } else {
    winnerMessage.innerHTML = `😢 Better luck next time!<br>Subscribe to <a href="https://www.youtube.com/@ankit512" target="_blank">Ankit512</a>`;
  }
}

function restartGame() {
  youScore = 0;
  ankitScore = 0;
  youScoreDisplay.innerText = youScore;
  ankitScoreDisplay.innerText = ankitScore;
  resultDisplay.innerText = "";
  popup.style.display = "none";
}

function quitGame() {
  window.location.href = "https://www.youtube.com/@ankit512"; // Redirect to Ankit512 YouTube
}
