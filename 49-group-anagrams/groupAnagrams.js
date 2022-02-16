/**
 * Given an array of strings, strs, group the anagrams together. You can return
 * the answer in any order
 *
 * An Anagram is a word or phrase formed by rearranging the letters of
 * a different word or phrase, using all origina letters exactly once.
 */

const groupAnagrams = (strs) => {
  const map = new Map();
  const result = [];
  for (strIdx in strs) {
    const sorted = strs[strIdx].split('').sort().join('')
    console.log(sorted);
    if (!map.has(sorted)) {
      const resultIdx = map.size;
      map.set(sorted, resultIdx);
      result[resultIdx] = [strs[strIdx]];
    } else {
      const resultIdx = map.get(sorted);
      result[resultIdx].push(strs[strIdx]);
    }
  }
  return result;
};

let strs;

// Test #1
strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const result1 = groupAnagrams(strs);
console.log(result1); // [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]