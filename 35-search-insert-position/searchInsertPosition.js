/**
 * You are given a sorted array of distinct integers and a target. Return the
 * index if the target is found. If target is not ofund, return the index
 * where it would be if it were inserted in order.
 *
 * You MUST write the algorithim with O(log n) time
 *
 * Input: A sorted array of unique integers and a target integer
 * Output: An index representing either the target index if found, or the index
 * of where it should be inserted
 * Constraint: nums array is at least length 1
 *  You must use a O(log n) time algo. -> Binary search
 * Edge: none
 */

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

let nums, target;

// Test #1
nums = [1, 3, 5, 6];
target = 5;
const result1 = searchInsert(nums, target);
console.log(result1); // 2

// Test #2
nums = [1, 3, 5, 6];
target = 2;
const result2 = searchInsert(nums, target);
console.log(result2); // 1

// Test #1
nums = [1, 3, 5, 6];
target = 7;
const result3 = searchInsert(nums, target);
console.log(result3); // 4
