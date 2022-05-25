// const store = ["eat","tea","tan","nat","ate","bat"]
// let ans=[]
// let diff=[]
// for(let i=0;i<store.length;i++){
//   let index=arr[i]
//   if(i==0){
// ans.push(index[i])
// diff.push(index[i])
//   }
//   else{
//     // for(let j=0;j<diff;j++){
//     //   let ind=diff[j]
//     //   for(let k=0;k<ind.length;k++){

//     //   }
//     // }

//   }
// }

store();
sec();

async function store() {
  let value = await "https://api.icndb.com/jokes/random";
  console.log("1");
}

function sec() {
  console.log(2);
}
