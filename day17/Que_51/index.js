"use strict";
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculateArea(height, width) {
    return width * height;
}
let calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(5, 3));
