"use strict";
// Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function roundedInteger(num1) {
    num1 = Math.round(num1);
    return num1;
}
console.log(roundedInteger(4.5));
console.log(roundedInteger(4.3));
