"use strict";
// Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
let checkIfTrue = function checkBothTrue(v1, v2) {
    return v1 && v2;
};
let user1Name = "abdullah";
let userInputName = "abdullah";
let user1Password = 7654;
let userInputPassword = 8765;
console.log(checkIfTrue(user1Password === userInputPassword, user1Name === userInputName));
