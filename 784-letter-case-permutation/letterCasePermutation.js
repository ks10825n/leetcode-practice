/**
 * Given a string s, transform every letter individually to be lowercase
 * or uppercase to create another string.
 *
 * Return a list of all possible strings we could create. Return the output
 * in any order
 */

const letterCasePermutation = (s) => {
  const result = [];
  s = s.toLowerCase();
  const recurser = (s, i, perm) => {
    if (perm.length === s.length) {
      result.push(perm);
      return;
    }

    while (i < s.length) {
      let temp = perm;

      perm += s[i];
      recurser(s, i + 1, perm)

      if (isNaN(Number(s[i]))) {
        perm = temp;
        perm += s[i].toUpperCase();
        recurser(s, i + 1, perm);
      }
      break;
    }
  };
  recurser(s, 0, '');
  return result
};

let s;

// Test #1
s = 'a1b2';
const result1 = letterCasePermutation(s);
console.log(result1);

s = '3z4';
const result2 = letterCasePermutation(s);
console.log(result2);

s = '3';
const result3 = letterCasePermutation(s);
console.log(result3);