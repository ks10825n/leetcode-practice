/**
 * Given a m x n, 2D binary grid which represents a map of 1's (land) and '0's
 * water, return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * surrounded by water.
 *
 * I - grid - array of arrays
 * O - intger - number of islands
 * C - grid will be at least 1 by 1, there will be no other values in grid
 *  except 1's and 0's. Allowed to change the grid
 * E - None
 *
 * Plan
 * Iterate through the grid
 * If 1, use BFS or DFS to find the rest of the island and change to 0 values.
 *  Add 1 to the count
 * If 0
 *  do nothing
 */

const numIslands = (grid) => {
  let count = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const explorer = (i, j) => {
    // if out of bounds, return
    if (i < 0 || i >= grid.length) return;
    if (j < 0 || j >= grid[i].length) return;
    // base case, if 0, return
    if (grid[i][j] === '0') return;
    if (grid[i][j] === '1') grid[i][j] = '0';
    // recursive case
    directions.forEach((dir) => {
      return explorer(i + dir[0], j + dir[1]);

    })
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        explorer(i, j);
      }
    }
  }
  return count;
}

let grid;
// Test #1
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
const result1 = numIslands(grid);
console.log(result1);

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
const result2 = numIslands(grid);
console.log(result2);