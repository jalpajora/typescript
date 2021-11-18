// EXAMPLE 1

type A = NonNullable<string>;
type B = NonNullable<string | null>;
type C = NonNullable<string | null | undefined>;
type D = NonNullable<null>;
type E = NonNullable<null | undefined>;

// EXAMPLE 2
type EmailRecipient = string | string[] | null | undefined;

type NonNullableEmailRecipient = NonNullable<EmailRecipient>;
// OR
type NonNullableEmailRecipient1 =
  | NonNullable<string>
  // string extends null | undefined ? never : string
  | NonNullable<string[]>
  // string[] extends null | undefined ? never : string[]
  | NonNullable<null>
  // null extends null | undefined ? never : null
  | NonNullable<undefined>;
// undefined extends null | undefined ? never : undefined;
