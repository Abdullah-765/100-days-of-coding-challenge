// Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function calculateDaysUntilNewYear(): number {
  const now = new Date();

  const newYear = new Date(now.getFullYear() + 1, 0, 1);

  const diff = newYear.getTime() - now.getTime();

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return days;
}

console.log(calculateDaysUntilNewYear() + "days until new year");
