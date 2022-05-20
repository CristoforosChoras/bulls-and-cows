// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require("prompt-sync")({ sigint: true });

// Test that prompt is working
// let name = prompt("What is your name? ");
// console.log(`User's input is: ${name}`);

// creating the random number

function randomNumberNoRepeat() {
    let numberPick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numberPick
        .sort(() => Math.random() - 0.5)
        .join("")
        .slice(0, 4);
}

let findTheUser = prompt("what's your name: ")


function playTheGame(randomNumberNoRepeat) {
    console.log(randomNumberNoRepeat);
    while(true){
        guess = prompt('number:');
        
        if(randomNumberNoRepeat === guess){
          console.log('You win!');
          break;
        }
        if(randomNumberNoRepeat.length !== guess.length){
          console.log("not valid number")
          continue;
        }
        let cows = 0; bulls = 0;
        for(let i = 0; i < randomNumberNoRepeat.length; i++){
          for(let j = 0; j <guess.length; j++){
              if(randomNumberNoRepeat[i] === guess[j]){
                if(i === j){
                  bulls++;
                }else{
                  cows++;
                }
              }else continue;
          }  
        }
        console.log('cows = ' + cows);
        console.log('bulls = ' + bulls);
      }
    
}


// console.log(`${bulls}bulls&${cows}cows`);
 
console.log(playTheGame(randomNumberNoRepeat()));

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something
