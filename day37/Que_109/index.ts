// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

let currentTime = new Date();

let currentHour = currentTime.getHours();

if (currentHour <= 12 && currentHour >= 4) {
  console.log("Good moring");
} else {
  console.log("It is not moring");
}
