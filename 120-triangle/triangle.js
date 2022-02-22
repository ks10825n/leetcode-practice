/**
 * Given a triangle array, return the minimum sum of a path from top-bottom
 * Between each row, if you are on idx 1 on current row, you may either move to
 * either idx i or i + 1 on the next row
 */

const minimumTotal = (triangle) => {
  for (let i = triangle.length-2; i >= 0; i--)
    for (let j = 0; j < triangle[i].length; j++)
      // start from 2nd to last row
      // for every element, find the min from the row below and next add to yourself
      triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
  return triangle[0][0]
};

let triangle;

// Test #1
triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
const result1 = minimumTotal(triangle);
console.log(result1); // 11