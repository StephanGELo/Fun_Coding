/****

 ##  LeetCode Problem 680: Valid Palindrome II

****/

/***************
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:

Input: "aba"
Output: True
Example 2:

Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
 ****************/

/***** SOLUTION BELOW: *****/
/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return (
        isPalindrome(s, leftPointer + 1, rightPointer) ||
        isPalindrome(s, leftPointer, rightPointer - 1)
      );
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};

const isPalindrome = (str, pointerOne, pointerTwo) => {
  while (pointerOne < pointerTwo) {
    if (str[pointerOne] !== str[pointerTwo]) {
      return false;
    }
    pointerOne++;
    pointerTwo--;
  }

  return true;
};

//Test Cases
const s1 = "aba";
const s2 = "abca";
const s3 = "abcda";
const s4 = "tcaac";
const s5 = "cbbcc";

console.log(validPalindrome(s1)); // true
console.log(validPalindrome(s2)); // true
console.log(validPalindrome(s3)); // false
console.log(validPalindrome(s4)); // true
console.log(validPalindrome(s5)); // true
