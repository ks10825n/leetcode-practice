/**
 * You are a PM. The last version of the product failed quality check. Since
 * each subsequent version developed is based off of the previous, all the
 * versions after the bad are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n], you want to find prometheseus.
 *
 * You are given an API bool isBadVersion(version), which returns whether
 * version is bad. You should minimize the number of calls to the API.
 *
 */

// brute force would be to use a for loop and iterate until the API gives you
// false statement

// Optimized is to use a binary search
// there will always be a version 1 at index 0.
// the first bad version could be version 1
const isBadVersion = (version) => {
  if (version >= bad) {
    return true;
  }
  return false;
}

const solution = (isBadVersion) => {
  return (n) => {
    // return the first bad version
    let left = 1;
    let right = n;
    let midpoint;
    while (right - left >= 0) {
      midpoint = Math.floor((right - left) / 2) + left;
      if (isBadVersion(midpoint) && !isBadVersion(midpoint - 1)) {
        return midpoint;
      // if not bad version, need to set left to current midpoint and check later versions
      } else if (!isBadVersion(midpoint)) {
        left = midpoint + 1;
      // if bad version, and the version prior is also bad, need to check earlier versions
      } else {
        right = midpoint - 1;
      }
    }
  };
};

let n, bad;
// Test #1
n = 5;
bad = 4;
const result1 = solution(isBadVersion)
console.log(result1(n)); // 4
