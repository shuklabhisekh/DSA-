// Description

// Given a n by n matrix. You have to rotate the elements of each ring of the matrix in the clockwise direction one place.
// Sample Input 1

// 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Sample Output 1

// 1 1 2 3
// 1 2 2 4
// 1 3 3 4
// 2 3 4 4

let matrix = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];
let N = 4;
send(N, matrix);

function send(N, matrix) {
  let row = 0;
  let col = 0;
  let prev = null;
  let cur = null;
  let lastRow = N;
  let lastCol = N;
  while (row < lastRow && col < lastCol) {
    if (row + 1 == lastRow || col + 1 == lastCol) break;

    prev = matrix[row + 1][col];
    for (let i = col; i < lastCol; i++) {
      cur = matrix[row][i];
      matrix[row][i] = prev;
      prev = cur;
    }
    row++;
    for (let i = row; i < lastRow; i++) {
      cur = matrix[i][lastCol - 1];
      matrix[i][lastCol - 1] = prev;
      prev = cur;
    }
    lastCol--;
    if (row < lastRow) {
      for (let i = lastCol - 1; i >= col; i--) {
        cur = matrix[lastRow - 1][i];
        matrix[lastRow - 1][i] = prev;
        prev = cur;
      }
    }
    lastRow--;
    if (col < lastCol) {
      for (let i = lastRow - 1; i >= row; i--) {
        cur = matrix[i][col];
        matrix[i][col] = prev;
        prev = cur;
      }
    }
    col++;
  }

  for (let i = 0; i < N; i++) {
    let bag = "";
    for (let j = 0; j < N; j++) {
      bag = bag + matrix[i][j] + " ";
    }
    console.log(bag);
  }
}
