/****

 ##  LeetCode Problem 453: Minimum Moves To Equal Array Elements

****/

/***************
 * Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 ****************/

/***** SOLUTION BELOW: *****/
var minMoves = nums => {
  let count = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  console.log(nums);

  for (let i = nums.length - 1; i > 0; i--) {
    count += nums[i] - nums[0];
  }
  return Math.abs(count);
};

const arr1 = [3, 2, 1];
const arr2 = [1, 1, 2147483647];
const arr3 = [-2147483648, -1];
const arr4 = [29, 2, 22, 58, 69, 67, 93, 56, 11, 42];

console.log(minMoves(arr1)); // 3
console.log(minMoves(arr2)); // 2147483646
console.log(minMoves(arr3)); //2147483647
console.log(minMoves(arr4)); //429
