/*
283. Move Zeroes
*/

var moveZeroes = function(nums) {
  let ans = [];
  let numZeros = 0;

  nums.forEach(num => {
    if (num != 0)   ans.push(num);
    else    numZeroes++;
  });

  while (numZeroes--) {
    ans.push(0);
  }

  return nums.map((elem, i, nums) => nums[i] = ans[i]);
};

//-----Test Case-----

let nums = [0,1,0,3,12]; // [1,3,12,0,0]
console.log(moveZeroes(nums));
