// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".


function replaceJavaToType(str:string):string{
    let replace = str.replace(/javascript/gi,  "typescript")

    return replace
}

console.log(replaceJavaToType("Javascript is a coding language, I love javascript"))