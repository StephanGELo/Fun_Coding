/****
 
 ##Leetcode Problem 20: Valid Parentheses

****/

/*********** 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. 
*************/

const isValid = s => {
  //check validity of input. Improve runtime speed.
  if (s.length === 0) return false;
  let validBrackets = [];
  let arrayOfCharacters = s.split("");
  for (let i = 0; i < arrayOfCharacters.length; i++) {
    if (arrayOfCharacters[i] === "{") validBrackets.push("}");
    else if (arrayOfCharacters[i] === "[") validBrackets.push("]");
    else if (arrayOfCharacters[i] === "(") validBrackets.push(")");
    else if (
      validBrackets.length === 0 ||
      arrayOfCharacters[i] !== validBrackets.pop()
    )
      return false;
  }
  return validBrackets.length === 0;
};

/*
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

*/

// Test Cases
let s0 = ""; // false;
let s1 = "()"; // true
let s2 = "()[]{}"; // true
let s3 = "(]"; // false
let s4 = "([)]"; // false
let s5 = "{[]}"; // true
let s6 = "}{}(){"; // false
let s7 = "({})[]"; // true
let s8 = "({{{{}}}))"; // false;

console.log("s0 : ", isValid(s0), s0); // false
console.log("s1 : ", isValid(s1), s1); // true
console.log("s2 : ", isValid(s2), s2); // true
console.log("s3 : ", isValid(s3), s3); // false
console.log("s4 : ", isValid(s4), s4); // false
console.log("s5 : ", isValid(s5), s5); // true
console.log("s6 : ", isValid(s6), s6); // false
console.log("s7 : ", isValid(s7), s7); // true
console.log("s8 : ", isValid(s7), s8); //false;
