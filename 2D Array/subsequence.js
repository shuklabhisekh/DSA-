
let arr= [1,2,3,4]

let ans=[]
let str=""

subsequence(arr,str,0)
function subsequence(arr,str,index){
    
    console.log(ans,index,"check")
    if(index==arr.length){
        ans.push(str)
        return 
    }

    subsequence(arr, str+arr[index], index+1)
    subsequence(arr,str,index+1)
    

}