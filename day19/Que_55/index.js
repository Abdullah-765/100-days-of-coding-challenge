"use strict";
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let nubmerArray = [5, 7, 8, 10, 20, 25];
let doubleNumbers = nubmerArray.map(Element => Element + Element);
console.log(doubleNumbers);
