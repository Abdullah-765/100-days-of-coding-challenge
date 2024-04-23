"use strict";
// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
const countries = new Map();
countries.set("Usa", "LA");
countries.set("India", "Mumbai");
countries.set("Canada", "Toronto");
function checkForCanada(mapCountries) {
    if (countries.has("Canada")) {
        console.log(`The capital of canada is ${countries.get("Canada")}`);
    }
    else {
        console.log(`Canada is not in the Map`);
    }
}
checkForCanada(countries);
