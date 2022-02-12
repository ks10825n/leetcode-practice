/**
 * You should reshape a m x n matrix into a new one with a different size
 * r x c and keeping its original data.
 *
 * You are given a m x n matrix called 'mat', and two integers r and c,
 * representing the number of rows and cols of the reshaped matrix.
 * The reshape matrix should be filled with all elements of the original by
 * the same row-traversing order.
 *
 * If reshape operation is possible, output new reshape. if not, output the
 * original matrix
 */

const matrixReshape = (mat, r, c) => {
  const newMatrixSize = r * c;
  const oldMatrixSize = mat.length * mat[0].length;
  if (newMatrixSize !== oldMatrixSize) {
    return mat;
  }

  const newMatrix = Array.from({ length: r }, () => new Array(c).fill(0))
  const maxRowIdx = r - 1;
  const maxColIdx = c - 1;
  let curRowIdx = 0;
  let curColIdx = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      newMatrix[curRowIdx][curColIdx] = mat[i][j];
      if (curColIdx < maxColIdx) {
        curColIdx++;
      } else if (curColIdx === maxColIdx && curRowIdx < maxRowIdx) {
        curColIdx = 0;
        curRowIdx ++;
      }
    }
  }
  return newMatrix;
};

let mat, r, c;

// Test #1
mat = [[1, 2], [3, 4]];
r = 1;
c = 4;
const result1 = matrixReshape(mat, r, c);
console.log(result1); // [[1, 2, 3, 4]];

// Test #2 -> Not possible
mat = [[1, 2], [3, 4]];
r = 2;
c = 4;
const result2 = matrixReshape(mat, r, c);
console.log(result2); // [[1, 2], [3, 4]];

// Test #3
mat = [[1, 2, 3, 4], [5, 6, 7, 8]];
r = 4;
c = 2;
const result3 = matrixReshape(mat, r, c);
console.log(result3); // [[1, 2], [3, 4], [5, 6], [7, 8]]