"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Counter_value;
class Counter {
    constructor() {
        // Class fields are public by default,
        // if you want to make them private use `#` before the variable name
        // pronounced as "hash value"
        // private _value = 0;
        _Counter_value.set(this, 0);
    }
    increment() {
        __classPrivateFieldSet(this, _Counter_value, __classPrivateFieldGet(this, _Counter_value, "f") + 1, "f");
    }
    get count() {
        return __classPrivateFieldGet(this, _Counter_value, "f");
    }
}
_Counter_value = new WeakMap();
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
// Property '#value' is not accessible outside class 'Counter' because it has a private identifier.
// counter.#value = -100;
// Property '_value' is private and only accessible within class 'Counter'.
// counter._value = 5;
console.log(counter.count);
