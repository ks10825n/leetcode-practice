/**
 *
 * @param {string} str1 will contain wildcard from 0-9 as a string
 * @param {string} str2
 * @returns {boolean}
 *
 * Space Complexity
 * O(n) -> linear space because the algo will store str1 and str2 depending on the size
 *
 * Time Complexity - Two Pointers will allow you to skip. Would be the shortest length
 * n -> is the length of str2
 * m -> is the number wildcard
 * O(n)
 *
 * Time Complexity - Iterate over arrays, and fill array with asterisks, and check again
 * O(m x n) * 2
 *
 */

const isSameString = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  const longestString = Math.max(str1.length, str2.length);
  while (pointer1 < longestString || pointer2 < longestString) {
    const curr = str1[pointer1];
    if (!Number.isNaN(Number(curr))) {
      pointer2 += Number(curr);
    } else {
      if (curr !== str2[pointer2]) {
        return false;
      }
      pointer2++;
    }
    pointer1++;
  }

  if (Number(str1[str1.length - 1])) return false;
  return true;
}

let result;

result = isSameString('rokt5', 'rokt')
console.log(result) // false
result = isSameString('rokt0', 'rokt')
console.log(result) // true
result = isSameString('r2t', 'rokt');
console.log(result) // true
result = isSameString('00', 'rokt');
console.log(result) // false
result = isSameString('r9', 'rokt');
console.log(result) // false