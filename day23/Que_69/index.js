"use strict";
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function quotientAndRemainder(num1, num2) {
    let qoutient = Math.floor(num1 / num2);
    let remainder = num1 % num2;
    return { qoutient, remainder };
}
console.log(quotientAndRemainder(10, 3));
