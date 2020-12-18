/****

 ##  LeetCode Problem 14: Longest Common Prefix

****/

/***************
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
 ****************/

/***** SOLUTION BELOW: *****/
/**
 * @param {string[]} strs
 * @return {string}
 */
// input : an array of strings
// output : a string of longest common prefix

// edge cases:
// 0 common prefixes
// not all words have the same prefixes

//Solution 1
const longestCommonPrefix = strs => {
  let commonPrefix = "";
  if (strs.length === 0) return "";

  let comparisonWord = strs[0];
  let comparisonIndex = 0;

  for (let comparisonLetter of comparisonWord) {
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let currentLetter = currentWord[comparisonIndex];
      if (
        comparisonLetter !== currentLetter ||
        comparisonIndex > comparisonWord.length
      ) {
        return commonPrefix;
      }
    }
    comparisonIndex++;
    commonPrefix += comparisonLetter;
  }

  return commonPrefix;
};

//Solution 2
const longestCommonPrefix = strs => {
  if (strs === null || strs.length === 0) {
    return "";
  }

  for (i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (j = 0; j < strs.length; j++) {
      if (i === strs[j].length || char !== strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};
