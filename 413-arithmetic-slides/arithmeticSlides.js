/**
 * @param {number[]} nums
 * @return {number}
 *
 * An integer array is called arithmetic if it is:
 * - at least 3 elements
 * - If the difference between two consecutive elements is the same
 *
 * Given the integer array nums, return the number of subarrays of nums
 *
 * Use two pointers to find all valid subarrays
 */

const numberOfArithmeticSlices = (nums) => {
  let count = 0;
  // early return
  if (nums.length < 3) return count;
  for (let l = 0; l < nums.length - 2; l++) {
    let r = l + 2;
    while (r < nums.length) {
      // check if current window is valid arithmetic array
      let isValid = true;
      let i = l;
      const initDiff = nums[i + 1] - nums[i];
      for (i; i < r; i++) {
        let currDifference = nums[i + 1] - nums[i];
        // if does not match, do nothing
        if (currDifference !== initDiff) {
          isValid = false;
          break;
        }
      }
      if (isValid) count++;
      r++;
    }
  }
  return count;
};

let nums;

// Test #1
nums = [1, 2, 3, 4];
const result1 = numberOfArithmeticSlices(nums);
console.log(result1);

// Test #2
nums = [1];
const result2 = numberOfArithmeticSlices(nums);
console.log(result2);

// Test #3
nums = [1, 2, 3, 4, 5, 6];
const result3 = numberOfArithmeticSlices(nums);
console.log(result3)