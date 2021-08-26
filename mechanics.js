//debugging
"use strict";
let winner;
const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;
let randomNum = 1;

window.addEventListener("load", start);

//start game
function start() {
  console.log("start()");
  //start animation
  showAnimations();
  getPlayerChoice();
  getComputerChoice();
}

//get player choice
function getPlayerChoice() {
  console.log("playerChoice()");
  randomNum = Math.floor(Math.random() * 3);
  userChoice = choices[randomNum];
  console.log("If not clicked, user choice is " + userChoice);
  document.querySelector("button.rock").addEventListener("click", clickedRock);
  //   document.querySelector("button.scissors").addEventListener("click", getPlayerChoice);
  //   document.querySelector("button.paper").addEventListener("click", getPlayerChoice);
}
function clickedRock() {
  console.log("clickedRock()");
  //   userChoice = this.classList.value;
  console.log("User chose " + userChoice);
}

//make computer choice
function getComputerChoice() {
  console.log("computerChoice()");
  computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log("Computer chose " + computerChoice);
}

//run the game animation
function showAnimations() {
  console.log("showAnimations()");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", whoWon);
}

// //show rock in the end
// function showRock() {
//   console.log("showRock()");
//   document.querySelector("#player1").classList.remove("shake");
//   document.querySelector("#player1").classList.remove("scissors");
//   document.querySelector("#player1").classList.add("rock");
// }
// //show scissors in the end
// function showScissors() {
//   console.log("showScissors()");
//   document.querySelector("#player1").classList.remove("shake");
//   document.querySelector("#player1").classList.remove("rock");
//   document.querySelector("#player1").classList.add("scissors");
// }

//determine the winner
function whoWon() {
  if (userChoice == "rock" && computerChoice == "scissors") {
    winner = "user";
  } else if (userChoice == "rock" && computerChoice == "paper") {
    winner = "computer";
  } else if (userChoice == "paper" && computerChoice == "scissors") {
    winner = "computer";
  } else if (userChoice == "paper" && computerChoice == "rock") {
    winner = "user";
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    winner = "user";
  } else if (userChoice == "scissors" && computerChoice == "rock") {
    winner = "computer";
  }
  showEndScreen();
}

//show end screen based on the result
function showEndScreen() {
  console.log("whoWon()");
  if (winner == "computer") {
    showLose();
  } else if (winner == "user") {
    showWin();
  } else {
    showDraw();
  }
}

//go to the winner screen
function showWin() {
  console.log("showWin()");
}

//got to the losing screen
function showLose() {
  console.log("showLose()");
}

//go to the draw screen
function showDraw() {
  console.log("showDraw()");
}
