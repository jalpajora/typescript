{
  // infer
  // ReturnType
  // OR
  type ReturnTypeOf<TFunction extends (...args: any) => any> =
    TFunction extends (...args: any) => infer TReturnType ? TReturnType : any;

  type A = ReturnType<() => string>;
  type B = ReturnType<typeof Math.random>;
  type C = ReturnType<typeof Array.isArray>;
  // type D = ReturnTypeOf<string>;
}
