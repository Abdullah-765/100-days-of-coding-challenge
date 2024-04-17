"use strict";
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let prices1 = [1200, 1400, 1700];
let prices2 = [1300, 1900, 1600];
let combinedPrices = [...prices1, ...prices2].sort((a, b) => b - a);
console.log(combinedPrices);
