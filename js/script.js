window.addEventListener("load",init);

// Globals
let time = 5;
let score = 0;
let isPlaying;

//DOM
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const meddage = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
    "legendary",
    "celebrate",
    "engineer",
    "exclusive",
    "prominently",
    "display",
    "performance",
    "movements",
    "straight",
    "through",
    "peripherals",
    "microphone",
    "country",
    "everything",
    "master",
    "laughter"

];

// Initialize Game
function init() {
    //Load words from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener("input", startMatch);
    // Call countdown
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
} 

// Start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = "";
        score++;
        }
        scoreDisplay.innerHTML = score;
    }

//Match currentWord to wordInput
function matchWords(){
if(wordInput.value === currentWord.innerHTML) {
            message.innerHTML = "Correct!";
            return true;
        } else {
            message.innerHTML = "";
            return false;
    }
}

// Pick and show random words
function showWord(words) {
    // Generate randon array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure the time has not run out
    if(time>0){
        // Decrement
        time--;
    } else if(time === 0){
        //Game Over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over!";
        score = 0;
    }
}