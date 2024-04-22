//Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function checkIfDivisible(number:number):boolean{
    return (number % 2 === 0 && number % 3 === 0)
}

console.log(checkIfDivisible(144))
console.log(checkIfDivisible(32))
