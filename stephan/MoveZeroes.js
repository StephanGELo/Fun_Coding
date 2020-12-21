/****

 ##  LeetCode Problem 283 : Move Zeroes

****/

/***************
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 ****************/

/***** SOLUTION BELOW: *****/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let firstZeroIndex = nums.length;
  let zeroIndex = 0;

  const move = (nums, firstZeroIndex, zeroIndex) => {
    if (zeroIndex + 1 === firstZeroIndex) {
      return nums;
    }
    if (nums[zeroIndex] === 0) {
      nums.push(nums[zeroIndex]);
      nums.splice(zeroIndex, 1);
      firstZeroIndex--;
    } else {
      zeroIndex++;
    }
    move(nums, firstZeroIndex, zeroIndex);
  };
  move(nums, firstZeroIndex, zeroIndex);
};
