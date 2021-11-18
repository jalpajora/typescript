function assertIsNumber(value: unknown, name: string): asserts value is number {
  if (typeof value !== 'number') {
    throw Error(`Expected "${name}" to be a number`);
  }
}

function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw Error(message);
  }
}
function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
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

  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }

  return values;
}

console.log(range(0, 5));

// this will throw an error
// throw Error('range() expects exactly 2 numbers');
console.log(range('A' as any, 'F' as any));
