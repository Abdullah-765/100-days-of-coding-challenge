"use strict";
// Find the Average Grade: Given a list of grades, calculate the average grade.
let numbers = [55, 88, 92, 76, 68, 72, 85];
let averageNumber = numbers.reduce((accumulator, item) => accumulator + item / numbers.length, 0);
console.log(averageNumber);
