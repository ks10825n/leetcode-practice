/**
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
 * Output: true
 *
 * Constraints:
 * nums.length will be at least 1
 * nums[i] can be negative
 */

// IOCE
// I - An array of integers
// O - Boolean
// C - No time or space complexity. Array will always be length of 1
// E - None

const containsDuplicate = (nums) => {
  const storage = {};
  for (let i = 0; i < nums.length; i++) {
    if (storage[nums[i]] === undefined) {
      storage[nums[i]] = 1;
    } else {
      storage[nums[i]] += 1;
      return true
    }
  }
  return false;
};

