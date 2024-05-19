
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even number
        } else {
            return num * 3; // Triple the odd number
        }
    });
}


 const inputArray = [1, 2, 3, 4, 5];
 const processedArray = processArray(inputArray);
 console.log(processedArray); // Output: [3, 4, 9, 16, 15]

// Export the function if using in a Node.js environment
module.exports = processArray;
