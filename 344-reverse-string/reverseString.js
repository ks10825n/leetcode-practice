/**
 * Write a function that reverses a string. The input string is given as the
 * array 's'.
 *
 * Do this in-place with O(1) space.
 */

const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    left++;
    right--;
  }
  return s;
};

let s;

// Test #1
s = ['h', 'e', 'l', 'l', 'o'];
const result1 = reverseString(s);
console.log(result1); // ['o', 'l', 'l', 'e', 'h']