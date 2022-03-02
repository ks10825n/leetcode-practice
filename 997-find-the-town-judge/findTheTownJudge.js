/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 *
 * There are n people in town, labeled 1 to n
 * If the town judge exists, the judge will trust nobdy
 * Everybody in town (except the judge) trusts the judge
 * There is only one person in town that satisifies
 *
 * You are given a trust array [[a, b], [a, b]] where a trusts b
 *
 * Return -1 if no town judge exists
 */


const findJudge = (n, trust) => {
  // early return
  if (trust.length === 1) return trust[0][1];
  const indegrees = new Array(n + 1).fill(0);
  const outdegrees = new Array(n + 1).fill(0);
  for (let [i, j] of trust) {
    indegrees[j] += 1;
    outdegrees[i] += 1;
  }
  for (let i = 1; i <= n; i++) {
    if (indegrees[i] === n - 1 && outdegrees[i] === 0){
      return i;
    }
  }
  return -1;
}

let n, trust;

// Test #1
n = 2;
trust = [[1, 2]];
const result1 = findJudge(n, trust);
console.log(result1);