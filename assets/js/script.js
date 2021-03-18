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

// Game structure Ref: https://github.com/bradtraversy/wordbeater 
window.addEventListener("load", init);

const randomQuotesApi = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");

let time = 30;
let score = 0;
let isPlaying;

// Initialize Game
function init() {
    // Load quote
    randomQuotes(randomQuotesApi);
    // Start Match at keydown
    quoteInputElement.addEventListener("keydown", startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Focus on Input box
    quoteInputElement.focus();

} 

// When quotes match
function startMatch() {
    if (matchQuote()) {
        isPlaying = true;
        time = 31;
        randomQuotes(randomQuotesApi);
        quoteInputElement.value = "";
        score++;
        }
        scoreDisplay.innerHTML = score;
    }

function matchQuote() {
    if (quoteInputElement.value === quoteDisplayElement.innerHTML) {
        nextQuote()
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

// Pick & show random quote, fetch data from API Ref: https://github.com/WebDevSimplified/JS-Speed-Typing-Game
function randomQuotes() {
  return fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => data.content)
}
// use of Async Ref: https://www.youtube.com/watch?v=V_Kr9OSfDeU&ab_channel=WebDevSimplified
async function nextQuote() {
    const quote = await randomQuotes()
    quoteDisplayElement.innerText = quote
}
nextQuote();

// Countdown timer
function countdown() {
    if(time > 0){
        time--;
    } else if(time === 0){
        isPlaying = false;  
        //Game Over
        message.innerHTML = "Game Over!";
    }
    //Show time
    timeDisplay.innerHTML = time;
}