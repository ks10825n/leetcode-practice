/**
 * Each house has certain amount of money stashed. You cannot break into
 * two houses in a row. What is the max amount of money you can rob without
 * hitting two houses in a row?
 */

const rob = (nums) => {
  if (nums.length === 1) return nums[0]
  const stash = new Array(nums.length);
  stash[0] = nums[0];
  stash[1] = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    stash[i] = Math.max(stash[i-1], stash[i-2] + nums[i]);
  }
  console.log(stash)
  return stash[stash.length - 1]
}

let nums;

// Test #1
nums = [2, 1, 1, 4];
const result1 = rob(nums);
console.log(result1); // 6

// Test #2
nums = [0];
const result2 = rob(nums);
console.log(result2); // 6