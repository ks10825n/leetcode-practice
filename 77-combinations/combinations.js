/**
 * Given two integers n and k, return all possible combinations of k numbers
 * out of the range [1, n]
 *
 * Input:
 *  n find all combinations of 1 to n of length k
 */

const combine = (n, k) => {
  const result = [];
  const comb = (start, curr) => {
    if (curr.length === k) {
      result.push([...curr]);
      return;
    };

    for (let i = start; i <= n; i++) {
      curr.push(i);
      comb(i + 1, curr);
      curr.pop();
    }
  };
  comb(1, []);
  return result;
};

let n, k

// Test #1
n = 4, k = 2;
const result1 = combine(n, k);
console.log(result1);