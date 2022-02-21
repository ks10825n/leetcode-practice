/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can climb 1 or 2 steps. How many distinct ways can you climb
 * to the top
 *
 * The DP methodology will work beacuse you are keeping track of the amount of
 * ways to get to a step. Since you can only take 1 or 2 steps, the only way
 * to get to n step is to come from 1 or 2 steps below, then take your 1 to
 * 2 step. Thus, the ways to get to n step is the sum of step[i -1] & step[i -2]
 *
 * n - steps
 * 1 -> 1
 * 2 -> 1, 1
 *   -> 2
 * 3 -> 1, 2
 *   -> 1, 1, 1
 *   -> 2, 1
 * 4 -> 1, 2, 1
 *   -> 1, 1, 1, 1
 *   -> 2, 1, 1
 *   -> 1, 1, 2
 *   -> 2, 2
 */

const climbStairs = (n) => {
  let steps = new Array(n + 1);
  steps[1] = 1, steps[2] = 2;
  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i-1] + steps[i-2];
  }
  console.log(steps);
  return steps[n]
}

let steps;

steps = 5;
const result1 = climbStairs(steps);
console.log(result1);