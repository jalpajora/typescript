{
  // 1st Example
  let value: unknown;

  value = undefined;
  value = 'Hello World';

  if (typeof value === 'string') {
    const uppercaseText = value.toUpperCase();
    console.log(uppercaseText);
  }

  // 2nd Example
  // function range(from: number, to: number): number[] {
  //   const values: number[] = [];
  //   for (let i = from; i < to; i++) {
  //     values.push(i);
  //   }

  //   return values;
  // }

  // console.log(range(0, 5));

  // When you want to write deffensive code, specially
  // if you are writing a library
  // this will help your users to have a better understanding

  function range(from: number, to: number): number[];
  function range(from: unknown, to: unknown): number[] {
    if (typeof from !== 'number' || typeof to !== 'number') {
      throw Error('range() expects exactly 2 numbers');
    }

    const values: number[] = [];
    for (let i = from; i < to; i++) {
      values.push(i);
    }

    return values;
  }

  console.log(range(0, 5));
}
