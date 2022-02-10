/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively.
 *
 * nums 1 and nums 2 are sorted in a non-decreasing order (They are ascending)
 * The function should NOT return a sorted array, but actually be stored inside
 * nums 1. Nums1 will have a length of m + n.
 * m will denote the elements that should be merged
 * the last n-elements will be set to 0 and should be ignored. Therefore nums2
 * will have a lenght of n.
 *
 * Input: Two sorted arrays, m will represent length to sort in nums1, n will represent length of nums2
 * Output: Return the merged nums1
 * Constraint - m can be 0, m + n, will be at least 1
 *  Come up with an algorithim that is O(m+n)
 * Edge: If m or n is 0, we can define edge cases
 */

// brute force O(n2)
// splice nums2 into nums1, then do a quicksort
// const quickSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   let pivot = arr[Math.floor(arr.length / 2)], left = [], right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === Math.floor(arr.length / 2)) continue;
//     if (arr[i] < pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }
//   left = quickSort(left);
//   right = quickSort(right);
//   const sorted = left.concat(pivot, right);
//   return sorted;
// }

// const merge = (nums1, m, nums2, n) => {
//   nums1 = nums1.slice(0, m).concat(nums2);
//   nums1 = quickSort(nums1);
//   return nums1
// };

// 2-pointers
const merge = (nums1, m, nums2, n) => {
  let left = m - 1;
  let right = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    // if right is less than 0 at this point,
    // remaining of num1 is sorted
    if (right < 0) {
      break;
    }

    if (nums1[left] > nums2[right]) {
      nums1[i] = nums1[left];
      left--;
    } else {
      nums1[i] = nums2[right];
      right--;
    }
  }
  return nums1;
}

let nums1, m, nums2, n;

// Test 1
nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;
const result1 = merge(nums1, m, nums2, n);
console.log(result1); // [1, 2, 2, 3, 5, 6]

// Test 2
nums1 = [1];
m = 1;
nums2 = [];
n = 0;
const result2 = merge(nums1, m, nums2, n);
console.log(result2); // [1]

// Test 3
nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
const result3 = merge(nums1, m, nums2, n);
console.log(result3); // [1]

// Test 4
nums1 = [4, 5, 6, 0, 0, 0];
m = 3;
nums2 = [1, 2, 3];
n = 3;
const result4 = merge(nums1, m, nums2, n);
console.log(result4); // [1, 2, 2, 3, 5, 6]