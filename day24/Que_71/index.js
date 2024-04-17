"use strict";
// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let nameLet = "John";
nameLet = "John Doe";
console.log(nameLet);
const nameConst = "Edward";
try {
    nameConst = "Kenway";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
