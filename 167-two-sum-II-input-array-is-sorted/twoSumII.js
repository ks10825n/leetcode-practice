/**
 * Given a 1-indexed array of integers, sorted in ascending order. Find two
 * numbers that add to the specific target number
 *
 * Return the indices as an array of length 2
 * You may not use the same element twice
 * You may only use constant extra space.
 */

const twoSum = (numbers, target) => {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while(numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return [p1 + 1, p2 + 1];
};

let numbers, target;

// Test #1
numbers = [2, 7, 11, 15];
target = 9;
const result1 = twoSum(numbers, target);
console.log(result1); // [1, 2]

// Test #2
numbers = [2, 3, 4];
target = 6;
const result2 = twoSum(numbers, target);
console.log(result2); // [1, 3]

// Test #3
numbers = [-1, 0];
target = -1;
const result3 = twoSum(numbers, target);
console.log(result3); // [1, 2]