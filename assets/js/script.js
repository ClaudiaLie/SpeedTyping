// Text animation Ref: https://github.com/kubowania/typewriter
const textDisplay = document.getElementById("text");
const phrases = ["ARE YOU A TYPE MASTER?", "LET'S FIND OUT!"];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join("");

    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);            
            j++;
            textDisplay.innerHTML = currentPhrase.join("");
        }  

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            textDisplay.innerHTML = currentPhrase.join("");
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    // Random typing time (Math.random()) Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const speedUp = Math.random() * (80 -50) + 50;
    const normalSpeed = Math.random() * (300 -200) + 200;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();

// Typing Game 1

const randomQuotesApi = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
// Insert timer here?

// Compare each character typed to the quote displayed
quoteInputElement.addEventListener("input", () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll("span");
    const arrayValue = quoteInputElement.value.split("");

    let correct = true;

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null){
            characterSpan.classList.remove("correct");
            characterSpan.classList.remove("incorrect");
            correct = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add("correct");
            characterSpan.classList.remove("incorrect");
        } else {
            characterSpan.classList.remove("correct");
            characterSpan.classList.add("incorrect");
            correct = false;
        }
    });

    if (correct) getNextQuote();
});

function getRandomQuote() {
    return fetch(randomQuotesApi)
    .then(response => response.json())
    .then(data => data.content);
}

// Create a loop in order to make each letter green or red
async function getNextQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = "";
    quote.split("").forEach(character => {
        const characterSpan = document.createElement("span");
        
        characterSpan.innerText = character;
        quoteDisplayElement.appendChild(characterSpan);
    });
    quoteInputElement.value = null;
}

getNextQuote();


// Typing Game 2 Ref: https://github.com/bradtraversy/wordbeater

window.addEventListener("load",init);

// Globals
let time = 10;
let score = 0;
let isPlaying;

//DOM
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");


// Initialize Game
function init() {
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
} 

// Start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 10;
        showWord(words);
        wordInput.value = "";
        score++;
        }
        scoreDisplay.innerHTML = score;
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
