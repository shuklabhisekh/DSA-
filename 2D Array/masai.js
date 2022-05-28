// let arr = [ 1, 2, 3, 4 ];

// function subsequence(){

//     let opsize = Math.pow(2,n)
// }

function printSubsequences(arr, n)
{

    // Number of subsequences is (2**n -1)
    let opsize = parseInt(Math.pow(2, n), 10);

    // Run from counter 000..1 to 111..1
    for(let counter = 1; counter < opsize; counter++)
    { let store = ""
        for(let j = 0; j < n; j++)
        {

            // Check if jth bit in the counter is set
            // If set then print jth element from arr[]
            if ((counter & (1 << j)) != 0)
                // document.write(arr[j] + " ");
               store = store + arr[j] + " "
        }
        console.log(store)
    }
}
 
let arr = [ 1, 2, 3, 4 ];
let n = arr.length;   

printSubsequences(arr, n)
