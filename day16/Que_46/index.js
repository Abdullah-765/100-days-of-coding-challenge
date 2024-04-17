"use strict";
// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptopObj = {
    Manufacturer: "Hp",
    Model: "Omen",
    Year: "2023",
    describe: function () {
        console.log(`This is a ${laptopObj.Manufacturer} ${laptopObj.Model} of year ${laptopObj.Year}`);
    },
};
laptopObj.describe();
