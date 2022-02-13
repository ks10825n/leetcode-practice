/**
 * Write an efficient algorithim that searches for the target in a m x n matrix
 * The matrix will have the following properties:
 *  - Integers in each row are sorted in ascending order from left to right
 *  - The first integer of each row is greater than the last integer of the
 *    previous row
 */

const searchMatrix = (matrix, target) => {
  const findRow = (matrix, target) => {
    if (matrix.length < 2) {
      return matrix[0]
    }
    // find midpoint of matrix
    let start = 0;
    let end = matrix.length - 1;
    while (start < end) {
      let midMatrix = Math.ceil((end - start) / 2) + start;
      console.log(start, midMatrix, end)
      if (target >= matrix[midMatrix][0] && target <= matrix[midMatrix][matrix[midMatrix].length - 1]) {
        return matrix[midMatrix]
      } else if (target < matrix[midMatrix][0] && midMatrix === 1) {
        return matrix[0];
      } else if (target > matrix[midMatrix][matrix[midMatrix].length - 1] && midMatrix === matrix.length - 1) {
        return matrix[matrix.length - 1];
      } else if (target < matrix[midMatrix][0] && midMatrix === matrix.length - 1) {
        return matrix[matrix.length - 1];
      } else if (midMatrix === start || midMatrix === end) {
        return [false];
      } else if (target < matrix[midMatrix][0]) {
        end = midMatrix;
      } else {
        start = midMatrix;
      }
    }
  }

  const foundRow = findRow(matrix, target);

  return foundRow.includes(target);

  // if needs to be more efficient, implement binary search on the row
};

let matrix, target;

// Test #1
matrix =
[[1,3,5,7]
,[10,11,16,20]
,[23,30,34,60]];
target = 3;
const result1 = searchMatrix(matrix, target);
console.log(result1); // true

// Test #2
matrix =
[[1,3,5,7]
,[10,11,16,20]
,[23,30,34,60]];
target = 13;
const result2 = searchMatrix(matrix, target);
console.log(result2); // false

// Test #3
matrix =
[[1], [3], [5]];
target = 2;
const result3 = searchMatrix(matrix, target);
console.log(result3); // false

// Test #4
matrix =
[[-8,-7,-6,-6,-6]
,[-5,-4,-3,-1,-1]
,[0,0,1,3,3]
,[5,5,6,6,6]
,[7,8,8,10,12]
,[13,15,17,17,18]
,[20,20,20,20,20]
,[22,22,22,22,23]];
target = 4;
const result4 = searchMatrix(matrix, target);
console.log(result4);