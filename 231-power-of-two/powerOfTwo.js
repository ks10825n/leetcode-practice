/**
 * Given an integer of n, return true if it is a power of two, otherwise false.
 */

const isPowerOfTwo = (n) => {
  if (n === 0) return false;
  if (n === 1) return true
  return isPowerOfTwo(n / 2);
};

let n;

n = 16;
const result1 = isPowerOfTwo(n);
console.log(result1);