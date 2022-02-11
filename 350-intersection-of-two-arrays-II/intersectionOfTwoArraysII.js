/**
 * Given two integer arrays nums1 and num2, return an array of their
 * intersection. Each element in the result must appear as many times as it
 * appeared in both arrays. They can be returned in any order
 *
 * nums1 and nums2 length is at least 1
 * nums1 and nums2 elements are not negative, but is inclusive of 0.
 *
 * Follow up:
 * What if given arrays are sorted? Can the algorithim be optimized?
 * What if nums1 size is smaller than nums2?
 * What if num2 elemnts are stored on a disk, and the memory is limited that
 *  you cannot load all elements into the memory at once. (Do it one at a time)
 */

/**
 * Brute Force -> this will load all arrays into memory.
 * Have a result array. Iterate through nums1 and loop through nums2. If equal,
 *  push to result and make outer loop continue. O(m * n)
 *
 * Hash or Map -> this will work if nums2 cannot be loaded.
 * Loop through nums1 and create a map or object to show all elements that exist
 * Loop through nums2 and if it exists in object, push to result, then return result
 * O(m + n)
 *
 * If sorted already -> this will work if both entirety of nums1 and nums2 cannot be loaded
 * While both nums1 and nums2 has elements, check if 0-th element are the same.
 * If yes, push to result, then shift out both.
 * If no, check which element is larger. If nums1 element is larger, shift out
 *  nums2 and vice-versa.
 *
 */

const intersect = (nums1, nums2) => {
  const result = [];
  const count = {};
  for (let i = 0; i < nums1.length; i++) {
    (!count[nums1[i]]) ? count[nums1[i]] = 1 : count[nums1[i]] += 1;
  }
  for (let j = 0; j < nums2.length; j++) {
    if (count[nums2[j]] > 0) {
      result.push(nums2[j]);
      count[nums2[j]] -= 1;
    }
  }
  return result;
};

let nums1, nums2;

// Test #1
nums1 = [1, 2];
nums2 = [2, 1];
const result1 = intersect(nums1, nums2);
console.log(result1); // [2, 1];

// Test #2
nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
const result2 = intersect(nums1, nums2);
console.log(result2); // [4, 9] or [9, 4];
