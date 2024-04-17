"use strict";
// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplyingDecimals(number1, number2) {
    return Math.round((number1 * number2) * 50) / 100;
}
console.log(multiplyingDecimals(0.1, 0.2));
