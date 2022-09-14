let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

let target = 19;
function search() {
    let row = matrix.length;
    let col = matrix[0].length;
    let j = col - 1;
    let i = 0;
    while(i<row& j>=0){
        if(matrix[i][j]===target){
            return true
    }
    else if(matrix[i][j]<target){
        i++
    }
    else{
        j--
    }
}

return false;
}
console.log(search());
