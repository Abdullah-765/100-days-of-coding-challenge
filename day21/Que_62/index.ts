// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface studentInfo {
    name: string,
    age: number,
    class: number,  
    courses: {
        complimentry: string[],
        optional: string[]
    }
}

let student1: studentInfo = {
    name: "abdullah",
    age: 18,
    class: 12,
    courses: {
        complimentry: ["Urdu", "English", "Islamiat"],
        optional: ["Physics", "Math", "Computer Science"]
    }
}

console.log(student1)