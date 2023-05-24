var playerName = "";
var playerScore = 0;
var cpuScore = 0;

function hideEnterNameSection() {
    document.getElementById("intro").style.display = "none";
  }  

function startGame() {
    playerName = document.getElementById("name").value;
    if (playerName.trim() === "") {
      alert("Please enter your name.");
      return;
    }
  
    document.getElementById("player-name").textContent = playerName;
    document.getElementById("name").disabled = true;
    document.getElementById("play-station").style.display = "block";
  
    alert("Let's play " + playerName + " , I will destroy you!");
  
    hideEnterNameSection();
  }  
  
function playRound(playerSelection) {
  const cpuSelection = cpuPlay();
  const result = determineWinner(playerSelection, cpuSelection);

  updateScore(result);
  displayResult(playerSelection, cpuSelection, result);
}

function cpuPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerSelection, cpuSelection) {
  if (playerSelection === cpuSelection) {
    return "Draw!";
  }

  if (
    (playerSelection === "rock" && cpuSelection === "scissors") ||
    (playerSelection === "paper" && cpuSelection === "rock") ||
    (playerSelection === "scissors" && cpuSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function updateScore(result) {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    cpuScore++;
  }

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("cpu-score").textContent = cpuScore;
}

function displayResult(playerSelection, cpuSelection, result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `${playerName} ${playerSelection}. CPU ${cpuSelection}. <br> ${result}`;
}