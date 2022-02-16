/**
 * Given two strings ransomNote and magazine, return true if ransomeNote can
 * be constructed from magazine. False otherwise
 *
 * Each letter in magazine can only be used once in ransomNote
 */

const canConstruct = (ransomNote, magazine) => {
  // declare an object to track all letters of magazine
  const availLetters = {};
  // iterate through magazine to count all letters
  for (let i = 0; i < magazine.length; i++) {
    if (!availLetters[magazine[i]]) availLetters[magazine[i]] = 1;
    else availLetters[magazine[i]] += 1;
  }
  // iterate through ransomNote
  for (let i = 0; i < ransomNote.length; i++) {
    // if current letter amount is 0 or is undefined, return false
    if (!availLetters[ransomNote[i]] || availLetters[ransomNote[i]] === 0) return false
    // if current letter exists, decrement
    else availLetters[ransomNote[i]]--;
  }
  // return true
  return true;
};

let ransomeNote, magazine;

// Test #1
ransomNote = 'a', magazine = 'b';
const result1 = canConstruct(ransomNote, magazine);
console.log(result1); // false

// Test #2
ransomNote = 'aa', magazine = 'ab';
const result2 = canConstruct(ransomNote, magazine);
console.log(result2); // false

// Test #3
ransomNote = 'aa', magazine = 'aab';
const result3 = canConstruct(ransomNote, magazine);
console.log(result3);