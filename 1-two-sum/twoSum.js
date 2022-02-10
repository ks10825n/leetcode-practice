/**
 * Given an array of integers nums and an integer target, return indices of
 * the two numbers such that they add up to target.
 *
 * Assume that input would have exactly one solution, and you may not use the
 * same element twice
 *
 * Inputs: An array with at least length 2
 * Output: An array representing indices of the input
 * Constraint: Come up with algorithim that is < than O(n2) time
 * Edge: None
 */

// On2 strategy is to have an two loops, one to track 1st number, the second
// to see if the 2nd number will add

// An optimal strategy is to have one loop, subtract from the target, and if
// you find an element that is exact, then that is the 2nd number

// brute
// const twoSum = (nums, target) => {
//   let result;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (j === i) {
//         continue;
//       }
//       if (nums[i] + nums[j] === target) {
//         result = [i, j];
//       }
//     }
//   }
//   return result
// }

// more optimal
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

const nums1 = [2, 7, 11, 15];
const target1 = 9;
const result1 = twoSum(nums1, target1); // [0, 1];
console.log(result1);

const nums2 = [3, 2, 3];
const target2 = 6;
const result2 = twoSum(nums2, target2); // [0, 2];
console.log(result2);

const nums3 = [3, 3];
const target3 = 6;
const result3 = twoSum(nums3, target3); // [0, 1];
console.log(result3);
