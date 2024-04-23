"use strict";
// Use a switch statement to log the days of the week based on a number (1-7).
function logDaysNames() {
    let day = "";
    // producing a random day number instead of giving function a number
    let num1 = Math.floor(Math.random() * 7) + 1;
    switch (num1) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Friday";
            break;
        default:
            day = "Invalid number";
    }
    const message = `Today is ${day}`;
    return message;
}
console.log(logDaysNames());
