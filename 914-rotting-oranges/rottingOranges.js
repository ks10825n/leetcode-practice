/**
 * You are given a m x n grid, where each cell can have one of three values
 * 0 - empty cell
 * 1 - representing a fresh orange
 * 2 - representing a rotten orange
 *
 * Every minute, a fresh orange that is 4-directionalyl adj to a rotten orange
 * becomes rotten
 *
 * Return the minimum number of minutes that will require all fresh oranges
 * turn rotten. If this is impossible, return -1.
 *
 * BFS
 * 1. Create a queue
 * 1a. Create a minTime = 0
 * 2. Iterate through the matrix
 *  a. For every rotten orange, push to the queue, position and time
 * 3. While the queue is not empty
 *  a. Shift the first element
 *  b. If current orange is fresh
 *      Set minTime to time
 *      Change position to 2 to represent rotten
 *  c. Define an array for each direction
 *  d. Loop through the array
 *      If the direction is valid within matrix
 *        And if direction is a fresh orange
 *          Add to queue
 * 4. After queue is empty,
 *      Iterate through the matrix, if there are still fresh oranges
 *        return -1
 *      else return the minTime
 */

const orangesRotting = (grid) => {
  const queue = [];
  let minTime = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) queue.push({ position: [i, j], time: 0 })
    }
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (grid[curr.position[0]][curr.position[1]] === 1) {
      minTime = curr.time;
      grid[curr.position[0]][curr.position[1]] = 2;
    }

    directions.forEach((dir) => {
      const next = { position: [curr.position[0] + dir[0], curr.position[1] + dir[1]], time: curr.time + 1 };
      if (next.position[0] >= 0 && next.position[1] >= 0 && next.position[0] < grid.length && next.position[1] < grid[0].length) {
        if (grid[next.position[0]][next.position[1]] === 1) {
          queue.push(next);
        }
      }
    })
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) return -1
    }
  }
  return minTime;
};

let grid;

// Test #1
grid =
[[2,1,1]
,[1,1,0]
,[0,1,1]]
const result1 = orangesRotting(grid); // 4
console.log(result1);

// Test #2
grid =
[[1]] // if fresh oranges exist, return -1
const result2 = orangesRotting(grid);
console.log(result2); // -1

// Test #3
grid = [[0, 2]]
const result3 = orangesRotting(grid);
console.log(result3); // 0

// Test #4
grid = [[2,1,1],[0,1,1],[1,0,1]]
const result4 = orangesRotting(grid)
console.log(result4); // -1

