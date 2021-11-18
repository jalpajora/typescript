"use strict";
{
    // 1st Example
    let value;
    value = undefined;
    value = 'Hello World';
    if (typeof value === 'string') {
        const uppercaseText = value.toUpperCase();
        console.log(uppercaseText);
    }
    function range(from, to) {
        if (typeof from !== 'number' || typeof to !== 'number') {
            throw Error('range() expects exactly 2 numbers');
        }
        const values = [];
        for (let i = from; i < to; i++) {
            values.push(i);
        }
        return values;
    }
    console.log(range(0, 5));
}
