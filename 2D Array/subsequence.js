let arr = [1, 2, 3];

let ans = [];
let str = "";

subsequence(arr, str, 0);
console.log(ans)
function subsequence(arr, str, index) {
  if (index == arr.length) {
     ans.push(str);
    return;
  }

  subsequence(arr, str + arr[index], index + 1);
  subsequence(arr, str, index + 1);
}