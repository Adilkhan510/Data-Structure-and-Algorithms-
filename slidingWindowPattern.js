// Sliding window Pattern :
// --useful when we are given an array or any object that has sequential element list and we want to find a contigous sublist in that list.
// --window could be an array or a #.

// Example Problem #1 : 
// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
//  Inputs : Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// --------Naive Solution :
const avgSum = (arr, n) => {
    let max= -Infinity;
    for(let i=0; i<arr.length-n+1; i++){
        // Initialize a temp variable that will start at 0 during each iteration of the for loop.
        let temp = 0;
        // Create another for loop that will iterate over the next n numbers and add its total to the temp variable.
        for(let j=i; j<i+n; j++){
            temp += arr[i+j];
        }
        // If the temp variable is greater than the max then max = temp.
        if(temp > max){
            max = temp
        }
    }
    console.log(max)
}

avgSum([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)


