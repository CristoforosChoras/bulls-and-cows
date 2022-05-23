// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require("prompt-sync")({ sigint: true });

// Test that prompt is working
// let name = prompt("What is your name? ");
// console.log(`User's input is: ${name}`);

// creating the random number
let level = prompt("choose your lvl easy or medium or hard or extreme")
if (level=== "easy") {
  level=4
}else if(level==="medium"){
  level=6
}
else if(level==="hard"){
  level=7
}else if(level==="extreme"){
  level=9
}
function randomNumberNoRepeat() {
  let numberPick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numberPick
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, level);
}

let findTheUser = prompt("what's your name: ");

function playTheGame(randomNumberNoRepeat) {
  console.log(randomNumberNoRepeat);
  while (true) {
    guess = prompt("number:");
    
    if (randomNumberNoRepeat === guess) {
      console.log(`you won after ${attempts}`);
      break;
    }
    let noRepeatInputCheck = guess.split("").sort((a, b) => a - b);
    let hasDuplicates = false;
    for (let k = 0; k < noRepeatInputCheck.length - 1; k++) {
      if (noRepeatInputCheck[k] === noRepeatInputCheck[k + 1]) {
        hasDuplicates = true;
      }
    }
    if (hasDuplicates === true) {
      console.log("no valid number");
      continue;
    }

    if (randomNumberNoRepeat.length !== guess.length) {
      console.log("not valid number");
      continue;
    }
    var attempts = 0;
    let cows = 0;
    let bulls = 0;
    for (let i = 0; i < randomNumberNoRepeat.length; i++) {
      for (let j = 0; j < guess.length; j++) {
        if (randomNumberNoRepeat[i] === guess[j]) {
          if (i === j) {
            bulls++;
            attempts++;
          } else {
            cows++;
            attempts++;
          }
        } else continue;
      }
    }
    console.log("cows = " + cows);
    console.log("bulls = " + bulls);
    console.log(attempts);
    
  }
}

// console.log(`${bulls}bulls&${cows}cows`);

playTheGame(randomNumberNoRepeat());

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something
