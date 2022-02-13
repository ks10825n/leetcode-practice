/**
 * Given an array of integers, sort the array.
 *
 * List out all popular methods of sort
 *
 * Merge: Will split arrays into a left and right array recursively until
 * its base case of length 1. The sort algorithim will then compare values
 * as it is concatenating the arrays.
 * Time Complexity:
 */

const sortArray = (nums, method = 'merge') => {
  if (method === 'merge') {
    const merge = (left, right) => {
      const result = [];
      let leftIdx = 0;
      let rightIdx = 0;
      while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] <= right[rightIdx]) {
          result.push(left[leftIdx]);
          leftIdx++;
        } else {
          result.push(right[rightIdx]);
          rightIdx++;
        }
      }
      const remaining = leftIdx === left.length ? right.slice(rightIdx) : left.slice(leftIdx)
      return result.concat(remaining);
    }

    const mergeSort = (nums) => {
      // base case
      if (nums.length < 2) return nums;

      // Change to ceil to change which array contains the extra in odd lengths
      const middle = Math.floor(nums.length / 2);
      const left = nums.slice(0, middle);
      const right = nums.slice(middle);

      const sortedLeft = mergeSort(left);
      const sortedRight = mergeSort(right);

      const sorted = merge(sortedLeft, sortedRight);
      return sorted;
    }
    return mergeSort(nums);
  }
};

let nums;

// Test #1
nums = [5, 2, 3, 1];
const result1 = sortArray(nums);
console.log(result1); // [1, 2, 3, 5]

nums = [5, 1, 1, 2, 0, 0];
const result2 = sortArray(nums);
console.log(result2); // [0, 0, 1, 1, 2, 5]