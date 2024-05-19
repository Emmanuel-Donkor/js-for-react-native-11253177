
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


function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even number
        } else {
            return num * 3; // Triple the odd number
        }
    });
}


function formatArrayStrings(strArr, numArr) {
    return strArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize the string if the number is even
        } else {
            return str.toLowerCase(); // Convert the string to lowercase if the number is odd
        }
    });
}


 const inputNumbers = [1, 2, 3, 4, 5];
 const processedNumbers = processArray(inputNumbers);
 const inputStrings = ["Hello", "World", "JavaScript", "is", "Fun"];
 const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
 console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "fun"]

// Export the functions if using in a Node.js environment
 module.exports = { processArray, formatArrayStrings };

