/**
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the
 * answer in any order
 *
 * A mapping od igit to letters just lik eon the telephone is given below. Note
 * that 1 does not map to any letters
 *
 * I - a string of digits
 * O - An array of words
 * C - digits is at least 4 length
 *   - each digit is from 2-9. There will never be a digit 1
 * E - If digit is empty. Do not need to consider if 1
 */

const letterCombinations = (digits) => {
  if (digits === null || digits.length === 0) return [];

  const bank = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const result = [];
  const recurser = (i, word) => {
    // base case
    if (i === digits.length) {
      result.push(word);
      return;
    };
    // recursive case

    for (letter of bank[digits[i]]) {
      recurser(i + 1, word + letter);
    }
  }
  recurser(0, '');
  return result;
}

let digits;
// Test #1
digits = '23';
const result1 = letterCombinations(digits);
console.log(result1);