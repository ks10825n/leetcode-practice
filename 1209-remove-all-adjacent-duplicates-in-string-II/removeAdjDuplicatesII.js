/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
      const top = stack[stack.length - 1];
      if (top?.char === s[i]) {
          top.count += 1;
      } else {
          stack.push({ char: s[i], count: 1 })
      }

      if (top?.count === k) {
          stack.pop();
      }
  }
  console.log(stack);
  let result = ''
  for (let i = 0; i < stack.length; i++) {
      const curr = stack[i];
      result += curr.char.repeat(curr.count);
  }
  // iterate through the stack and fill with 'char' by 'count' many times
  return result;
};

