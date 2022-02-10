/**
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * subarray is a contigious part of an array
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum
 *
 * Input: nums = [1]
 * Output: 1
 *
 * Input: nums = [5, 4, -1, 7, 8]
 * Output: 23
 *
 * Constraints
 * The nums array will contain at least one element
 * The nums element may be negative
 */

/**
 * Input - Array
 * Output - Integer (largest sum of the contigious subarray)
 * Constraints - No time/space, array length is at least one, consider negative numbers as well
 * Edge - None
 */

// const maxSubArray = (nums) => {
//   // keep track of the largest sum
//   let largestSum = -Infinity;
//   // create an outer loop
//   for (let i = 0; i < nums.length; i++) {
//     // create an inner loop that starts on the next index
//     // create the subArray starting at i
//     let subArray = [nums[i]];
//     let sum = nums[i];
//     // check before j as each element can be a subarray
//     if (sum > largestSum) {
//       largestSum = sum;
//     }

//     for (let j = i + 1; j < nums.length; j++) {
//       // for the next iteration, concat to the previous array, and calculate the sum.
//       subArray = subArray.concat(nums[j])
//       sum += nums[j];
//       // if sum is largest than latest, replace
//       if (sum > largestSum) {
//         largestSum = sum;
//       }
//     }
//   }
//   // return the sum
//   return largestSum;
// };

// efficient
const maxSubArray = (nums) => {
  let largestSum = nums[0];
  let current = Math.max(largestSum, 0);

  for (let i = 1; i < nums.length; i++) {
    current += nums[i];
    largestSum = Math.max(largestSum, current);
    current = Math.max(current, 0);
  }

  return largestSum;
}

const test = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(test); // 6

const test2 = maxSubArray([1])
console.log(test2); // 1

const test3 = maxSubArray([5, 4, -1, 7, 8]);
console.log(test3); // 23

const test4 = maxSubArray([-2,1])
console.log(test4); // -1
