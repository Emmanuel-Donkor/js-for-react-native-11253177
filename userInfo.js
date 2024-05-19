
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
 const originalNames = ["Alice", "Bob", "Charlie"];
 const modifiedNames = ["ALICE", "bob", "CHARLIE"];
 const userProfiles = createUserProfiles(originalNames, modifiedNames);
 console.log(userProfiles);
// Output:
 [
   { originalName: 'Alice', modifiedName: 'ALICE', id: 1 },
   { originalName: 'Bob', modifiedName: 'bob', id: 2 },
   { originalName: 'Charlie', modifiedName: 'CHARLIE', id: 3 }
 ]

// Export the function if using in a Node.js environment
 module.exports = createUserProfiles;
