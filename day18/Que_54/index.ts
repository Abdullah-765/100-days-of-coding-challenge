// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// A way to make a flexible list


function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject:any = {};
   

    dynamicObject[key] = value;
    return dynamicObject;
}


let userPreference = createObjectWithDynamicKey("theme", "dark");


console.log(userPreference);