/*
Source: Leetcode Problem#1
Problem: twoSum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



    Example 1:

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
Example 3:

Input: nums = [3, 3], target = 6
Output: [0, 1]


Constraints:

2 <= nums.length <= 105
    - 109 <= nums[i] <= 109
    - 109 <= target <= 109
Only one valid answer exists.

*/

/*** *SOLUTION* ***/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Brute Force Solution
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
};

//  Hash Table
var twoSum = function (nums, target) {
  var indexes = {};

  for (let i = 0; i < nums.length; i++) {
    currDifference = target - nums[i];

    if (
      indexes[currDifference] !== undefined &&
      indexes[currDifference] !== i
    ) {
      return [i, indexes[currDifference]];
    } else {
      indexes[nums[i]] = i;
    }
  }
};
