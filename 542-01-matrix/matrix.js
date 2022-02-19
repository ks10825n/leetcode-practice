/**
 * Given a m x n binary matrix, mat, return the distance of the nearest -
 * for each cell
 *
 * Brute Force
 * Iterate through the matrix.
 *  If zero, do nothing
 *  If not-zero, iterate over the matrix and calculate distance and save it. If
 *    distance is smaller, replace until you find the smallest distance.
 *  Replace the current cell with the smallest distance
 *  O(m x n)^2 -> quadratic
 *
 * Breadth-First Search
 * Iterate through the matrix
 *  If zero, add to queue to search for non-zeroes
 *  If non-zero, replace with Infinity
 *
 * While the queue is not empty
 *  shift the queue and visit shifted
 *  If currently visited distance is larger than saved in queue, replace with current distance
 *    1st round will only have zeroes
 *    2nd round should include zeroes neighbors. If they are infinity, replace with 1
 *    3rd round should include 1's neighbors. If they are infinity, replace with 2... etc
 *  For each direction made
 *    If the direction is valid, create a new vist to add to the stack
 *      If the new position is not visited before (is equal to Infinity),
 *      Add to queue
 */

const updateMatrix = (mat) => {
  const queue = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] !== 0) mat[i][j] = Infinity;
      else queue.push({ position: [i, j], distance: 0 })
    }
  }

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  while (queue.length !== 0) {
    const curr = queue.shift();
    if (mat[curr.position[0]][curr.position[1]] > curr.distance) {
      mat[curr.position[0]][curr.position[1]] = curr.distance;
    }
    directions.forEach((dir) => {
      const next = { position: [curr.position[0] + dir[0], curr.position[1] + dir[1]], distance: curr.distance + 1 }
      if (next.position[0] >= 0 && next.position[1] >= 0 && next.position[0] < mat.length && next.position[1] < mat[0].length) {
        if (mat[next.position[0]][next.position[1]] === Infinity) {
          queue.push(next);
        }
      }
    })
  }

  return mat;
};

let mat;

// Test #1
mat =
[[0,0,0]
,[0,1,0]
,[0,0,0]]
const result1 = updateMatrix(mat);
console.log(result1);
// [[0,0,0]
// ,[0,1,0]
// ,[0,0,0]]

// Test #2
mat =
[[0,0,0]
,[0,1,0]
,[1,1,1]]
const result2 = updateMatrix(mat);
console.log(result2)
// [[0,0,0]
// ,[0,1,0]
// ,[1,2,1]]