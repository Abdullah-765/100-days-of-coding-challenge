"use strict";
//Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function checkStudentGrade(num) {
    let grade = "";
    let message = "";
    if (num > 99) {
        return "Please enter a valid number";
    }
    else if (num >= 80) {
        grade = "A+";
    }
    else if (num >= 70) {
        grade = "A";
    }
    else if (num >= 60) {
        grade = "B";
    }
    else if (num >= 50) {
        grade = "C";
    }
    else if (num >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    message = `Your grade is ${grade}`;
    return message;
}
console.log(checkStudentGrade(99));
