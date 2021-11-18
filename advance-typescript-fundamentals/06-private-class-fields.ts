class Counter {
  // Class fields are public by default,
  // if you want to make them private use `#` before the variable name
  // pronounced as "hash value"
  // private _value = 0;
  #value = 0;

  increment() {
    this.#value += 1;
  }

  get count() {
    return this.#value;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
// Property '#value' is not accessible outside class 'Counter' because it has a private identifier.
// counter.#value = -100;

// Property '_value' is private and only accessible within class 'Counter'.
// counter._value = 5;

console.log(counter.count);
