/**
 * Given an array of distinct integers 'candidates', and a target integer,
 * return a list of all unique combinations of candidates where the chosen
 * number sum to the target.
 */

const combinationSum = (candidates, target) => {
  const result = [];
  const currCombo = [];
  const decider = (idx, target) => {
    // base case
    if (target === 0) {
      result.push(currCombo.slice());
      return;
    }
    if (target < 0) return;
    if (idx === candidates.length) return;
    currCombo.push(candidates[idx]);
    decider(idx, target - candidates[idx]);
    currCombo.pop();
    decider(idx + 1, target);

  }
  decider(0, target);
  return result;
}

let candidates, target;

// Target #1
candidates = [2, 3, 6, 7];
target = 7;

const result1 = combinationSum(candidates, target);
console.log(result1);
