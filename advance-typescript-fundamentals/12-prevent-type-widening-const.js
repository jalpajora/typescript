"use strict";
// Option 1
const ORIGIN = {
    x: 0,
    y: 0,
};
// Cannot assign to 'x' because it is a read-only
// ORIGIN.x = 1;
// Option 2
const ORIGIN1 = {
    x: 0,
    y: 0,
};
// Cannot assign to 'x' because it is a read-only
// ORIGIN1.x = 1;
// Option 3
const ORIGIN2 = Object.freeze({
    x: 0,
    y: 0,
});
// Cannot assign to 'x' because it is a read-only
// ORIGIN2.x = 1;
