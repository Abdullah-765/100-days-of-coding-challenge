// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type shapes = {
    Kind: "circle" | "rectangle";
    radius?: number;
    width?: number;
    height?:number;
}

let circle: shapes = {
    Kind: "circle",
    radius: 50
}

let rectangle: shapes = {
    Kind: "rectangle",
    width: 50,
    height: 60
}

console.log(circle)
console.log(rectangle)
