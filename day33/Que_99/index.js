"use strict";
// Generate a date object representing your next birthday and log it to the console.
function checkBirthday(month, day) {
    const current = new Date();
    let year = current.getFullYear();
    const nextBirthday = new Date(year, month - 1, day);
    if (nextBirthday < current) {
        nextBirthday.setFullYear(year + 1);
    }
    return nextBirthday;
}
let birthday = checkBirthday(2, 5);
console.log("Next birthday on", birthday.toLocaleDateString());
