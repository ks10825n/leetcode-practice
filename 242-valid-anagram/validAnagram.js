/**
 * Given two strings, s and t, return true if t is an anagram of s, and false
 * otherwise
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase.
 *
 * Find if something is an anagram by keeping track the letter occurrences.
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const letterStore = {};
  for (let i = 0; i < s.length; i++) {
    if (!letterStore[s[i]]) letterStore[s[i]] = 1;
    else letterStore[s[i]] += 1;
  };
  for (let i = 0; i < t.length; i++) {
    if (!letterStore[t[i]] || letterStore[t[i]] === 0) return false;
    else letterStore[t[i]]--;
  }
  return true;
};

let s, t;

// Test #1
s = 'anagram', t = 'nagaram';
const result1 = isAnagram(s, t);
console.log(result1); // true

// Test #2
s = 'rat', t = 'car';
const result2 = isAnagram(s, t);
console.log(result2); // false