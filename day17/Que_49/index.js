"use strict";
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
Object.defineProperty(exports, "__esModule", { value: true });
function logHobbies(...hobbies) {
    hobbies.forEach(hobbies => console.log(`I enjoy my ${hobbies} hobby`));
}
logHobbies(`Cycling`, `Gaming`);
