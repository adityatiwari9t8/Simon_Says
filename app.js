let gameSeq = [];
let userSeq = [];

// Matches the IDs in HTML
const btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let highScore = 0;

// DOM Elements
const levelDisplay = document.querySelector("#level-display");
const highScoreDisplay = document.querySelector("#high-score-display");
const statusText = document.querySelector("#status-text");
const startBtn = document.querySelector("#start-btn");
const allBtns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

// Start Game via Button
startBtn.addEventListener("click", function () {
  if (started == false) {
    startGame();
  }
});

// Start Game via Keypress (Desktop backup)
document.addEventListener("keypress", function () {
  if (started == false) {
    startGame();
  }
});

function startGame() {
  console.log("Game Started");
  started = true;
  level = 0;
  gameSeq = [];
  userSeq = [];
  statusText.innerText = "Watch carefully...";
  startBtn.innerText = "Playing...";
  startBtn.disabled = true; // Prevent double clicking
  startBtn.style.opacity = "0.5";
  
  setTimeout(levelUp, 1000);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("user-press");
  setTimeout(function () {
    btn.classList.remove("user-press");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  levelDisplay.innerText = level;
  statusText.innerText = `Level ${level}`;

  // Random Logic Fix: * 4 because array length is 4
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  
  gameSeq.push(randColor);
  console.log(gameSeq);
  
  // Flash logic with small delay so it doesn't happen instantly
  setTimeout(() => {
      gameFlash(randBtn);
  }, 500);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    // Correct so far
    if (userSeq.length === gameSeq.length) {
      statusText.innerText = "Good Job! Next Level...";
      setTimeout(levelUp, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
    statusText.innerHTML = `Game Over! Score: <b>${level}</b>`;
    
    // Update High Score
    if(level > highScore) {
        highScore = level;
        highScoreDisplay.innerText = highScore;
    }

    // Visual Feedback for Error
    body.classList.add("game-over-anim");
    setTimeout(function () {
      body.classList.remove("game-over-anim");
    }, 200);

    reset();
}

function btnPress() {
  if (!started) return; // Don't allow clicking if game hasn't started

  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

// Add event listeners to buttons
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  startBtn.disabled = false;
  startBtn.style.opacity = "1";
  startBtn.innerText = "Restart Game";
}