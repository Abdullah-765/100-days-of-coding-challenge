// Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function convertIntoRealNumber(str:string):number{
    return parseFloat(str)
}

console.log(convertIntoRealNumber("12345"))
console.log(convertIntoRealNumber("abdullah"))