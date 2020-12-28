/****

 ##  LeetCode Problem 13: Roman To Integer

****/

/***************
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

****************/

/***** SOLUTION BELOW: *****/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let str = s;
  let count = 0;
  let lastIndex = str.length - 1;

  var symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  if (str.length === 0) {
    return count;
  }

  if (str.length === 1) {
    count += symbol[str[0]];
    return count;
  }

  if (
    (str[lastIndex] === "V" && str[lastIndex - 1] === "I") ||
    (str[lastIndex] === "X" && str[lastIndex - 1] === "I")
  ) {
    count += symbol[str[lastIndex]] - 1;
    str = str.slice(0, -1);
  } else if (
    (str[lastIndex] === "L" && str[lastIndex - 1] === "X") ||
    (str[lastIndex] === "C" && str[lastIndex - 1] === "X")
  ) {
    count += symbol[str[lastIndex]] - 10;
    str = str.slice(0, -1);
  } else if (
    (str[lastIndex] === "D" && str[lastIndex - 1] === "C") ||
    (str[lastIndex] === "M" && str[lastIndex - 1] === "C")
  ) {
    count += symbol[str[lastIndex]] - 100;
    str = str.slice(0, -1);
  } else {
    count += symbol[str[lastIndex]];
  }

  return count + romanToInt(str.slice(0, -1));
};

//Test Cases:
const s1 = "III";
const s2 = "IV";
const s3 = "IX";
const s4 = "LVIII";
const s5 = "MCMXCIV";

console.log(romanToInt(s1)); // 3
console.log(romanToInt(s2)); // 4
console.log(romanToInt(s3)); // 9
console.log(romanToInt(s4)); // 58
console.log(romanToInt(s5)); // 1994
