/**
 * Given an array, rotate the array to the right by k steps.
 *
 * k will be non-negative (inclusive of 0)
 * nums will be at least length 1
 * elements in nums can be negative.
 *
 * 3 Different Methods
 * Try to do it in O(1) -> do it in-place
 *
 * 1. Take last element and move it to the front k amount of times
 * 2. 'Move' whole array k indexes over to the right. Replace the front extra with tail at the end.
 */

// const rotate = (nums, k) => {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// };

const rotate = (nums, k) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
}

let nums, k;

// Test #1
nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
const result1 = rotate(nums, k);
console.log(result1); // [5, 6, 7, 1, 2, 3, 4];

// Test #2
nums = [-1, -100, 3, 99];
k = 2;
const result2 = rotate(nums, k);
console.log(result2); // [3, 99, -1, -100];