// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedItems = ["potato", 2,4,6, "tomato", "carrot", 12]

let filteredItems = mixedItems.filter(items => typeof items === "string")

console.log(filteredItems)


