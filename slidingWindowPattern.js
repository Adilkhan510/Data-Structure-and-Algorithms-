// Sliding window Pattern :
// --useful when we are given an array or any object that has sequential element list and we want to find a contigous sublist in that list.
// --window could be an array or a #.

// Example Problem #1 : 
// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
//  Inputs : Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// --------Naive Solution :
const avgSum = (arr, n) => {
    // initialize an empty array 
    const results = [];
    // check for edge cases.
    if(n>arr.length){
        return null
    }
    for(let i=0; i<arr.length-n+1; i++){
        // Initialize a sum variable that will start at 0 during each iteration of the for loop.
        // Sum will hold the value through each loop then compare that to the max. 
        let sum = 0;
        // Create another for loop that will iterate over the next n numbers and add its total to the sum variable.
        for(let j=i; j<i+n; j++){
            sum += arr[j];
        }
        results.push(sum/n)
    }
    console.log("results 1: ", results)
}
// Refactored solution : 
/*
*/
const avgSum2 = (arr, k) =>{
    let results = [];
    /*
    initialize a pointer that will act as the back of the window and moving up after each a for loop.
    */
    let windowSum = 0.0;
    let windowStart = 0
    for(let i=0; i< arr.length; i++){
        // Add the first k elements to the windowSum variable
        windowSum += arr[i];
        if(i >= k - 1){
            // Push the result of the first window.
            results.push(windowSum/k);
            // subtract the first element from the window after adding it.
            windowSum -= arr[windowStart];
            // Move up the pointer
            windowStart++
        }
    }
    console.log("results 2: ", results)
}
avgSum([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
avgSum2([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);

// Example problem #2 : 
// 


