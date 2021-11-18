function swap<T, U>(tuple: readonly [T, U]): [U, T] {
  const [first, second] = tuple;

  return [second, first];
}

const keyValuePair: [number, string] = [1, 'one'];
// OR
// const keyValuePair = [1, 'one'] as const;
const valueKeyPair = swap(keyValuePair);

console.log(keyValuePair);
console.log(valueKeyPair);
