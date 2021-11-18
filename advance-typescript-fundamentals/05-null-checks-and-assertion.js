"use strict";
function assertIsNonNullish(value, message) {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
const root = document.getElementById('root');
assertIsNonNullish(root, "Couldn't find DOME element #root");
root.addEventListener('click', (e) => {
    console.log('clicked');
});
