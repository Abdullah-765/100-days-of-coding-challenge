// Find the index of "Banana" in an array of fruits and replace it with "Mango".

function removeBanana(array: string[]): void {
  let bananaIndex = array.indexOf("Banana");

  if (bananaIndex !== -1) {
    array[bananaIndex] = "mango";
  }
}

let fruits = ["Orange", "Pineapple", "Banana", "Apple"];

removeBanana(fruits);

console.log(fruits);
