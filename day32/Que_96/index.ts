// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function sumAll(array: number[]):number{
    let  reduced = array.reduce((sum, current)  => current + sum, 0)

    return reduced
}

console.log(sumAll([1,2,3,5,10,10,20]))