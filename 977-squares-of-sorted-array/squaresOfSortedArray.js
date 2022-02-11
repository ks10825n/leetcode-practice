/**
 * Given an integer array nums, sorted in a non-decreasing order (ascending)
 * return an array of the squares of each number, sorted in a non-decreasing
 * order (ascending)
 *
 * Nums array will at least be length 1. Num elements may be negative.
 * 1. Solve by squaring each array then sort.
 * 2. Can you solve with an O(n) time complexity?
 *
 * Input: A sorted array ascending that may contain negative integers
 * Output: A sorted array containing squared values of the input array
 * Constraint: Solve with O(n)
 * Edge: None
 */

// square then sort
// const sortedSquares = (nums) => {
//   const squared = nums.map((num) => {
//     return num ** 2;
//   })
//   squared.sort((a, b) => {
//     return a - b;
//   })
//   return squared;
// };

// two pointers approach
const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  const result = [];
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.unshift(nums[left] ** 2);
      left++;
    } else {
      result.unshift(nums[right] ** 2);
      right--;
    }
  }
  return result;
};

let nums;

// Test #1
nums = [-4, -1, 0, 3, 10];
const result1 = sortedSquares(nums);
console.log(result1); // [0, 1, 9, 16, 100]

nums = [-7, -3, 2, 3, 11];
const result2 = sortedSquares(nums);
console.log(result2); // [4, 9, 9, 49, 121]