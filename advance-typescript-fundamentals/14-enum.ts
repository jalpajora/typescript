// Option 1 (type anotation per property)
const HTTPRequestMethod: {
  readonly GET: 'GET';
  readonly POST: 'POST';
} = {
  GET: 'GET',
  POST: 'POST',
};

// Option 2
// const assertion
const HTTPRequestMethod1 = {
  GET: 'GET',
  POST: 'POST',
} as const;

// Option 3 (using keyof)
// This will extract property values
type ValuesOf<T> = T[keyof T];
type HTTPRequestMethodType = ValuesOf<typeof HTTPRequestMethod>;

// Option 4: enum
enum HTTPRequestMethodEnum {
  GET = 'GET',
  POST = 'POST',
}

async function fetchJSON(url: string, method: 'GET' | 'POST') {
  const response = await fetch(url, { method });
  return response.json();
}

fetchJSON('https://example.com', HTTPRequestMethodEnum.GET).then(() => {
  console.log('success');
});
