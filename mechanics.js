//debugging
"use strict";
let winner = "computer";

//start game
function start() {
  console.log("start");
}

//get player choice
function playerChoice() {
  console.log("playerChoice");
}

//make computer choice
function computerChoice() {
  console.log("computerChoice");
}

//run the game animation
function showAnimations() {
  console.log("showAnimations");
}

//determine the winner
function whoWon() {
  console.log("whoWon");
  if (winner == "computer") {
    showLose();
  } else if (winner == "user") {
    showLose();
  } else {
    showDraw();
  }
}

//go to the winner screen
function showWin() {
  console.log("showWin");
}

//got to the losing screen
function showLose() {
  console.log("showLose");
}

//go to the draw screen
function showDraw() {
  console.log("showDraw");
}
