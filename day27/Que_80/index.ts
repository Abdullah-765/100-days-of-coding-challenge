// Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.


interface car {
    make:string,
    model:string,
    year:number,
    color?:string
}
let carDetails: car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
}

carDetails.color = "White";
carDetails.year = 2021;

console.log(carDetails)
    