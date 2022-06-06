// Using built in JS array

let array = ["apples", "bananas", "cucumbers", "dates", "elderberries"];

// Reading

// O(1) time
let a = array[0];

// Insertion

// O(1) time
array.push("strawberries");

// O(n) time
array.unshift("blueberries");

// O(n) time
array.splice(3, 0, "cherries");

// Deletion

// O(1) time
array.pop();

// O(n) time
array.shift();

// O(n) time
array.splice(1, 1);

// Searching - Linear

// O(n)
let index;
for (let element of array) {
    if (element === 'elderberries') {
        index = element;
    }
}

// O(n)
array.indexOf('dates');