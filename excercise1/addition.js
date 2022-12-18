//EXCERCISES PART 1 (MATH)
//Using the prompt-promise npm library, ask the user a math question, ie: "What is 5 + 7?". 
//Verify the user has provided answer, and if not, tell the user it is incorrect.
//The user can have a maximum amount of guesses of 3 - after that, they can no longer guess and the program should exit. 
// If the user is correct, let them know, and the program should exist.

const prompt = require("prompt-promise");

async function mathQuestion (){
    let userInput;
    let numberOfGuesses = 0;
    while (numberOfGuesses < 3) {

        userInput = await prompt ("What is 5 + 7?\n");

        if(userInput === "12" ){
            console.log("Nailed it!!");
            break;
        } else {
            console.log("Nope, keep trying");
            numberOfGuesses++;
        }
    }

    if (numberOfGuesses === 3){
        console.log("No more guesses left, sorry!!");
    }
}

mathQuestion();