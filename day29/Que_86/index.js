"use strict";
// : Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checkForJavascript(str) {
    const check = str.toLowerCase().includes("javascript");
    return check;
}
console.log(checkForJavascript("Learn to code with Javascript"));
