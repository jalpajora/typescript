"use strict";
function swap(tuple) {
    const [first, second] = tuple;
    return [second, first];
}
const keyValuePair = [1, 'one'];
// OR
// const keyValuePair = [1, 'one'] as const;
const valueKeyPair = swap(keyValuePair);
console.log(keyValuePair);
console.log(valueKeyPair);
