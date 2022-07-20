let input1= "ram"
let input2= "rame"

let a=2
let b=2

function anagram(){

let obj={}
let obj2={}
for(let i=0;i<input1.length;i++){
    if(obj[input1[i]]== undefined){
    obj[input1[i]] = 1
    }
    else{
        obj[input1[i]] =  obj[input1[i]] +1
    }
}
for(let i=0;i<input2.length;i++){
    if(obj2[input2[i]]== undefined){
    obj2[input2[i]] = 1
    }
    else{
        obj2[input2[i]] =  obj2[input2[i]] +1
    }
}



// for(let i=0;i<input2.length;i++){
//     if(obj[input2[i]]>=0){
//         obj[input2[i]] = obj[input2[i]] -1
//     }
//     else{
//         return "Not anagram"
//         break;
//     }
// }

// let values = Object.values(obj)
// let store= values.every((e)=> e==0)
console.log(Object.keys(obj).length)
for(let x in obj){
    if(obj[x]!==obj2[x]){
        return "Not anagram"
    }
}
return " anagram"

}

console.log(anagram())
