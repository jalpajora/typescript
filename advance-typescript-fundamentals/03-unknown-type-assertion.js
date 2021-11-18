"use strict";
function assertIsNumber(value, name) {
    if (typeof value !== 'number') {
        throw Error(`Expected "${name}" to be a number`);
    }
}
function assert(condition, message) {
    if (!condition) {
        throw Error(message);
    }
}
function range(from, to) {
    // Two Ways:
    // Option 1
    // assert(
    //   typeof from === 'number' && typeof to === 'number',
    //   'range() expects exactly 2 numbers'
    // );
    // Option 2
    // assert(typeof from === 'number', 'from must be a number');
    // assert(typeof to === 'number', 'to must be a number');
    // Option 3
    assertIsNumber(from, 'from');
    assertIsNumber(to, 'to');
    const values = [];
    for (let i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
console.log(range(0, 5));
// this will throw an error
// throw Error('range() expects exactly 2 numbers');
console.log(range('A', 'F'));
