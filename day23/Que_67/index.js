"use strict";
// rithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function addNumberAndNumberString(number1, number2) {
    return number1 + Number(number2);
}
console.log(addNumberAndNumberString(10, "10"));
