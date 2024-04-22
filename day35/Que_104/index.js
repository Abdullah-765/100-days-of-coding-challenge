"use strict";
// Create a function that generates a random Hexadecimal color code
function randomHexadecimalCode() {
    let color = "#" + Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    return color;
}
console.log(randomHexadecimalCode());
