let input = "abcd";
substring();
function substring() {
  let store = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      let ans = "";
      for (let k = i; k <= j; k++) {
        ans = ans + input[k];
      }
      store.push(ans);
    }
  }
  console.log(store);
}
