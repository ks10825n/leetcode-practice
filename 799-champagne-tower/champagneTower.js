/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */

const champagneTower = (poured, query_row, query_glass) => {
  // make the matrix up to query_row
  let tower = new Array(query_row + 2).fill([]);
  tower = tower.map((glass, idx) => new Array(idx + 1).fill(0));
  // set the top to be total glasses poured
  tower[0][0] = poured;
  for (let i = 0; i < tower.length; i++) {
    // if at query_row + 1, break
    if (i > query_row) break;
    for (let j = 0; j < tower[i].length; j++) {
      // calculate overfill
      if (tower[i][j] > 1) {
        const overfill = tower[i][j] - 1;
        tower[i][j] = 1;
        tower[i+1][j] += overfill / 2;
        tower[i+1][j+1] += overfill / 2;
      }
    }
  }
  return tower[query_row][query_glass];
}

let poured, query_row, query_glass;

// Test #1
poured = 2, query_row = 1, query_glass = 1;
const result1 = champagneTower(poured, query_row, query_glass);
console.log(result1);

// Test #2
poured = 100000009, query_row = 33, query_glass = 17
const result2 = champagneTower(poured, query_row, query_glass);
console.log(result2);