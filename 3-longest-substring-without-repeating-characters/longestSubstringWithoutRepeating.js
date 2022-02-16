/**
 * Given a string s, find the length of the longest substring without repeating
 * characters
 *
 * the string s may be length 0, but will not be negative
 *
 * Using the sliding window technique with a set
 */

const lengthOfLongestSubstring = (s) => {
  let left = 0, right = 0;
  let maxLength = 0;
  const letterStorage = new Set();
  for (right; right < s.length; right++) {
    while (letterStorage.has(s[right])) {
      letterStorage.delete(s[left]);
      left++;
    }
    letterStorage.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

let s;

// Test #1
s = 'abcabcbb';
const result1 = lengthOfLongestSubstring(s);
console.log(result1); // 3