// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function checkRandomAge():string {

    // using math.random to produce a random age then using an ifelse loop to categorize age group 
    let age = Math.floor(Math.random()*100)+1 

    let ageGroup 

    if (age < 13) {
        ageGroup = "Child"
    }else if (age > 13 && age <= 19) {
        ageGroup = "Teenager"
    }else if (age > 19 && age <= 50) {
        ageGroup = "Adult"
    }else {
        ageGroup = "Senior citizen"
    }

    let message = `Your age group is ${ageGroup}`
    return message
}

console.log(checkRandomAge())

