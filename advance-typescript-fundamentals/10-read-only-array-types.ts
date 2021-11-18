// T - type parameter

// Option 1
function intersperse1<T>(array: readonly T[], separator: T): T[] {
  const newArray: T[] = [];
  for (const element of array) {
    if (newArray.length !== 0) {
      newArray.push(separator);
    }

    newArray.push(element);
  }

  return newArray;
}

const values1: string[] = ['A', 'B', 'C'];
// Property 'push' does not exist on type 'readonly string[]'
// values.push('D');
// values.push('E');
const valuesWithSeparators = intersperse1(values1, 'X');

// Option 2
function intersperse2<T>(array: T[], separator: T): T[] {
  const newArray: T[] = [];
  for (const element of array) {
    if (newArray.length !== 0) {
      newArray.push(separator);
    }

    newArray.push(element);
  }

  return newArray;
}

const values2: ReadonlyArray<string> = ['A', 'B', 'C'];
const valuesWithSeparators2 = intersperse1(values2, 'X');

console.log(values2);
console.log(valuesWithSeparators2);
