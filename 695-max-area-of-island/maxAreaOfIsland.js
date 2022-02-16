/**
 * You are given a m x n binary matrix, grid. An island is a group of 1's
 * connected 4-directionally (horizontal or vertical). You may assume
 * all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value of 1 in the island
 *
 * Return the maximum area of an island in grid. If there is no island, return
 * 0
 */

const maxAreaOfIsland = (grid) => {
  // declare maxArea
  let maxArea = -Infinity;

  // declare island traversal
  const islandTraversal = (i, j) => {
    // define an area at 0;
    let area = 0;
    // edge case, if i, j is out of bounds, return 0
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return 0;
    // base case -> if 0, return area of 0
    if (grid[i][j] === 0) return 0;
    // recursive case -> if 1,
    // change current island to 0
    grid[i][j] = 0;
    // increment area by 1
    // increment area by resolved area from direction (top, right, bottom, left)
    area += 1;
    area += islandTraversal(i + 1, j);
    area += islandTraversal(i - 1, j);
    area += islandTraversal(i, j + 1);
    area += islandTraversal(i, j - 1);
    // return area
    return area;
  }


  // iterate through grid in a nested loop
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if find an island
      let islandArea = 0;
      if (grid[i][j] === 1) {
        // traverse the island with (i, j) -> should resolve to total area
        islandArea = islandTraversal(i, j);
      }
      maxArea = Math.max(maxArea, islandArea);
      // after traversal, find max of new island traversed or old max area
    }
  }
  // return maxArea
  return maxArea;
};

let grid

// Test #1
grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
const result1 = maxAreaOfIsland(grid);
console.log(result1); // 0

// Test #2
grid =
[[0,0,1,0,0,0,0,1,0,0,0,0,0]
,[0,0,0,0,0,0,0,1,1,1,0,0,0]
,[0,1,1,0,1,0,0,0,0,0,0,0,0]
,[0,1,0,0,1,1,0,0,1,0,1,0,0]
,[0,1,0,0,1,1,0,0,1,1,1,0,0]
,[0,0,0,0,0,0,0,0,0,0,1,0,0]
,[0,0,0,0,0,0,0,1,1,1,0,0,0]
,[0,0,0,0,0,0,0,1,1,0,0,0,0]];
const result2 = maxAreaOfIsland(grid);
console.log(result2); // 6