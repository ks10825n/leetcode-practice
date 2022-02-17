/**
 * Given a string s, containing just the characters '(', ')', '{', '}', '[' and ']'
 * determine if the input string is valid
 *
 * Input string is valid if:
 * Open brackets must be closed by the same type of brackets
 * Open brackets ust be closed in the correct order
 */

const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (stack.pop() !== '(') return false
    } else if (s[i] === ']') {
      if (stack.pop() !== '[') return false
    } else if (s[i] === '}') {
      if (stack.pop() !== '{') return false
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

let s;

// Test #1
s = '()';
const result1 = isValid(s);
console.log(result1); // true

// Test #2
s = '()[]{}';
const result2 = isValid(s);
console.log(result2); // true

// Test #3
s = '(]';
const result3 = isValid(s);
console.log(result3); // false