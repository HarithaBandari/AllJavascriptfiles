//2nd//
var x = { foo: 1, bar: 2 };
console.log(JSON.stringify(x));

x.toJSON = function() {
  return { baz: 3 };
};
console.log(JSON.stringify(x));