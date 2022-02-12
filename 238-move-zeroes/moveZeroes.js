/**
 * Given an integer array nums, move all 0's to the end.
 *
 * Do this in-place without making a copy of the array
 */

const moveZeroes = (nums) => {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pointer] = nums[i];
      nums[i] = pointer === i ? nums[i] : 0;
      pointer++;
    }
  }
  console.log(nums)
};

let nums;

// Test #1
nums = [0, 1, 0, 3, 12];
const result1 = moveZeroes(nums);
console.log(result1); // [1, 3, 12, 0, 0]

// Test #2
nums = [0];
const result2 = moveZeroes(nums);
console.log(result2); // [0]