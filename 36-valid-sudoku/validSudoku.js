/**
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules
 *
 * 1. Each row must contain the digits 1-9 without repetition
 * 2. Each column must contain the digits 1-9 without repetition
 * 3. Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9
 *  without reptition.
 *
 * Only the filled cells need to be validated. A partially filled board could
 * be valid, but not necessarily solvable.
 */

const isValidSudoku = (board) => {
  const isValidRow = (i, j, board) => {
    // row = board[0], board[1], etc...
    const row = board[i];
    const cell = board[i][j];
    for (let a = 0; a < row.length; a++) {
      if (a === j) {
        continue;
      }
      if (cell === row[a]) {
        return false;
      }
    }
    return true;
  };

  const isValidCol = (i, j, board) => {
    // col = board[i][0], board[i][1], etc...
    const cell = board[i][j];
    for (let a = 0; a < board.length; a++) {
      if (a === i) {
        continue;
      }
      if (cell === board[a][j]) {
        return false;
      }
    }
    return true;
  };

  const isValidSubBoard = (i, j, board) => {
    // subBoard = if i & j < 3, loop
    // find the quadrant it is in
    const subBoardRow = (Math.floor(i / 3)) * 3 + 3;
    const subBoardCol = (Math.floor(j / 3)) * 3 + 3;
    const cell = board[i][j];
    for (let a = Math.floor(i / 3) * 3; a < subBoardRow; a++) {
      for (let b = Math.floor(j / 3) * 3; b < subBoardCol; b++) {
        if ((a === i && b === j) || board[i][j] === '.') {
          continue;
        }
        if (cell === board[a][b]) {
          return false;
        }
      }
    }
    return true;
  };
  // traverse the board to find filled cells
  let isValid = true;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // if empty, no need to validate
      if (board[i][j] === '.') {
        continue;
      }
      if (!isValidRow(i, j, board) || !isValidCol(i, j, board) || !isValidSubBoard(i, j, board)) {
        isValid = false;
        break;
      }
    }
  }
  return isValid;
};

let board;

// // Test #1
// board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// const result1 = isValidSudoku(board);
// console.log(result1); // true

// // Test #2
// board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// const result2 = isValidSudoku(board);
// console.log(result2); // false

// Test #3
board =
[["3",".",".",".",".","4",".",".","."]
,[".",".",".",".","1",".","8",".","."]
,[".","7","2",".",".",".",".",".","."]
,[".",".","5",".",".",".",".",".","."]
,[".","4",".",".",".",".",".",".","."]
,[".",".",".",".",".",".","3",".","."]
,[".",".",".",".",".",".",".",".","1"]
,["1","3",".",".",".","5",".",".","."]
,[".",".",".",".","5",".",".","2","."]]
const result3 = isValidSudoku(board);
console.log(result3);