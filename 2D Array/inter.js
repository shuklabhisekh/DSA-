// let array = [1, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 8];
// let target = 10;

// // 1+1+1+1+1
// // 1+2+2
// // 3+1+1
// // 3+2
// // 4+1
// // 5

// check()
// function check() {
//     for (let i = 0; i < array.length; i++) {
//         let sum = 0;
//         let index=[]
//         let flag=0
//         for (let j = i; j < array.length; j++) {
//     index.push(array[j])
//       sum = sum + array[j];
//       if (sum == target) {
//         console.log(target);
//         flag=1
//         break
//       }
//     }
//     if(flag==1){
// console.log(index,"element")
//     }
//   }
// }
// // let obj = {};
// // for (let i = 0; i < array.length; i++) {
// //   if (obj[array[i]] == undefined) {
// //     obj[array[i]] = 1;
// //   } else {
// //     obj[array[i]] = obj[array[i]] + 1;
// //   }
// // }
// // let newArray = [];

// // for (let x in obj) {
// //   newArray.push(x);
// // }
// // console.log(newArray);

// var arr = new Array(5).fill(0).map((function(a,b){return b+1}))
