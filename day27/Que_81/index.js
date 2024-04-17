"use strict";
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
// interface car {
//     make:string,
//     model:string,
//     year:number,
//     color?:string
// }
// let carDetails: car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
// }
// carDetails.color = "White";
// carDetails.year = 2021;
function logUsingFor(carDetails) {
    for (const property in carDetails) {
        if (Object.prototype.hasOwnProperty.call(carDetails, property)) {
            console.log(`${property}: ${carDetails[property]}`);
        }
    }
}
logUsingFor({ make: "toyota", model: "corolla", year: 2021 });
