/**
 * Given an integer, return the first row of Pascal's triangle
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 */

const generate = (numRows) => {
  // generate a matrix with a pascal triangle pattern with initial values as 1
  let colCounter = 0;
  const triangle = Array.from({ length: numRows }, () => {
    colCounter++;
    return new Array(colCounter).fill(1);
  })

  // if less than 2, no need to traverse to fill out
  if (numRows <= 2) {
    return triangle;
  }

  // start at index 2
  for (let i = 2; i < triangle.length; i++) {
    // start at index 1 and end at 2nd to last index
    for (let j = 1; j < triangle[i].length - 1; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  return triangle;
};

let numRows;

// Test #1
numRows = 5;
const result1 = generate(numRows);
console.log(result1); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// Test #2
numRows = 1;
const result2 = generate(numRows);
console.log(result2); // [[1]]