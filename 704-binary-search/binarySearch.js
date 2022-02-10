/**
 * Given an array of integers nums, which is sorted in ascending order, and
 * an integer target, write a function to search target in nums. If target
 * exists, then return its index. Otherwise return -1.
 *
 * Write it in O(log n)
 *
 * Input: A sorted array in ascending order and an integer target
 * Output: An integer representing the index of the found target
 * Constraint: Must write in O(log n)
 *  Nums array is at least length 1
 *  All elements of nums are unique
 *  Elements may be negative
 * Edge: If target does not exist in nums, return -1.
 *
 */

const search = (nums, target) => {
  // find the midpoint of the input array
  let left = 0;
  let right = nums.length - 1;
  while (right - left >= 0) {
    let midpoint = Math.floor((right - left) / 2) + left;
    if (nums[midpoint] === target) {
      return midpoint;
    } else if (target < nums[midpoint]) {
      right = midpoint - 1;
    } else if (target > nums[midpoint]) {
      left = midpoint + 1;
    }
  }
  return -1;
};

let nums, target;

// Test #1
nums = [-1, 0, 3, 5, 9, 12];
target = 9;
const result1 = search(nums, target);
console.log(result1); // 4

// Test #2
nums = [-1, 0, 3, 5, 9, 12];
target = 2;
const result2 = search(nums, target);
console.log(result2); // -1
