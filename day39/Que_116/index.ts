// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

function findSeason(month: number): string {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";

    case 6:
    case 7:
    case 8:
      return "Summer";

    case 9:
    case 10:
    case 11:
      return "Fall";

    default:
      return "Input valid month";
  }
}

console.log(findSeason(11));
