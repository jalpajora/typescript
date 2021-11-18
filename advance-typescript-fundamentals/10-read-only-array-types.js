"use strict";
// T - type parameter
// Option 1
function intersperse1(array, separator) {
    const newArray = [];
    for (const element of array) {
        if (newArray.length !== 0) {
            newArray.push(separator);
        }
        newArray.push(element);
    }
    return newArray;
}
const values1 = ['A', 'B', 'C'];
// Property 'push' does not exist on type 'readonly string[]'
// values.push('D');
// values.push('E');
const valuesWithSeparators = intersperse1(values1, 'X');
// Option 2
function intersperse2(array, separator) {
    const newArray = [];
    for (const element of array) {
        if (newArray.length !== 0) {
            newArray.push(separator);
        }
        newArray.push(element);
    }
    return newArray;
}
const values2 = ['A', 'B', 'C'];
const valuesWithSeparators2 = intersperse1(values2, 'X');
console.log(values2);
console.log(valuesWithSeparators2);
