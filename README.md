# js-for-react-native-11253177

# README.md

## Overview

This repository contains three utility functions for processing arrays and creating user profiles. The functions are:

1. `createUserProfiles(names, modifiedNames)`: Creates user profiles with original and modified names.
2. `processArray(arr)`: Processes an array of numbers by squaring even numbers and tripling odd numbers.
3. `formatArrayStrings(strArr, numArr)`: Formats an array of strings based on an array of numbers, capitalizing strings if the corresponding number is even and converting them to lowercase if the number is odd.

## Functions

### `createUserProfiles`

Creates user profiles by combining original and modified names with a unique ID.

**Parameters:**
- `names` (Array of Strings): An array of original names.
- `modifiedNames` (Array of Strings): An array of modified names corresponding to the original names.

**Returns:**
- Array of Objects: Each object contains `originalName`, `modifiedName`, and `id`.

**Example Usage:**

```javascript
const originalNames = ["Alice", "Bob", "Charlie"];
const modifiedNames = ["ALICE", "bob", "CHARLIE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//   { originalName: 'Alice', modifiedName: 'ALICE', id: 1 },
//   { originalName: 'Bob', modifiedName: 'bob', id: 2 },
//   { originalName: 'Charlie', modifiedName: 'CHARLIE', id: 3 }
// ]
```

### `processArray`

Processes an array of numbers by squaring even numbers and tripling odd numbers.

**Parameters:**
- `arr` (Array of Numbers): An array of numbers to be processed.

**Returns:**
- Array of Numbers: The processed array where even numbers are squared and odd numbers are tripled.

**Example Usage:**

```javascript
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [3, 4, 9, 16, 15]
```

### `formatArrayStrings`

Formats an array of strings based on an array of numbers. Strings corresponding to even numbers are capitalized, and those corresponding to odd numbers are converted to lowercase.

**Parameters:**
- `strArr` (Array of Strings): An array of strings to be formatted.
- `numArr` (Array of Numbers): An array of numbers used to determine the formatting of the strings.

**Returns:**
- Array of Strings: The formatted array of strings.

**Example Usage:**

```javascript
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const inputStrings = ["Hello", "World", "JavaScript", "is", "Fun"];
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "fun"]
```

## Exported Functions

The following functions are exported and can be used in other modules:

- `processArray`
- `formatArrayStrings`

```javascript
module.exports = { processArray, formatArrayStrings };
```

## Getting Started

1. Clone the repository.
2. Import the functions you need using `require`.

```javascript
const { processArray, formatArrayStrings } = require('./path_to_module');
```

3. Use the functions as demonstrated in the example usages.

## License

This project is licensed under the MIT License. See the LICENSE file for details.