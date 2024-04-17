// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.


function addSpecial(valueToAdd: number): (valueToAddWith:number) => number{
    return function(number:number): number{
        return number+valueToAdd
    }
}

let add = addSpecial(10);

console.log(add(20))