// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function compareStrings(str1: string, str2: string): boolean {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  return str1 === str2;
}

console.log(compareStrings("hassan", "abdullah"));

console.log(compareStrings("AbdullAh", "abduLLAH"));
