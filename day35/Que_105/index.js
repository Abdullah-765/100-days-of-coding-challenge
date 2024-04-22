"use strict";
//simulate a dice using javascript and return a random integer between 1 and 6
function randomDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}
console.log(randomDice());
