"use strict";
// Write a function that returns the current date in the format "DD-MM-YYYY".
function getDateInOrder() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const hours = String(now.getHours());
    const year = String(now.getFullYear());
    return (`${day}-${month}-${year}`);
}
console.log(getDateInOrder());
