"use strict";
// Write a function that returns a random boolean value, true or false.
function returnBoolean() {
    let num1 = Math.random() > 0.5;
    return num1;
}
console.log(returnBoolean());
