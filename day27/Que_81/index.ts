// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logUsingFor(carDetails:object){
    for (const property in carDetails) {
        if (Object.prototype.hasOwnProperty.call(carDetails, property)) {
            console.log(`${property}: ${carDetails[property as keyof typeof carDetails]}`)
            
        }
    }
}

logUsingFor({make:"toyota", model:"corolla", year: 2021})
