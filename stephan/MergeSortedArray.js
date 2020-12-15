/****

 ##  LeetCode Problem 88: Merge Sorted Array

****/

/***************
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
****************/

const merge = (nums1, m, nums2, n) => {
  let index1 = m - 1;
  let index2 = n - 1;
  let current = m + n - 1;

  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] < nums2[index2]) {
      nums1[current] = nums2[index2];
      index2--;
    } else {
      nums1[current] = nums1[index1];
      index1--;
    }
    current--;
  }

  // Add remaining elements from nums2
  while (index2 >= 0) {
    nums1[current] = nums2[index2];
    index2--;
    current--;
  }

  return nums1; //Not required in leetcode compiler
};

//Test Cases:
const nums1 = [1, 2, 3, 0, 0, 0, 0],
  m1 = 3;
const nums2 = [2, 5, 6, 7],
  n1 = 4;
const nums11 = [0],
  m11 = 0;
const nums21 = [1],
  n11 = 1;

console.log(merge(nums1, m1, nums2, n1)); // Answer: [1,2,2,3,5,6, 7]
console.log(merge(nums11, m11, nums21, n11)); // Answer: [1];
