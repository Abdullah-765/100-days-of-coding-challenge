//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Items {
    Name: string;
    Age: number;
    Gender: String;
    Profession: string;
}

let person1: Items = {

    Name: `Leonardo Da vinci`,
    Age: 67,
    Gender: `Male`,
    Profession: `Artist`,
}

let person2: Items = {

    Name: `Alber Einstien`,
    Age: 76,
    Gender: `Male`,
    Profession: `Scientist`,
}

let person3: Items = {

    Name: `Isaac Newton`,
    Age: 84,
    Gender: `Male`,
    Profession: `Physicist`,
}

console.log(`Person 1 is`, person1);
console.log(`Person 2 is`, person2);
console.log(`Person 3 is`, person3);

