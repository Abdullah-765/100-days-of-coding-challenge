// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

import { log } from "console"

function logHobbies(...hobbies: string[]){
    hobbies.forEach(hobbies => console.log(`I enjoy my ${hobbies} hobby`))
}

logHobbies(`Cycling`, `Gaming`)

