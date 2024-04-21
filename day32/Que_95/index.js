"use strict";
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterGreaterThanTen(numbers) {
    let onlyGreater = numbers.filter((num) => num >= 10);
    console.log(`Unflitered array:`, numbers);
    return onlyGreater;
}
console.log(`Filtered array:`, filterGreaterThanTen([1, 2, 11, 10, 50, 20]));
