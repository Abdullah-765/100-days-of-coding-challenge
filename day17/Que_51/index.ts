// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function calculateArea(height: number, width: number):number{
    return width*height
}

let calculateAreaArrow = (width: number, height: number) => 
width * height

console.log(calculateAreaArrow(5,3))

