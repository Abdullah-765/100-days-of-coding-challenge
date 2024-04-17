// Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptopObj = [
  {
    Manufacturer: "Hp",
    Model: "Omen",
    Year: "2023",
  },
  {
    Manufacturer: "Asus",
    Model: "Zenbook",
    Year: "2021",
  },
  { Manufacturer: "Lenovo",
   Model: "Thimkpad", 
   Year: "2018"},
];

let [laptop1, laptop2] = laptopObj
console.log(laptop1)
console.log(laptop2)
