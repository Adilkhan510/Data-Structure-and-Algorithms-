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

// ---------------------------------------Example problem #2 : 
/*
    Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
 */

//  Game plan : do it the naive way first then refactor it.
//  Inputs : Array and a integer K.
//  Outputs : an maxSum integer.
const max_sub_array_of_size_k = (k, arr) => {
    // initialize a max variable
    let max = 0
    // Check for the edgecase 
    if(k> arr.length) return null;
    // First loop will only go till there are k elements left so the inner loop can finish that so we subtract k and then add 1 because arrays start at i=0.
    // 
    for(let i=0; i<arr.length - k + 1 ; i++){
        // create a sum for the window which is going to be zero at the start of each inner loop.
        windowSum = 0;
        // Loop over the next k elements and then add their sums to the windowSum 
        for(let j=i; j < k + i ; j++){
            windowSum += arr[j]
        }
        // max will be whatever is bigger the windowSum or the current max.
        max = Math.max(max, windowSum)
    }
    return max
}

console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);

// Refactored solution: 
/* 
    Game plan : 
        instead of creating 2 for loops we can just the slide window.
        1. create the initial window
        2. make that the max.
 */

const max_sub_array_of_size_k_refactored = (k, arr) => {
    // windowStart is the pointer we use to move the windows tail forward as it goes through the loop.
    let windowStart = 0;
    let max = 0;
    let windowSum=0
    for(let i=0; i<arr.length ; i++){
        windowSum += arr[i];
        if(i >= k - 1){
            max = Math.max(windowSum,max);
            windowSum -= arr[windowStart];
            windowStart++
        }
    }
    return max
}
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k_refactored(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k_refactored(2, [2, 3, 4, 1, 5])}`);