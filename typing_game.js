window.addEventListener("load", init);

// Globals

// Available Levels
const levels = {
  easy: 20,
  medium: 15,
  hard: 10
};

// To change level
var currentLevel = levels.easy;

var time;
let currentscore = 0;
let isPlaying;
let high

// DOM Elements
const sentanceInput = document.querySelector("#sentance-input");
const currentsentance = document.querySelector("#current-sentance");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const highscore = document.getElementById("highscore");
const select=document.getElementById("select")

const sentances = [
  "hat is very nice for you",
  "i saw the river near to my aunts house",
  "luckily i got this job",
  "i saw the Gandhiji statue which is very old",
  "generate the bill",
  "you are very much stubborn in doing your activities",
  "The life full of good and bad but not be worst",
  "Dont run away from your path its the time to face",
  "jokes apart to do list",
  "developer is the main builder for the application",
  "how to establish my thoughts to reality",
  "He is a real hero",
  "javascript is the programming language",
  "Eat the food with good nutrition",
  "Earth revolves around the sun",
  "success is not dependent one",
  "I love my family who sacrifice the whole life for me",
  "When the things goes wrong try to investigate it",
  "Failures are the stepping stone to success",
  "coronovirus symptoms is very dangerous in human life",
  "always smile it leads to good position in your life",
  "Magic will happens once a time in your life",
  "We are studying in Mastery based concept ",  
];

// Initialize Game
function init() {
  handle_select()
  console.log(time)

 /* seconds.innerHTML = currentLevel;

  highscore.innerHTML = localStorage.getItem('high')

  sentanceInput.addEventListener("input", startMatch)*/

}

function startGame(button) {
  if(button.innerHTML == "Exit Game"){
    document.location.reload()
  } else {
    button.innerHTML = "Exit Game"
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
  }
}

function removeScore() {
  window.localStorage.clear()
  highscore.innerHTML = 0
}

// Start match
function startMatch() {
  if (matchsentances()) {
    isPlaying = true;
    time = currentLevel + 1;
    showsentance(sentances);
    sentanceInput.value = "";
    currentscore++;
    if (currentscore > localStorage.getItem('high', high)) {
      localStorage.setItem('high',currentscore)
      highscore.innerHTML = localStorage.getItem('high')
    }
  }

    scoreDisplay.innerHTML = currentscore;
    highscore.innerHTML = localStorage.getItem('high')
}

// Match currentsentance to sentanceInput
function matchsentances() {
  if (sentanceInput.value === currentsentance.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick & show random sentance
function showsentance(sentances) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * sentances.length);
  // Output random sentance
  currentsentance.innerHTML = sentances[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
    document.getElementById("startgame").innerHTML = "Start Game"
    document.location.reload()
    
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = 0;
    scoreDisplay.innerHTML = 0
  }
}

function handle_select()
{
   for(var i in levels)
   {
       var option=document.createElement('option')
       option.value=i
       option.innerText=i
       select.append(option)
   }
}

select.addEventListener('change',function(){
  var elem=event.target.value
  var currentLevel
  if(elem==="easy")
  {
    currentLevel=levels.easy
  }
  else if(elem==="medium")
  {
    currentLevel=levels.medium
  }
  else
  {
    currentLevel=levels.hard 
  }

  
  seconds.innerHTML = currentLevel;
  time=Number(seconds.innerHTML)

  highscore.innerHTML = localStorage.getItem('high')

  sentanceInput.addEventListener("input", startMatch)

})