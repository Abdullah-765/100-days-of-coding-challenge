// Generate a random integer between 1 and 10.

function randomInteger(): number {
  let number = Math.floor(Math.random() * 10) + 1;

  return number;
}

console.log(randomInteger());
