function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
let result = [''];
for(let i = 1; i < arr.length; i+=2){
result.push(arr.[i]);
}
return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
let result = [''];
    for (let i = arr.length - 1; i>0; i -= 2){
        result.push(arr.[i])
    }
return result;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
let result = ['']; 
    for (let i =1; i < arr.length; i++){
        if((i & (i-1)) === 0){
            result.push(arr[i]);
        }
        return result;
    }
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
let result = [];
    let power = 1; // Start with the first power of n, which is n^0 (index 0)

    // Loop until the power of n exceeds the length of the array
    while (power < arr.length) {
        result.push(arr[power]); // Add the element at the current power index to the result
        power *= n; // Move to the next power of n
    }

    return result;
}


function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    if (length % 2 === 0) {
        startIndex = length / 2;
    } else {
        startIndex = Math.floor(length / 2) + 1;
    }
    return arr.slice(startIndex);
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
