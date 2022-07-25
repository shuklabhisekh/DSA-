let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
let target = 19;
console.log(search());
function search() {
  let i = 0;
  for (let j = matrix[0].length - 1; j >= 0; j--) {
    console.log(i,j,"out")

    if (i < matrix.length && matrix[i][j] == target) {
      return true;
    } else if (i < matrix.length && matrix[i][j] < target) {
        // console.log(matrix[i][j],"in",target)
    //   while (i < matrix.length) {
    //     if (matrix[i][j] == target) {
    //       return true;
    //     }
    //     i++;
    //   }
      // return false
    }
    if (j == 0 && i < matrix.length) {
      j = matrix[0].length;
      i++;
    }
  }
  return false;
}
