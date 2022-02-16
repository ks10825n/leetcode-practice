/**
 * Given a string 's', find the first non-repeating character in it and return
 * its index. If it does not exist, return -1.
 */

const firstUniqChar = (s) => {
  // declare a map to hash indexes of the string
  // declare another map to store duplicate letters
  const uniqChars = new Map();
  const duplChars = new Map();
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // if it does not exist in either map
    // add it to the map with the index
    if (!uniqChars.has(s[i]) && !duplChars.has(s[i])) uniqChars.set(s[i], i);
    // if it does exist in map, but not in duplicate
    // remove from current, and add to duplicate
    else if (uniqChars.has(s[i]) && !duplChars.has(s[i])) {
      uniqChars.delete(s[i]);
      duplChars.set(s[i], i);
    }
    // if it does not exist in map, but exists in duplicate
    // update index -> can just continue
    else if (!uniqChars.has(s[i]) && duplChars.has(s[i])) duplChars.set(s[i], i);
  }

  // if map is empty return -1
  if (uniqChars.size === 0) return -1;
  // else return the smallest value of the map.
  else return uniqChars.values().next().value;
};

let s;

// Test #1
s = 'leetcode';
const result1 = firstUniqChar(s);
console.log(result1); // 0;

// Test #2
s = 'loveleetcode';
const result2 = firstUniqChar(s);
console.log(result2); // 2

// Test #2
s = 'aabb';
const result3 = firstUniqChar(s);
console.log(result3); // -1