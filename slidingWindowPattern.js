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
// --------------------------------Problem #3:
/*
    Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
    Input: [2, 1, 5, 2, 3, 2], S=7 
    Output: 2
    Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
*/

/*
    Explanation : 
        Time Complexity  : while it may seem like this might have a time complexity of O(N2) however in reality its O(N) because each while loop only runs once per element. 
 */

const smallest_sum_equal_to_S = (s,arr) => {
    let windowSum = 0, minLength = Infinity, windowStart = 0
    for(windowEnd=0; windowEnd<arr.length; windowEnd++){
        // Keep on adding elements till windowSum is greater than s.
        windowSum += arr[windowEnd];
        while(windowSum >= s){
            // min length will either be the current minlength or the length of the current window + 1.
            minLength = Math.min(minLength, windowEnd - windowStart +1);
            // subtract the windows start from the total
            windowSum -= arr[windowStart];
            // move the pointer up. 
            windowStart++
            // This while loops main objective is to make the window as small as possible. 
        }
    }
    console.log("The max smallest sub array is : ", "with a length of : ", minLength  )
}

smallest_sum_equal_to_S(7, [2, 1, 5, 2, 3, 2])


// Problem #4 : 

    //Given a string, find the length of the longest substring in it with no more than K distinct characters.
    //Input: String="araaci", K=2
    //Output: 4
    //Explanation: The longest substring with no more than '2' distinct characters is "araa".

    // inputs : string and a k integer.
    //outputs : length of the longest substring with no more than K distinct characters.

    // Initial Strategy : 
        // 1. Use a forloop to loop through the string.
        // 2.Initialize a variable that will tell us how many current distinct characters that we have.
        // 3.Use an while loop to check for whenever the distinct characters = K


const longest_distinct_subString_kCharacters = (string, K) => {
    let charsFrequency = {},
        windowStart = 0,
        maxLength = -Infinity
    for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
        // Insert chars into the set until we reach counter=k
        const rightChar = string[windowEnd];
        if(!(rightChar in charsFrequency)){
            charsFrequency[rightChar] = 0
        };
        charsFrequency[rightChar] += 1;
        while(Object.keys(charsFrequency).length > K){
            const leftChar = string[windowStart];
            charsFrequency[leftChar] -= 1;
            if(charsFrequency[leftChar] === 0){
                delete charsFrequency[leftChar]
            };
            windowStart++
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    console.log('Max length is', maxLength)
}

longest_distinct_subString_kCharacters('acraaa', 1)