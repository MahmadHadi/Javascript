 // Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value
let randomNum = 12;
let num = 0;
// do {
//     num = prompt("Enter a number (HINT : number is b/t 0 to 100)");
// } while (num != randomNum);

while (num != randomNum) {
    num = prompt("Enter a number (HINT : number is b/t 0 to 100)");
    // if (num === randomNum) {
    //     console.log("You have guess the right number :)");
    //     break;
    // }
}