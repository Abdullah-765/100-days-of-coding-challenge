"use strict";
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function findAverage(...num1) {
    let average = num1.reduce((sum, average) => sum + average / num1.length, 0);
    console.log(average);
}
findAverage(10, 20, 30, 40, 50);
