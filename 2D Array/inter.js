// length= n
// swap alternative number
// condition - if the product is present in array dont't swap else swap

let arr = [1, 4, 3, 8, 7, 3, 1]; //  [1, 8, 7, 3, 3, 4, 1]
swapArray()
function swapArray(){
let n= arr.length
let i = 0;
let j = 2;
while (j < n) {
  let prod = arr[i] * arr[j]; 
  let flag = 0;
  for (let x = 0; x < n; x++) {
      if (prod == arr[x] && i!=x && j!= x) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
      let temp =null
     temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  i =i+1;
  j= j + 1;
}


}
console.log(arr);

