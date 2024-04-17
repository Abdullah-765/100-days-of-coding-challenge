// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let developerSkills = {
    languages: ["Typescript", "Python", "C#"],
    tools: ["Git", "Docker", "GIthub"],
    frameworks: ["React", "Nextjs", "Django"]
}

let {languages, tools, frameworks} = developerSkills

console.log(`Languages: "${languages[0]} "Frameworks: "${frameworks[0]}" Tools: "${tools[0]}"`)

