// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

function compoundAssignment(x: number){
    x += 2;
    console.log(`Addition =`, x)

    x -= 1;
    console.log(`Subtraction =`, x)

    x*= 3;
    console.log(`Multiplication =`, x)

    x/= 2;
    console.log(`Division =`, x)
}

compoundAssignment(1)