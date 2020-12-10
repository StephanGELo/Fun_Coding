/*****
 * ## Leetcode Problem: 7 Reverse Integer
 *****/

/**************** 
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*****************/

const reverse = x => {
  let sign = "";
  let strNums = "";

  if (x < 0) {
    sign = "-";
    strNums = x.toString().split("").slice(1).reverse();
  } else {
    strNums = x.toString().split("").reverse();
  }

  let reversedNum = Number(sign + strNums.join(""));

  if (reversedNum < Math.pow(2, 31) * -1 || reversedNum > Math.pow(2, 31) - 1)
    return 0;

  return reversedNum;
};

// Test Cases:
const x = 123;
const x1 = -123;
const x2 = 120;
const x4 = 0;
const x5 = -120;
const x6 = 1200000;
const x7 = -120000;
const x8 = 208;

console.log(reverse(x)); // 321
console.log(reverse(x1)); // -321
console.log(reverse(x2)); // 21
console.log(reverse(x4)); // 0
console.log(reverse(x5)); // -21
console.log(reverse(x6)); // 21
console.log(reverse(x7)); // -21
console.log(reverse(x8)); // 802
