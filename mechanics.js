//debugging
"use strict";
let winner;
const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;
let randomNum;

window.addEventListener("load", start);

//start game
function start() {
  console.log("start()");
  //add classes
  document.querySelector(".restart-btn").classList.add("hidden");
  document.querySelector("#player1").classList.add("rock");
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
  document.querySelector("button.rock").addEventListener("click", clickedSth);
  document.querySelector("button.paper").addEventListener("click", clickedSth);
  document.querySelector("button.scissors").addEventListener("click", clickedSth);
}

function clickedSth() {
  console.log("clickedSth()");
  userChoice = this.classList.value;
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
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  if (userChoice == "rock" && computerChoice == "scissors") {
    winner = "user";
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.add("scissors");
  } else if (userChoice == "rock" && computerChoice == "paper") {
    winner = "computer";
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.add("paper");
  } else if (userChoice == "paper" && computerChoice == "scissors") {
    winner = "computer";
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.add("paper");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.add("scissors");
  } else if (userChoice == "paper" && computerChoice == "rock") {
    winner = "user";
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.add("paper");
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    winner = "user";
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.add("scissors");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.add("paper");
  } else if (userChoice == "scissors" && computerChoice == "rock") {
    winner = "computer";
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.add("scissors");
  } else if (userChoice == "paper" && computerChoice == "paper") {
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.add("paper");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.add("paper");
  } else if (userChoice == "scissors" && computerChoice == "scissors") {
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.add("scissors");
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.add("scissors");
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
  document.querySelector("#win").classList.remove("hidden");
  document.querySelector(".restart-btn").classList.remove("hidden");
  document.querySelector(".restart-btn").addEventListener("click", restartGame);
}

//got to the losing screen
function showLose() {
  console.log("showLose()");
  document.querySelector("#lose").classList.remove("hidden");
  document.querySelector(".restart-btn").classList.remove("hidden");
  document.querySelector(".restart-btn").addEventListener("click", restartGame);
}

//go to the draw screen
function showDraw() {
  console.log("showDraw()");
  document.querySelector("#draw").classList.remove("hidden");
  document.querySelector(".restart-btn").classList.remove("hidden");
  document.querySelector(".restart-btn").addEventListener("click", restartGame);
}

//restart the game
// function restartGame() {
//   console.log("restart");
//   document.querySelector("#win").classList.add("hidden");
//   document.querySelector("#lose").classList.add("hidden");
//   document.querySelector("#draw").classList.add("hidden");
//   //   document.querySelector("#player1").classList.value = "";
//   //   document.querySelector("#player2").classList.value = "";
//   start();
// }
//clear classes
