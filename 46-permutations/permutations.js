/**
 * Given an array of nums, return all the possible permutations. You can return
 * in any order
 *
 * i - an array of integers
 * o - an array of arrays of all permutations
 * c - num will be at least length 1 -> integers of nums will be unique
 * e - none
 */

const permute = (nums) => {
  const result = [];
  const numsLength = nums.length
  const recurser = (nums, perm) => {
    // base case
    if (perm.length === numsLength) {
      result.push(perm);
      return;
    }

    // recursive case -> make the perm
    for (let i = 0; i < nums.length; i++) {
      const temp = nums.splice(i, 1);
      recurser(nums, perm.concat(temp));
      nums.splice(i, 0, temp[0])
    }
  };
  recurser(nums, []);
  return result;
};

let nums;

// Test #1
nums = [1, 2, 3];
const result1 = permute(nums);
console.log(result1);

// Test #2
nums = [0,1];
const result2 = permute(nums);
console.log(result2);

// Test #3
nums = [1];
const result3 = permute(nums);
console.log(result3);