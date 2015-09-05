let obj = { 
  a: [
    { foo: 123, bar: 'abc' }, 
    {}
  ], 
  b: true 
};

let { 
  a: [
    {foo: fooValue}
  ]
} = obj; // f = 123

console.log("fooValue:", fooValue, bValue);
