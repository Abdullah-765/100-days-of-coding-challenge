// Write a function to remove the last element from an array and return the removed element.

function removeLastElement<A>(array: A[]):A | undefined{
    return array.pop()
}


console.log(removeLastElement([1,2,3,4,5]))

let fruits = ["apple", "banana", "cherry"]

console.log(removeLastElement(fruits))
console.log(fruits)
