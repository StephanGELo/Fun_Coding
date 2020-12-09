/*****
 * ## Leetcode Problem No. 415
 *****/

/**************** 
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

***************/

const addStrings = (num1, num2) => {
  let index1 = num1.length - 1;
  let index2 = num2.length - 1;
  let digits = [];
  let carry = 0;

  while (index1 >= 0 || index2 >= 0) {
    let digit1 = parseInt(num1[index1]) >= 0 ? parseInt(num1[index1]) : 0;
    let digit2 = parseInt(num2[index2]) >= 0 ? parseInt(num2[index2]) : 0;
    let add = (digit1 + digit2 + carry).toString();

    if (index1 <= 0 && index2 <= 0) {
      digits.push(add);
    } else {
      digits.push(add[add.length - 1]);
    }

    carry = parseInt(add / 10);
    index1--;
    index2--;
  }

  let sum = digits.reverse().join("");
  return sum;
};

// Test Cases
const str1 = "1",
  str12 = "2";
const str2 = "12",
  str22 = "25";
const str3 = "15",
  str32 = "27";
const str4 = "5099",
  str42 = "3999";
const str5 = "1",
  str52 = "9";
const str6 = "9333852702227987",
  str62 = "85731737104263";
const str7 = "9",
  str72 = "99";

console.log(addStrings(str1, str12)); // 3
console.log(addStrings(str2, str22)); // 37
console.log(addStrings(str3, str32)); // 42
console.log(addStrings(str4, str42)); // 9098
console.log(addStrings(str5, str52)); // 10
console.log(addStrings(str6, str62)); // 9419584439332250
console.log(addStrings(str7, str72)); // 108
