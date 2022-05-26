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

// console.log([]=="")

// async function store() {
//   let value = await "https://api.icndb.com/jokes/random";
//   console.log("1");
// }

// function sec() {
//   console.log(a);
// }

// let arr = [1,2,4,9,5,6,7]
// let a= 10
// console.log(isNaN(a))
// console.log(arr.slice(1)) //4,9,5,6
// console.log(arr)


// const randomNumbers = [4, 11, 42, 14, 39];
// const filteredArray = randomNumbers.filter(n => {  
//   return n > 5;
// });

// console.log(filteredArray,randomNumbers)


// const arrayOfNumbers = [1, 2, 3, 4];
 
// const sum = arrayOfNumbers.reduce((x,acc)=>{
//   return acc + x
// },100)
 
// console.log(sum)



// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
// // add string after each final participant
// const announcements = finalParticipants.map(member => {
//   return member + ' joined the contest.';
// })
 
// console.log(announcements);

// fun(1,2,4,5)

// function fun(){
//   console.log([...arguments])
// }


  // // SHALLOW EQUALITY
  const source = {
    name: "Abhishek",
    detail: {
      age: 20,
      address: {
        city: "Bangalore",
        state: "Karnataka",
      },
    },
  };

  const target = {
    name: "Abhishek",
    detail: {
      age: 20,
      address: {
        city: "Bangalore",
        state: "Karnataka",
      },
    },
  };


  const deepCompare = (source, target) => {
    let sourcekeys = Object.keys(source);
    let targetkeys = Object.keys(target);
    if(sourcekeys.length!=targetkeys.length){
      return false
    }

    for( let i=0;i<sourcekeys.length;i++){
      if(typeof source[sourcekeys[i]]=="object"){
        if(!deepCompare(source[sourcekeys[i]],target[targetkeys[i]])){
          return false
        }
      }
      else{
        if(source[sourcekeys[i]]!= target[targetkeys[i]]){
          return false
        }
      }
    }
    return true;
  };
  console.log(deepCompare(source, target));
  // const shallowCompare = (source, target) => {
  //   const sourcekeys = Object.keys(source);
  //   const targetkeys = Object.keys(target);
  //   if (sourcekeys.length !== targetkeys.length) {
  //     console.log(sourcekeys, targetkeys)
  //     return false;

  //   }
  //   for (let i = 0; i < sourcekeys.length; i++) {
  //     if (source[sourcekeys[i]] !== target[sourcekeys[i]]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };
  // console.log(shallowCompare(source, target));