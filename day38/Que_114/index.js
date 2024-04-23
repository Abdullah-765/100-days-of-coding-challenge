"use strict";
// Iterate over a Map of student IDs and names, and log each pair to the console.
const studentMap = new Map();
studentMap.set(249694, "Abdullah");
studentMap.set(256112, "Babar azam");
studentMap.set(225661, "Cristiano");
studentMap.set(422919, "Pollard");
function iterateOverStudent(studentId) {
    studentId.forEach((names, Id) => {
        console.log(`\nId No: ${Id}\nStudent Name:${names}`);
    });
}
// Using For OF loop too
function iterateOverStudentUsingForOF(studentId) {
    for (const i of studentId) {
        console.log(`\nId No: ${i[0]}\nStudent Name: ${i[1]}`);
    }
    ;
}
console.log("\n Using for of loop");
iterateOverStudentUsingForOF(studentMap);
console.log("\n Using for Each loop");
iterateOverStudent(studentMap);
