/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1
 * otherwise false.
 */

const checkInclusion = (s1, s2) => {
  // find all occurences of letters in s1
  const storage = {};
  for (let i = 0; i < s1.length; i++) {
    if (!storage[s1[i]]) storage[s1[i]] = 1;
    else storage[s1[i]] += 1;
  };

  // create a sliding window
  let left = 0, right = 0;
  let permLength = s1.length;
  while (right < s2.length) {
    if (storage[s2[right]] > 0) {
      permLength--;
    }
    storage[s2[right]]--;
    right++;
    if (permLength === 0) return true;
    if (right - left === s1.length) {
      if (storage[s2[left]] >= 0) {
        permLength++;
      }
      storage[s2[left]]++;
      left++;
    }
  }
  return false;
};

let s1, s2;

// // Test #1
// s1 = 'ab';
// s2 = 'eidbaooo';
// const result1 = checkInclusion(s1, s2);
// console.log(result1); // true

// // Test #2
// s1 = 'ab';
// s2 = 'eidboaoo';
// const result2 = checkInclusion(s1, s2);
// console.log(result2);

// Test #3
s1 = 'adc';
s2 = 'dcda';
const result3 = checkInclusion(s1, s2);
console.log(result3);