// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function declaration(num1: number):number{
    return num1 * num1
}

const expression = function(num1:number):number{
    return num1 * num1
}

console.log(declaration(5))
console.log(expression(10))