/**
 * Given two strings s and t, return true if s is a subsequence of t. Return
 * false otherwise.
 *
 * A subsequence is a new string that can be formed from the original string
 * by deleting some or none of the words without disturbing the relative
 * positions of the remaining characters
 *
 * ace -> abcde
 * aec -X-> is not
 *
 * split and shifting
 *
 * 2-pointer
 */

// const isSubsequence = (s, t) => {
//   s = s.split('');
//   t = t.split('');
//   while (s.length > 0 && t.length > 0) {
//     if (s[0] === t[0]) {
//       s.shift();
//     }
//     t.shift();
//   }
//   return s.length === 0;
// }

const isSubsequence = (s, t) => {
  let i = 0, j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

let s, t;
// Test #1
s = 'abc', t = 'ahbgdc';
const result1 = isSubsequence(s, t);
console.log(result1);

// Test #2
s = 'axc', t = 'ahbgdc';
const result2 = isSubsequence(s, t);
console.log(result2);

// Test #2
s = 'aaaaaa', t = 'bbaaaa';
const result3 = isSubsequence(s, t);
console.log(result3);