// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require("prompt-sync")({ sigint: true });

// Test that prompt is working
// let name = prompt("What is your name? ");
// console.log(`User's input is: ${name}`);

// creating the random number
let rulesMessage = `Gameplay looks so: you enter your guess code, computer compares it with the secret code and gives you two clues: numbers of "bulls" and "cows". What does this mean? A bull is a digit which is present in both the codes in the same position. And a cow is a digit which is present in both the codes in the different position. For example, if the secret code is 2056 and you ask 9516, an answer will be "one bull and one cow" (but you won't know which digit is a bull and which digit is a cow). That's all!`

let cheerRandomMessage = ["Just a friendly reminder that I believe in you.","I predict a big win at the next guess","Crossing my fingers for you! Go, go, go",]

function randomMessage() {
  return cheerRandomMessage[Math.floor(Math.random() * cheerRandomMessage.length)]
}

function askForTheRules() {
  let findTheUser = prompt("what's your name: ");
  let question = prompt("Do you know the rules of the game Y/N: ")
  if (question.toUpperCase()=== "N") {
    console.log(rulesMessage);
  }else {
    console.log(`Let´s go ${findTheUser}`);
  }
  
}


function getRandomNumberNoRepeat(level) {
  let numberPick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numberPick
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, level);
}

function levelSelector() {
  let level = prompt("choose your level easy,medium,hard,extreme: ");
  if (level.toLowerCase() === "easy") {
    level = 4;
    console.log(`guess a ${level} digit number`);
  } else if (level.toLowerCase() === "medium") {
    level = 6;
    console.log(`guess a ${level} digit number`);
  } else if (level.toLowerCase() === "hard") {
    level = 7;
    console.log(`guess a ${level} digit number`);
  } else if (level.toLowerCase() === "extreme") {
    level = 9;
    console.log(`guess a ${level} digit number`);
  } else {
    level = false;
    console.log(
      "the level should be: easy,medium,hard or extreme! check for typos!"
    );
  }
  return level;
}
function playAgain() {
  let playAgainTheGame = prompt("Do you want to play again? Y/N: ");
  if (playAgainTheGame.toUpperCase() === "Y") {
    return start();
  } else {
    console.log("Thanks for playing");
  }
}
function validGuess(guess, randomNumberNoRepeat) {
  let noRepeatInputCheck = guess.split("").sort((a, b) => a - b);
  let hasDuplicates = false;
  for (let k = 0; k < noRepeatInputCheck.length - 1; k++) {
    if (noRepeatInputCheck[k] === noRepeatInputCheck[k + 1]) {
      hasDuplicates = true;
    }
  }
  if (hasDuplicates === true) {
    console.log("no valid number");
    return false;
  }
  if (randomNumberNoRepeat.length !== guess.length) {
    console.log("not valid number");
    return false;
  }
  return true;
}

function playTheGame(level) {
  let randomNumberNoRepeat = getRandomNumberNoRepeat(level);
  let attempts = 0;
  console.log(randomNumberNoRepeat);

  while (true) {
    attempts++;
    guess = prompt("number:");
    if (randomNumberNoRepeat === guess) {
      console.log(`you won after ${attempts} attempts`);
      break;
    }
    if (!validGuess(guess, randomNumberNoRepeat)) {
      continue;
    }
    let cows = 0;
    let bulls = 0;
    for (let i = 0; i < randomNumberNoRepeat.length; i++) {
      for (let j = 0; j < guess.length; j++) {
        if (randomNumberNoRepeat[i] === guess[j]) {
          if (i === j) {
            bulls++;
          } else {
            cows++;
          }
        } else continue;
      }
    }
    if (bulls === 0 && cows === 0) {
      console.log(randomMessage());
    }
    console.log("cows = " + cows);
    console.log("bulls = " + bulls);
  }
}

function start() {
  askForTheRules()
  let level = levelSelector();
  while (level === false) {
    level = levelSelector();
  }

  playTheGame(level);
  playAgain();
}
start();
