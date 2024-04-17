"use strict";
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
Object.defineProperty(exports, "__esModule", { value: true });
function replaceJavaToType(str) {
    let replace = str.replace(/javascript/gi, "typescript");
    return replace;
}
console.log(replaceJavaToType("Javascript is a coding language, I love javascript"));
