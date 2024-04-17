"use strict";
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["bike"] = 2] = "bike";
    vehicleType[vehicleType["airplane"] = 3] = "airplane";
    vehicleType[vehicleType["train"] = 4] = "train";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.airplane);
console.log(vehicleType[1]);
