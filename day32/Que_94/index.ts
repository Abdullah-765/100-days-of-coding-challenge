// Use the .map() method to create a new array that contains the length of each word from an array of words.

let myArray: string[]  = ["Abdullah", "Edward", "Altair", "Ezio", "Haythem"]

let capitalArray:string[] = myArray.map(capital => capital.toUpperCase())

let number: number[] = myArray.map(word => word.length)

console.log(capitalArray)
console.log(number)