// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

// Optional to use a random grade number 
// let randomGrade = Math.floor(Math.random()*99)+1
function checkGrade(number: number):string{

  switch (true) {
    case number <= 40 :
      return "Fail";
    //   break;

    case number >= 40 && number < 50:
      return "D";
    //   break;

    case number >= 50 && number < 60:
      return "C";
    //   break;

    case number >= 60 && number < 70:
      return "B";
    //   break;

    case number >= 70 && number < 80:
      return "A";
    //   break;

    case number >= 80 && number <= 99:
      return "A+";
    //   break;

    default:
      return "Invalid number";
  }

}

console.log(checkGrade(67))
